import { services3 } from "@/data/services";
import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <div id="service-1" className="service-section section-padding pt-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6>Asesorías personalizadas</h6>
              <h2>¡Le proporcionamos una solución integral que redefine el éxito de su proyecto! </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <p>
              En LOGOS-CORP MÉXICO, cultivamos relaciónes basadas en el humanismo y la honestidad, 
              asegurando que cada interacción con usted, refleje nuestro auténtico compromiso con su éxito.
            </p>
            <p>
              Nuestro fiel compromiso es el de brindarle un servicio sin preocupaciones, 
              donde la excelencia y la innovación se combinan para crear resultados excepcionales.
            </p>
          </div>
        </div>
        <div className="row mt-60">
          {services3.map((service, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div
                className={`single-service-item ${service.extraClass || ""}`}
              >
                <div className="service-icon">
                  <span>
                    <i className={service.iconClass} />
                  </span>
                </div>
                <div className="service-title">
                  <h4>
                    {service.title.split(" ").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < service.title.split(" ").length - 1 && <br />}
                      </span>
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
          ))}
        </div>
      </div>
    </div>
  );
}