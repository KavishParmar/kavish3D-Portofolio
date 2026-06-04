import { useRef } from "react";
import "./styles/About.css";
import { useNavigationTransition } from "../context/NavigationTransition";

const About = () => {
  const { startTransition } = useNavigationTransition();
  const btnRef = useRef<HTMLButtonElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-top-row">
          <p className="para-highlight">
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </p>

          <div
            className="about-circle-btn-wrap"
            ref={wrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <button
              ref={btnRef}
              type="button"
              className="about-circle-btn"
              aria-label="About me"
              onClick={() => startTransition("/about", "ABOUT")}
              style={{ transition: "transform 0.4s cubic-bezier(0.7,0,0.2,1), border-color 0.4s ease, color 0.3s ease" }}
            >
              <span>About me</span>
            </button>
          </div>
        </div>

        <p className="para-sub small-text">
          The combination of my passion for design, code &amp; interaction
          positions me in a unique place in the web design world.
        </p>
      </div>
    </div>
  );
};

export default About;
