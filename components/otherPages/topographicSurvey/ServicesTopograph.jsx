"use client";

import React, { useState } from "react";
import Link from "next/link";
import { services15 } from "@/data/services";

export default function ServicesTopograph({ variant = "light" }) {
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

  const isDark = variant === "dark";
  const bgColor = isDark ? "dark-bg" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#0B0D26]";
  const cardColor = isDark ? "bg-gray-800" : "bg-[#0B0D26] text-white";
  const hoverColor = isDark ? "hover:bg-gray-700" : "hover:bg-[#333]";

  return (
    <div
      id="service-4"
      className={`service-section ${bgColor} section-padding pb-90`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="service-item-wrap">
              <div className="row">
                {services15.map((item, index) => (
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.2}s`}
                    key={item.title}
                    style={{
                      height: "450px",
                      marginBottom: index < 2 ? "30px" : "0",
                    }}
                  >
                    <div
                      className={`single-service-item group p-6 rounded-lg ${cardColor} ${hoverColor} transition-all duration-300`}
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
                        <h4 className="text-white">{item.title}</h4>
                      </div>
                      <p className="text-[#ddd]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="service-content-wrap">
              <div className="section-title">
                <h6 className={textColor}>¡Asegure la confianza en su inversión!</h6>
                <h2 className={textColor}>
                Le ofrecemos una representación precisa de su terreno que facilitará la planificación y ejecución de sus proyectos
                </h2>
              </div>
              <p className={textColor}>
              Con el servicio de Levantamiento Topográfico, usted asegura la precisión y confiabilidad necesarias para el éxito de su proyecto. ¡Nuestros expertos garantizan resultados exactos y detallados!.
              </p>
              <div className="about-btn mt-40">
                <Link href={`/about`} className="theme-btn">
                  Nosotros
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
