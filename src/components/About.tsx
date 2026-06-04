import "./styles/About.css";
import { useNavigationTransition } from "../context/NavigationTransition";
import { useMagneticHover } from "./utils/useMagneticHover";

const About = () => {
  const { startTransition } = useNavigationTransition();
  const btnRef = useMagneticHover<HTMLButtonElement>(0.38);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <p className="para-highlight">
          Helping brands to stand out in the digital era. Together we will set
          the new status quo. No nonsense, always on the cutting edge.
        </p>

        <p className="para-sub small-text">
          The combination of my passion for design, code &amp; interaction
          positions me in a unique place in the web design world.
        </p>

        <div className="about-circle-btn-wrap">
          <button
            ref={btnRef}
            type="button"
            className="about-circle-btn"
            aria-label="About me"
            onClick={(e) => startTransition("/about", "ABOUT", e)}
          >
            <span>About me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
