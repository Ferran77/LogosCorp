import { services17 } from "@/data/services";
import React from "react";
import Link from "next/link";
export default function BasicServices1() {
  return (
    <div
      id="service-3"
      className="service-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="service-content-wrap">
              <div className="section-title">
                <h6>Instalación eléctrica</h6>
                <h2>
                  Energía segura y eficiente con instalaciones eléctricas de
                  calidad garantizada.
                </h2>
              </div>
              <p>
                Optimiza el rendimiento de tu sistema eléctrico con planos y
                cálculos precisos. Evita sobrecargas y fallos asegurando el
                cumplimiento normativo y la protección de tus instalaciones
                desde el principio.
              </p>
              <div className="about-btn mt-40">
                <Link href={`/about`} className="theme-btn">
                  Saber más
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="service-item-wrap">
              <div className="row">
                {services17.map((service, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 mt-30 wow fadeInUp transition duration-300"
                    data-wow-delay={service.delay}
                  >
                    <div className="single-service-item group hover:bg-[#fa4729] p-6 rounded-lg bg-gray-800 transition-all duration-300">
                      <div className="service-icon -mt-7">
                        {/* Aplicamos group-hover al ícono */}
                        <span className="text-[#fa4729] group-hover:text-white transition-colors duration-300">
                          {React.cloneElement(service.icon, { size: 30 })}
                        </span>
                      </div>
                      <div className="service-title -mt-5 -mb-2">
                        <h4>{service.title}</h4>
                      </div>
                      <p>{service.subtitile}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
