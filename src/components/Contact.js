import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Whether it's a project, job opportunity, or just a chat, 
        feel free to reach out.
      </p>

      <div className="contact-info">
        <p>Email: <a href="mailto:yourname@example.com">guptamaster999@gmail.com</a></p>
        <p>
          <a href="https://github.com/chandangit123" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> | 
          <a href="www.linkedin.com/in/chandan-gupta-3920952a2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
