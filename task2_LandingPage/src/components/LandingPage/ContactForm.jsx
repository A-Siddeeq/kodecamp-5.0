import React from "react";
import pic10 from "../../assets/images/components/ContactForm/pic10.png";
import "../styles/ContactForm.css";

const ContactForm = () => (
  <section className="contact-section">
    <h1>Contact Us</h1>
    <div className="contact-content">
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Interested In" />
        <textarea placeholder="Message" required></textarea>
      </form>
      <img src={pic10} alt="Contact" />
    </div>
    <button className="send-btn">SEND EMAIL</button>
  </section>
);

export default ContactForm;
