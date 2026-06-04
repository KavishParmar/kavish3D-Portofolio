import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import "../components/styles/InnerPage.css";
import "../components/styles/AboutPage.css";

const GREETINGS = [
  "Hello", "Bonjour", "Namaste", "Ciao", "Hola",
  "こんにちは", "Hallo", "Olá", "Hallå", "Guten Tag",
];

const AboutPage = () => {
  const [greetIdx, setGreetIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setGreetIdx((i) => (i + 1) % GREETINGS.length),
      1800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <PageLayout pageKey="about" lightBg>
      <main className="inner-page-main">

        {/* ── Rotating greeting ── */}
        <div className="ap-greetings section-container">
          <span key={greetIdx} className="ap-greet-word">
            {GREETINGS[greetIdx]}
          </span>
        </div>

        {/* ── Hero statement ── */}
        <section className="ap-hero section-container">
          <h1 className="ap-hero-title">
            Helping brands thrive<br />in the digital world.
          </h1>
          <p className="ap-hero-body">
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
        </section>

        {/* ── Bio + image ── */}
        <section className="ap-bio section-container">
          <div className="ap-bio-text">
            <p>
              The combination of my passion for design, code &amp; interaction
              positions me in a unique place in the web design world. I build
              experiences that feel alive — not just pages that look good.
            </p>
            <p>
              I'm Kavish Parmar, an AI Agency Founder &amp; Web Developer based
              in India. I specialise in crafting digital products that marry
              strong visual design with robust engineering — and increasingly,
              intelligent automation that gives businesses a real edge.
            </p>
          </div>

          {/* Placeholder — swap src for a real photo when ready */}
          <div className="ap-bio-image">
            <span className="ap-bio-image-placeholder">Photo coming soon</span>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="ap-services section-container">
          <p className="ap-section-label">What I do</p>
          <ul className="ap-service-list">
            <li className="ap-service-item">
              <span className="ap-service-num">01</span>
              <div className="ap-service-body">
                <h3>Design</h3>
                <p>
                  Strong, user-friendly digital designs with a clear visual
                  language and deliberate purpose — built to convert and delight.
                </p>
              </div>
            </li>
            <li className="ap-service-item">
              <span className="ap-service-num">02</span>
              <div className="ap-service-body">
                <h3>Development</h3>
                <p>
                  Scalable websites built from scratch with micro-animations,
                  smooth transitions, and interaction that brings interfaces to life.
                </p>
              </div>
            </li>
            <li className="ap-service-item">
              <span className="ap-service-num">03</span>
              <div className="ap-service-body">
                <h3>AI Solutions</h3>
                <p>
                  Intelligent automation and AI integrations — from chatbots to
                  full workflow pipelines — that give businesses a competitive edge.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* ── Approach (replaces Awards) ── */}
        <section className="ap-approach section-container">
          <p className="ap-section-label">My approach</p>
          <div className="ap-approach-grid">
            <div className="ap-approach-item">
              <h3>Quality first</h3>
              <p>
                Every pixel, every line of code — crafted with intention.
                No shortcuts, no compromise on the things that matter.
              </p>
            </div>
            <div className="ap-approach-item">
              <h3>Interaction-driven</h3>
              <p>
                Micro-animations and transitions are the soul of great digital
                experience. I obsess over the details most people skip.
              </p>
            </div>
            <div className="ap-approach-item">
              <h3>Always learning</h3>
              <p>
                AI, new frameworks, emerging patterns — I stay on the cutting
                edge so my clients never fall behind.
              </p>
            </div>
          </div>
        </section>

      </main>
    </PageLayout>
  );
};

export default AboutPage;
