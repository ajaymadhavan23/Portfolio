import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Connect.css';

function Connect() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a52wmjh',    // <-- Your EmailJS service ID
      'template_hqabzym',   // <-- Your EmailJS template ID
      formRef.current,
      'zQn7k09N0VnwQDmoC'     // <-- Your EmailJS public API key
    )
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      alert('Oops, email sending failed: ' + error.text);
    });
  };

  return (
    <section className="connect-section">
      <div className="connect-container fade-in-up">
        <div className="connect-header">
          <span className="section-tag">Connect</span>
          <h2 className="section-title gradient-text">Let's Work Together!</h2>
          <div className="title-underline"></div>
          <p className="connect-intro">
            Interested in collaborating, hiring, or have a project idea? Drop a message below or reach out via email!
          </p>
        </div>

        <div className="connect-layout">
          <div className="connect-info card">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> <a href="mailto:ajaymadhavan23@gmail.com">ajaymadhavan23@gmail.com</a></p>
            <div className="connect-links">
              <a href="https://linkedin.com/in/ajaymadhavan23" target="_blank" rel="noopener noreferrer" className="connect-social linkedin">
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M8 11v5 M8 8v.01" />
                  <path d="M12 11v5" />
                  <path d="M16 16v-3a2 2 0 0 0-4 0" />
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/ajaymadhavan23" target="_blank" rel="noopener noreferrer" className="connect-social github">
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                  <path d="M12 2C6.477 2 2 6.484 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.37-1.342-3.37-1.342-.455-1.155-1.11-1.462-1.11-1.462-.909-.622.069-.61.069-.61 1.005.071 1.534 1.034 1.534 1.034.892 1.525 2.341 1.085 2.91.83.092-.646.349-1.086.635-1.337-2.221-.253-4.555-1.111-4.555-4.943 0-1.093.39-1.988 1.03-2.688-.104-.254-.448-1.275.098-2.656 0 0 .841-.27 2.75 1.026a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.337 1.908-1.296 2.747-1.026 2.747-1.026.548 1.381.203 2.402.099 2.656.641.7 1.03 1.595 1.03 2.688 0 3.841-2.337 4.687-4.566 4.936.359.309.678.92.678 1.857 0 1.34-.012 2.419-.012 2.749 0 .267.18.578.687.481C19.135 20.164 22 16.417 22 12c0-5.516-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <form className="connect-form card" ref={formRef} onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <label>
              Your Name
              <input type="text" name="name" required autoComplete="off" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="off" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13"/>
                <path d="M22 2l-7.5 20-4-9-9-4 20-7.5z"/>
              </svg>
            </button>
            {isSubmitted && <div className="form-success">Thank you! Your message was sent. 🙏</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connect;
