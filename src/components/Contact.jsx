import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-heading">
          <span>06.</span>
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <h3>Let's connect.</h3>
            <p>
              I'm open to software development opportunities,
              interesting projects, and conversations about technology.
            </p>
            <a href="mailto:Pavan2827t@gmail.com" className="contact-email">
              <FaEnvelope />
              <span>Pavan2827t@gmail.com</span>
            </a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/Pavan-P45" target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/pavan-p-4021b725b/" target="_blank" rel="noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:Pavan2827t@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;