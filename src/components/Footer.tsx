import { useEffect, useState } from "react";
import { useNavigationTransition } from "../context/NavigationTransition";
import { useMagneticHover } from "./utils/useMagneticHover";
import "./styles/Footer.css";

const Footer = () => {
  const { startTransition } = useNavigationTransition();
  const [time, setTime] = useState("");
  const getInTouchRef = useMagneticHover<HTMLButtonElement>(0.28);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(now);
      setTime(`${formatted} GMT+5:30`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* ── Heading ── */}
        <div className="footer-hero">
          <img
            src="/images/kavish.png"
            alt="Kavish Parmar"
            className="footer-avatar"
          />
          <h2 className="footer-cta">
            Let's work<br />together
          </h2>
        </div>

        {/* ── Divider + Get in touch ── */}
        <div className="footer-divider-row">
          <div className="footer-divider-line" />
          <button
            ref={getInTouchRef}
            type="button"
            className="footer-git-btn"
            onClick={(e) => startTransition("/contact", "CONTACT", e)}
          >
            Get in touch
          </button>
        </div>

        {/* ── Contact pills ── */}
        <div className="footer-contact-row">
          <div className="footer-pills">
            <a href="mailto:kavishparmar2@gmail.com" className="footer-pill">
              kavishparmar2@gmail.com
            </a>
            <a href="tel:+919302492158" className="footer-pill">
              +91 9302492158
            </a>
          </div>
        </div>

        {/* ── Bottom info bar ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-col">
            <span className="footer-bottom-label">VERSION</span>
            <span className="footer-bottom-value">2026 © Edition</span>
          </div>
          <div className="footer-bottom-col">
            <span className="footer-bottom-label">LOCAL TIME</span>
            <span className="footer-bottom-value">{time}</span>
          </div>
          <div className="footer-bottom-col footer-bottom-socials">
            <span className="footer-bottom-label">SOCIALS</span>
            <div className="footer-bottom-links">
              <a href="https://www.linkedin.com/in/kavishparmar/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/kavishparmar" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.instagram.com/kavish.build/" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
