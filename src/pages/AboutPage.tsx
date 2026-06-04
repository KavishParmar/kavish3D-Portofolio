import PageLayout from "../components/PageLayout";
import "../components/styles/About.css";
import "../components/styles/InnerPage.css";

const AboutPage = () => {
  return (
    <PageLayout pageKey="about">
      <main className="inner-page-main">

        {/* ── Hero ── */}
        <section className="ip-hero section-container">
          <p className="ip-kicker pe-kicker">Who I am</p>
          <h1 className="ip-title pe-title">
            Designer,<br />
            Developer,<br />
            <span>Problem solver.</span>
          </h1>
          <p className="ip-subtitle pe-body">
            I help brands stand out in the digital era — with sharp design, clean code, and ideas that move.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="ip-rule section-container pe-body" />

        {/* ── About text ── */}
        <section className="ip-about-text section-container pe-body">
          <div className="ip-about-col">
            <p>
              The combination of my passion for design, code &amp; interaction positions me in a
              unique place in the web design world. I build experiences that feel alive.
            </p>
            <p>
              I help companies from all over the world with tailor-made solutions. With each
              project I push my work to new horizons, always putting quality first.
            </p>
          </div>
          <div className="ip-about-col ip-about-stats">
            <div className="ip-stat">
              <span className="ip-stat-num">3+</span>
              <span className="ip-stat-label">Years experience</span>
            </div>
            <div className="ip-stat">
              <span className="ip-stat-num">20+</span>
              <span className="ip-stat-label">Projects delivered</span>
            </div>
            <div className="ip-stat">
              <span className="ip-stat-num">100%</span>
              <span className="ip-stat-label">Client satisfaction</span>
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="ip-pillars section-container">
          <p className="ip-kicker pe-kicker">What I do</p>
          <div className="ip-pillar-grid">
            <div className="ip-pillar pe-item">
              <span className="ip-pillar-num">01</span>
              <h3>Design</h3>
              <p>Strong, user-friendly digital designs with a clear visual language and purpose.</p>
            </div>
            <div className="ip-pillar pe-item">
              <span className="ip-pillar-num">02</span>
              <h3>Development</h3>
              <p>Scalable websites built from scratch — focused on micro-animations and interaction.</p>
            </div>
            <div className="ip-pillar pe-item">
              <span className="ip-pillar-num">03</span>
              <h3>AI Solutions</h3>
              <p>Intelligent automation and AI integrations that give businesses a competitive edge.</p>
            </div>
            <div className="ip-pillar pe-item">
              <span className="ip-pillar-num">04</span>
              <h3>Full Package</h3>
              <p>Concept to launch. Strategy, design, and development — all in one place.</p>
            </div>
          </div>
        </section>

      </main>
    </PageLayout>
  );
};

export default AboutPage;
