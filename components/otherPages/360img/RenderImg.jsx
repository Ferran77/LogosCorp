import React from "react";

export default function RenderImg() {
  return (
    <div
      id="service-1"
      className="service-section dark-bg section-padding mb-8"
    >
      <div className="container mb-6">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title ml-4 mr-12">
              <h6 className="text-white">Logos-Corp México</h6>
              <h2 className="text-white">Imágenes 360°</h2> <br />
              <p className="text-sky-300 text-xl">
                ¿Necesita ayuda? Por favor, contáctenos:
              </p>{" "}
              <br />
              <p className="text-white">
                Tel. 951 454 0404 <br /> Tel. 55 5801 8167 <br /> Email.
                info@logoscorp.net
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 text-justify">
            <p className="mr-12 pr-4">
              A diferencia de las imágenes tradicionales, estas ofrecen una
              experiencia interactiva de exploración libre y total. <br /> <br />Las
              imágenes en 360° son representaciones digitales envolventes;
              capturan todos los ángulos de un espacio, permitiendo una
              visualización completa y detallada en cualquier dirección. <br /> <br />Al optar por este servicio, ¡Experimentará su proyecto de manera inmersiva antes de su realización!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
