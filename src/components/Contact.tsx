import "./styles/Contact.css";
import ContactForm from "./ContactForm";
import { MdArrowOutward, MdCopyright } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container section-container">
        <h3>Contact</h3>
        <div className="contact-flex" style={{ marginTop: "50px" }}>
          <div className="contact-box" style={{ flex: 1 }}>
            <h4>LET'S COLLABORATE</h4>
            <p style={{ maxWidth: "400px" }}>
              I'm always open to discussing new projects, creative ideas, or being
              part of your visions. Let's build something extraordinary together!
            </p>
            <ContactForm />
          </div>
        </div>

        <div className="contact-flex" style={{ marginTop: "100px" }}>
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/kavishparmar/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — kavishparmar
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor in Computer Science — Graduated
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/KavishParmar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kavishparmar/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/kavish.build/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="contact-flex" style={{ marginTop: "100px" }}>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Kavish Parmar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
