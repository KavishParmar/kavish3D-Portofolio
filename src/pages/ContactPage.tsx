import PageLayout from "../components/PageLayout";
import ContactForm from "../components/ContactForm";
import { MdArrowOutward } from "react-icons/md";
import MagneticButton from "../components/MagneticButton";
import "../components/styles/Contact.css";
import "../components/styles/ContactForm.css";
import "../components/styles/InnerPage.css";

const ContactPage = () => {
  return (
    <PageLayout pageKey="contact">
      <main className="inner-page-main ds-contact-page">

        <section className="section-container ds-contact-header">
          <p className="ds-eyebrow">Get in touch</p>
          <h1 className="ds-contact-title">
            Let's start a<br />project together
            <span className="ds-title-arrow"><MdArrowOutward /></span>
          </h1>
        </section>

        <section className="section-container ds-contact-body">
          <div className="ds-form-col">
            <ContactForm />
          </div>

          <aside className="ds-info-col">
            <div className="ds-info-block">
              <span className="ds-info-label">Direct</span>
              <MagneticButton>
                <a href="mailto:kavishparmar5@gmail.com" className="ds-info-email">
                  kavishparmar5@gmail.com
                </a>
              </MagneticButton>
            </div>

            <div className="ds-info-block">
              <span className="ds-info-label">Social</span>
              <div className="ds-social-list">
                <MagneticButton><a href="https://linkedin.com/in/kavishparmar" target="_blank" rel="noreferrer" className="ds-social-link">LinkedIn <MdArrowOutward /></a></MagneticButton>
                <MagneticButton><a href="https://github.com/KavishParmar" target="_blank" rel="noreferrer" className="ds-social-link">GitHub <MdArrowOutward /></a></MagneticButton>
                <MagneticButton><a href="https://instagram.com/kavish.build" target="_blank" rel="noreferrer" className="ds-social-link">Instagram <MdArrowOutward /></a></MagneticButton>
              </div>
            </div>

            <div className="ds-info-block">
              <span className="ds-info-label">Based in</span>
              <p className="ds-info-text">India · Available worldwide</p>
            </div>

            <div className="ds-info-block">
              <span className="ds-info-label">Services</span>
              <p className="ds-info-text">
                AI Automation<br />
                Web Development<br />
                3D Experiences
              </p>
            </div>
          </aside>
        </section>

      </main>
    </PageLayout>
  );
};

export default ContactPage;
