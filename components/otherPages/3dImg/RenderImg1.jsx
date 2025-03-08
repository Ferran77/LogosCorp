import React from "react";

export default function RenderImg1() {
  return (
    <div
      id="service-1"
      className="service-section bg-white text-[#0B0D26] section-padding mb-8"
    >
      <div className="container mb-6">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title ml-4 mr-12">
              <h6 className="text-[#0B0D26]">Logos-Corp México</h6>
              <h2 className="text-[#0B0D26]">Imágenes 3D</h2> <br />
              <p className="text-xl text-[#0B0D26]">
                ¿Necesita ayuda? Por favor, contáctenos:
              </p>{" "}
              <br />
              <p className="text-[#0B0D26]">
                Tel. 951 454 0404 <br /> Tel. 55 5801 8167 <br /> Email.
                info@logoscorp.net
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 text-justify">
            <h6 className="text-2xl text-[#0B0D26] mb-4">¿Las conoce?</h6>
            <p className="mr-12 pr-4">
              Las imágenes 3D, son representaciones digitales detalladas y
              realistas de sus proyectos arquitectónicos o de diseño interior.{" "}
              <br /> <br /> Éstas imágenes capturan cada aspecto del diseño,
              desde la estructura y los materiales hasta la iluminación y los
              acabados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
