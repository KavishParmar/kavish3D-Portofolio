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

          {/* 2023 — RIGHT side */}
          <div className="career-info-box career-right">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development</h4>
                <h5>HTML, CSS, JavaScript, React</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started my journey into the world of web development. Learned the
              fundamentals of building responsive websites, diving deep into
              frontend technologies and modern JavaScript frameworks.
            </p>
          </div>

          {/* 2024 — LEFT side */}
          <div className="career-info-box career-left">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Advanced Web & 3D Development</h4>
                <h5>Three.js, React Three Fiber, AI Integration</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Leveled up into advanced web development — building immersive 3D
              web experiences with Three.js and exploring how AI can enhance
              modern web applications. Pushed the boundaries of what's possible
              in the browser.
            </p>
          </div>

          {/* 2025 — RIGHT side */}
          <div className="career-info-box career-right">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Agents & High-End Websites</h4>
                <h5>Agentic AI, Voice Agents, 3D Web</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Dove headfirst into the AI revolution — building agentic AI
              systems, AI voice agents, and integrating intelligent automation
              into cutting-edge 3D and high-end websites. Where AI meets
              premium web experiences.
            </p>
          </div>

          {/* 2026 — LEFT side */}
          <div className="career-info-box career-left">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exploring New Frontiers</h4>
                <h5>Full-Stack AI, Creative Technology</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pushing into uncharted territory — experimenting with full-stack
              AI-powered products, generative interfaces, and the intersection
              of creativity and technology. The journey is just getting started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
