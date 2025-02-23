import React from "react";

export default function ContactMap() {
  return (
    <div className="contact-page google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.3047211635185!2d-99.25096232580245!3d19.571441636234255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21c58e14f0a69%3A0x8d0c39297e352b3b!2sAv.%20Oc%C3%A9ano%20Pac%C3%ADfico%2080%2C%20Lomas%20Lindas%2C%2052947%20Cdad.%20L%C3%B3pez%20Mateos%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1740261292881!5m2!1ses-419!2smx"
        width={400}
        height={400}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
