import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My learning <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Web Development</h4>
                <h5>React, TypeScript, Three.js</h5>
              </div>
              <h3>2024 – PRESENT</h3>
            </div>
            <p>
              Dedicated the past year to mastering modern frontend development. 
              Focused on building interactive, high-performance web applications 
              and exploring 3D web experiences. Continuously building projects and expanding my technical stack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editing</h4>
                <h5>Adobe Premiere Pro</h5>
              </div>
              <h3>EARLY 2024</h3>
            </div>
            <p>
              Spent 6 to 8 months learning and practicing video editing. 
              Developed a strong eye for visual storytelling, pacing, and aesthetics, 
              which now heavily influences my approach to UI/UX and web design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
