import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSmoother } from "./utils/scrollSmoother";
import "./styles/BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const handleClick = () => {
    const smoother = getSmoother();
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
