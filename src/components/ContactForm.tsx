import "./styles/ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";
import { MdArrowOutward } from "react-icons/md";
import { useMagneticHover } from "./utils/useMagneticHover";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzdyvgan");
  const submitRef = useMagneticHover<HTMLButtonElement>(0.4);

  if (state.succeeded) {
    return (
      <div className="ds-form-success">
        <h3>Thanks for reaching out!</h3>
        <p>I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ds-contact-form">

      <div className="ds-field">
        <div className="ds-field-top">
          <span className="ds-field-num">01</span>
          <label htmlFor="name">What's your name?</label>
        </div>
        <input type="text" id="name" name="name" placeholder="John Doe" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="ds-field">
        <div className="ds-field-top">
          <span className="ds-field-num">02</span>
          <label htmlFor="email">What's your email?</label>
        </div>
        <input type="email" id="email" name="email" placeholder="john@example.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="ds-field">
        <div className="ds-field-top">
          <span className="ds-field-num">03</span>
          <label htmlFor="services">What services are you looking for?</label>
        </div>
        <input type="text" id="services" name="services" placeholder="AI Automation, Web Development..." required />
        <ValidationError prefix="Services" field="services" errors={state.errors} />
      </div>

      <div className="ds-field">
        <div className="ds-field-top">
          <span className="ds-field-num">04</span>
          <label htmlFor="message">Your message</label>
        </div>
        <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button ref={submitRef} type="submit" className="ds-submit-btn" disabled={state.submitting}>
        <span className="btn-content">
          {state.submitting ? "Sending..." : "Send message"} <MdArrowOutward />
        </span>
        <span className="btn-blob" aria-hidden="true" />
      </button>

    </form>
  );
};

export default ContactForm;
