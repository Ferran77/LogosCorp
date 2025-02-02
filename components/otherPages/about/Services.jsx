import { services5 } from "@/data/services";
import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <div id="service-1" className="service-section dark-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6 className="text-white">Logos-Corp México</h6>
              <h2 className="text-white">
              Arquitectura, diseño y construcción
              </h2> <br/> 
              <h3 className="text-sky-300">¿Necesita ayuda? Por favor, contáctenos:</h3> <br/>
             <p className="text-white">Tel. 951 454 0404 <br/> Tel. 55 5801 8167 <br/> Email. info@logoscorp.net</p> 
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <p>
            En nuestra empresa 100% mexicana, cada proyecto nace de la visión compartida de nuestros fundadores, con el propósito de transformar el entorno de manera positiva. <br/> <br/> Combinamos nuestra experiencia técnica-operativa con los principios de la geometría sagrada, infundiendo en cada obra una armonía única que redefine el espacio y eleva la experiencia arquitectónica. <br/> Cada diseño es un testimonio de nuestra dedicación a la innovación y al impacto duradero.
            </p>
            <br/>
            <p>
            En LOGOS-CORP MÉXICO, Valoramos profundamente su inversión y esfuerzo en la construcción o remodelación de su propiedad. Por ello, invertimos en la capacitación continua de nuestro equipo en diversas especialidades, asegurando que cada servicio que ofrecemos esté a la altura de su confianza y expectativas. <br/> <br/> ¡Con nosotros, su confianza está garantizada!
            </p>
          </div>
        </div>


        <div className="row mt-60">
  {services5.map((service, index) => {
    const Icon = service.icon; // Asegura que `icon` es un componente válido

    return (
      <div
        key={index}
        className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
        data-wow-delay={service.wowDelay}
      >
        <div className={`single-service-item ${service.additionalClass || ""}`}>
          <div className="service-icon">
            <span>
              {Icon && <Icon className="react-icon text-blue-700 text-4xl hover:text-red-500" />}
            </span>
          </div>
          <div className="service-title">
          <h4>
  {service.title.split(" ").map((word, idx, array) => (
    <React.Fragment key={idx}>
      {word}
      {idx < array.length - 1 && " "} {/* Agrega un espacio entre palabras */}
      {idx === 0 && <br />} {/* Solo agrega un salto de línea después de la primera palabra */}
    </React.Fragment>
  ))}
</h4>
          </div>
          <Link href={`/about`} className="read_more_link">
            <span className="link_text">Read More</span>
            <span className="link_icon">
              <i className="las la-arrow-right" />
            </span>
          </Link>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </div>
  );
}
