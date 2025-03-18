import React from "react";
import Link from "next/link";

export default function BasicCta() {
  return (
    <div className="cta-section section-padding pt-60 pb-60 bg-white">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-8 col-md-8 text-center">
            <div className="cta-title">
              <div className="section-title">
                <h6 className="text-[#fa4729]">
                  Instalaciones básicas e importantes
                </h6>
                <h2>
                  ¡La eficiencia de sus instalaciones eleva su calidad de vida!
                </h2>
              </div>
              <p className="text-2xl text-justify mx-auto">
                Las instalaciones básicas son esenciales para el correcto
                funcionamiento de su inmueble y le brindan el confort necesario
                para sus actividades cotidianas generando una mayor calidad de
                vida. <br /> <br /> Las instalaciones básicas se subdividen en:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
