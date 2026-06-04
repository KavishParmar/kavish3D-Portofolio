import { useCallback, useEffect, useRef, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const greetings = ["Hola", "Bonjour", "नमस्ते", "Ciao", "こんにちは", "Hallo", "Olá", "स्वागतम्"];
const GREETING_INTERVAL = 160;

const Loading = ({ percent: _percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [exiting, setExiting] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const exitStartedRef = useRef(false);

  const startExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setExiting(true);

    import("./utils/initialFX").then((module) => {
      module.initialFX();
    });

    window.setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, [setIsLoading]);

  // Safety timeout
  useEffect(() => {
    const safetyStart = window.setTimeout(startExit, 5000);
    return () => window.clearTimeout(safetyStart);
  }, [startExit]);

  // Cycle greetings; exit immediately after the last one
  useEffect(() => {
    if (exitStartedRef.current) return;
    if (greetingIndex < greetings.length - 1) {
      const t = window.setTimeout(() => setGreetingIndex((i) => i + 1), GREETING_INTERVAL);
      return () => window.clearTimeout(t);
    }
    // Last greeting — exit right away without waiting for asset load
    const t = window.setTimeout(startExit, GREETING_INTERVAL);
    return () => window.clearTimeout(t);
  }, [greetingIndex, startExit]);

  return (
    <div className={`loading-screen${exiting ? " loading-screen-exit" : ""}`}>
      {/*
        Same SVG curtain as the page transition.
        The path fills 0→100vh with a bezier that dips to 120vh at the center.
        On exit the whole div slides to translateY(-120%), making the curved
        bottom edge sweep upward across the viewport before disappearing.
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
        className="loading-screen-svg"
        aria-hidden="true"
      >
        <path d="M0 0 L100 0 L100 100 Q50 120 0 100 Z" fill="#111111" />
      </svg>

      <div className="loading-screen-text">
        <span className="loading-screen-dot">•</span>
        <span key={greetingIndex} className="loading-screen-word">{greetings[greetingIndex]}</span>
      </div>
    </div>
  );
};

export default Loading;
