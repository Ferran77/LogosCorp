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
          <h6>Estamos para servirle</h6>
          <h2>No dude en contactarnos para recibir más información</h2>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input required type="text" placeholder="Nombre" />
            <input required type="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              placeholder="Mensaje"
              defaultValue={""}
              required
            />
            <input type="submit" defaultValue="Envíar" />
          </form>
        </div>
      </div>
    </div>
  );
}
