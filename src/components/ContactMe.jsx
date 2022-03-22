import React from "react";

const ContactMe = () => {
  return (
    <div className="container" id="contact">
      <hr />
      <h1 className="section-header">Contact Me</h1>
      <form
        id="form"
        target="_blank"
        action="https://formsubmit.co/ddc095b3c549b8b7dd6faf9f15905966"
        method="POST"
      >
        <div className="input-container">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Your Message"
            className="message"
            name="message"
            rows="10"
            required
          ></textarea>

          <button
            type="submit"
            className="submit-btn"
            onClick={() => {
              setTimeout(() => {
                document.querySelector("#form").reset();
              }, 2000);
            }}
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
