"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services16 } from "@/data/services";
// Importa los íconos

export default function BasicServices() {
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
                <h6 className="text-white">Instalación hidro-sanitaria</h6>
                <h2 className="text-white">
                  ¡Agua segura y eficiente: instalación hidro sanitaria sin
                  preocupaciones!
                </h2>
              </div>
              <p>
                Asegura el flujo óptimo de agua en tu proyecto con instalaciones
                precisas y normativas. Evita fugas y problemas futuros
                garantizando eficiencia y calidad en cada detalle desde el
                inicio.
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
                {services16.map((item, index) => (
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
                      <div className="service-icon -mt-9">
                        <span className="text-[#fa4729] group-hover:text-white transition-colors duration-300">
                          <item.icon size={30} />
                        </span>
                      </div>

                      <div className="service-title -mt-6 -mb-3">
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
