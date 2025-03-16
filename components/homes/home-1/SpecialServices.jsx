import { services3 } from "@/data/services";
import React from "react";
import Link from "next/link";

export default function SpecialServices() {
  return (
    <div
      id="service-1"
      className="service-section section-padding pt-60 bg-[#181D4E] text-white"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h2 className="text-white">
                Nos comprometemos a brindarle un servicio sin preocupaciones,
                donde la excelencia y la innovación se combinan para crear
                resultados excepcionales.{" "}
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 ">
            <h6 className="text-2xl text-white font-medium">
              Servicios adicionales:
            </h6>
            <br />
            <p className="text-lg font-medium">
              En LOGOS-CORP MÉXICO, valoramos profundamente su inversión y
              esfuerzo en la construcción o remodelación de su propiedad. Por
              ello, invertimos en la capacitación continua de nuestro equipo en
              diversas especialidades, asegurando que cada servicio que
              ofrecemos esté a la altura de su confianza y expectativas.
            </p>
            <br />
            <p className="text-lg font-medium">
            Evolucionamos y nos adaptamos para superar sus expectativas en cada proyecto. Nos renovamos continuamente para brindarle el mejor servicio.
            </p>
          </div>
        </div>
        <div className="service-title pt-5 text-center text-4xl font-black">
          <h4 className="text-white">Soluciones integrales:</h4>
        </div>

        <div className="row mt-60">
          {services3.map((service, index) => {
            const Icon = service.icon;

            return (
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
                      {Icon && (
                        <Icon className="react-icon text-[#fa4729] text-5xl hover:text-white" />
                      )}
                    </span>
                  </div>
                  <div className="service-title">
                    <h4 className="text-white">
                      {service.title.split(" ").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < service.title.split(" ").length - 1 && (
                            <>
                              &nbsp;
                              <br />
                            </>
                          )}
                        </span>
                      ))}
                    </h4>
                  </div>
                  <Link href={service.link} className="read_more_link">
                    <span className="link_text text-[#fa4729]">Saber más</span>
                    <span className="link_icon text-[#fa4729]">
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
