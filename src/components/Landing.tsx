import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KAVISH
              <br />
              <span>PARMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 style={{ display: "flex", flexDirection: "column" }}>
              <span>Freelance</span>
              <span>Designer & Developer</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
