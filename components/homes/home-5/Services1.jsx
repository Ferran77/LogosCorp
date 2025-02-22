"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services10 } from "@/data/services";
// Importa los íconos

export default function Services() {
  const [isExpanded, setIsExpanded] = useState({
    "Obras nuevas": false,
    "Remodelación de interiores y exteriores": false,
    "Mantenimiento a empresas": false,
    "Supervisión de obra": false,
  });

  const toggleExpand = (title) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div
      id="service-3"
      className="service-section dark-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="service-content-wrap">
              <div className="section-title">
                <h6 className="text-white">
                  ¡Servicios especiales para su comodidad!
                </h6>
                <h2 className="text-white">
                  Su comodidad y seguridad es nuestra prioridad.
                </h2>
              </div>
              <p>
                En LOGOS-CORP nos comprometemos a brindarle un servicio sin preocupaciones,
                donde la excelencia y la innovación se combinan para crear
                resultados excepcionales.
              </p>
              <div className="about-btn mt-40">
                <Link href={`/about`} className="theme-btn">
                  Nosotros
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="service-item-wrap">
              <div className="row">
                {services10.map((item, index) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.2}s`}
                    key={item.title}
                    style={{
                      height: "350px",
                      marginBottom: index < 2 ? "30px" : "0",
                    }}
                  >
                    <div
                      className="single-service-item group p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div className="service-icon -mt-7">
                        <span className="text-[#fa4729] group-hover:text-white transition-colors duration-300">
                          <item.icon size={40} />
                        </span>
                      </div>

                      <div className="service-title -mt-5 -mb-2">
                        <h4>{item.title}</h4>
                      </div>
                      <p
                      // style={{
                      //   overflow: "hidden",
                      //   textOverflow: "ellipsis",
                      //   display: "-webkit-box",
                      //   WebkitLineClamp: isExpanded[item.title] ? "none" : 4,
                      //   WebkitBoxOrient: "vertical",
                      // }}
                      >
                        {item.description}
                      </p>
                      {/* <button
                        onClick={() => toggleExpand(item.title)}
                        style={{ marginTop: "auto" }}
                      >
                        {isExpanded[item.title] ? "Ver menos" : "Ver más"}
                      </button> */}
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
