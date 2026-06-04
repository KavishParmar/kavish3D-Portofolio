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
    <div className={`loading-screen ${exiting ? "loading-screen-exit" : ""}`}>
      <div className="loading-screen-text">
        <span className="loading-screen-dot">•</span>
        <span key={greetingIndex} className="loading-screen-word">{greetings[greetingIndex]}</span>
      </div>
    </div>
  );
};

export default Loading;
