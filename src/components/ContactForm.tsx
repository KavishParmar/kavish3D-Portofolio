import "./styles/ContactForm.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzdyvgan");

  if (state.succeeded) {
    return (
      <div className="contact-form-container">
        <h3 style={{ color: "var(--accentColor)" }}>Thanks for reaching out!</h3>
        <p>I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send me a message</h3>
        
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Kavish Parmar" 
            required 
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Contact Info (Email/Phone)</label>
          <input 
            type="text" 
            id="email" 
            name="contact" 
            placeholder="email@example.com" 
            required 
          />
          <ValidationError prefix="Contact" field="contact" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Work Details / Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5} 
            placeholder="Tell me about your project..." 
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          data-cursor="disable"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
