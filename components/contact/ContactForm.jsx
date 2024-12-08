"use client";

export default function ContactForm() {
  return (
    <div className="contact-section">
      <div
        className="contact-bg"
        style={{ backgroundImage: "url(/assets/img/contact/contact-img.jpg)" }}
      />
      <div className="contact-form-wrap gray-bg">
        <div className="section-title">
          <h6>Get in Touch</h6>
          <h2>Don't hesitate to contact us for info</h2>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input required type="text" placeholder="Name" />
            <input required type="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
              defaultValue={""}
              required
            />
            <input type="submit" defaultValue="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
