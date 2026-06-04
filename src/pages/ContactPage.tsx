import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import "../components/styles/Contact.css";
import "../components/styles/ContactForm.css";
import "../components/styles/InnerPage.css";

const ContactPage = () => {
  return (
    <PageLayout pageKey="contact">
      <main className="inner-page-main">

        {/* ── Hero ── */}
        <section className="ip-hero section-container">
          <p className="ip-kicker pe-kicker">Get in touch</p>
          <h1 className="ip-title pe-title">
            Let's build<br />
            something <span>great.</span>
          </h1>
          <p className="ip-subtitle pe-body">
            Open to new projects, creative collaborations, and ambitious ideas. Let's talk.
          </p>
        </section>

        {/* ── Contact grid ── */}
        <section className="ip-contact-grid section-container pe-body">

          {/* Left — form */}
          <div className="ip-contact-form-col">
            <ContactForm />
          </div>

          {/* Right — info */}
          <div className="ip-contact-info-col">
            <div className="ip-contact-info-block">
              <h4>Direct</h4>
              <a href="mailto:kavishparmar5@gmail.com" className="ip-contact-email">
                <MdEmail /> kavishparmar5@gmail.com
              </a>
            </div>

            <div className="ip-contact-info-block">
              <h4>Socials</h4>
              <div className="ip-social-links">
                <a href="https://linkedin.com/in/kavishparmar" target="_blank" rel="noreferrer" className="ip-social-link">
                  LinkedIn <MdArrowOutward />
                </a>
                <a href="https://github.com/KavishParmar" target="_blank" rel="noreferrer" className="ip-social-link">
                  GitHub <MdArrowOutward />
                </a>
                <a href="https://instagram.com/kavish.build" target="_blank" rel="noreferrer" className="ip-social-link">
                  Instagram <MdArrowOutward />
                </a>
              </div>
            </div>

            <div className="ip-contact-info-block">
              <h4>Based in</h4>
              <p>India · Available worldwide</p>
            </div>

            <div className="ip-contact-info-block">
              <h4>Education</h4>
              <p>Bachelor in Computer Science</p>
            </div>
          </div>

        </section>

      </main>
    </PageLayout>
  );
};

export default ContactPage;
