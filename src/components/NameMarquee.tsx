import { useEffect, useRef } from "react";
import "./styles/NameMarquee.css";

const NameMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const targetSpeedRef = useRef(-1.5);   // negative = right→left (default)
  const currentSpeedRef = useRef(-1.5);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let singleW = 0;
    let rafId: number;

    const measure = () => {
      singleW = track.scrollWidth / 4;
    };

    const step = () => {
      currentSpeedRef.current +=
        (targetSpeedRef.current - currentSpeedRef.current) * 0.06;

      posRef.current += currentSpeedRef.current;

      if (posRef.current >= singleW) posRef.current -= singleW;
      if (posRef.current <= -singleW) posRef.current += singleW;

      track.style.transform = `translateX(${posRef.current}px)`;
      rafId = requestAnimationFrame(step);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) {
        // Scrolling UP — reverse direction
        targetSpeedRef.current = 1.5;
      } else {
        // Scrolling DOWN — keep / restore default direction
        targetSpeedRef.current = -1.5;
      }
      clearTimeout(timerRef.current!);
      timerRef.current = setTimeout(() => {
        targetSpeedRef.current = -1.5;
      }, 500);
    };

    const start = () => {
      measure();
      rafId = requestAnimationFrame(step);
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(start);
    } else {
      start();
    }

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerRef.current!);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  const text = "Kavish  Parmar -   ";

  return (
    <div className="name-marquee">
      <div ref={trackRef} className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default NameMarquee;
