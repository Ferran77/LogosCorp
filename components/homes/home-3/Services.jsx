"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsBuildingUp } from "react-icons/bs";
import { FaTools, FaHardHat, FaEye } from "react-icons/fa"; // Importa los íconos

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

  const services = [
    {
      title: "Obras nuevas",
      description:
        "Ejecutamos su proyecto desde cero hasta su culminación con precisión y excelencia.",
      icon: BsBuildingUp,
    },
    {
      title: "Remodelación de interiores y exteriores",
      description:
        "Con nuestra metodología centrada en el cliente, se le asegura que su proyecto será una experiencia única y sin preocupaciones.",
      icon: FaTools,
    },
    {
      title: "Mantenimiento a empresas",
      description:
        "Mantenemos sus instalaciones empresariales en óptimas condiciones, garantizando una operación continua y sin interrupciones.",
      icon: FaHardHat,
    },
    {
      title: "Supervisión de obra",
      description:
        "Nuestra supervisión meticulosa garantiza que su proyecto se ejecute en tiempo conforme a los planos y especificaciones, protegiendo su inversión y potenciando su éxito.",
      icon: FaEye,
    },
  ];

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
                <h6 className="text-white">¡Confíe en nuestra experiencia!</h6>
                <h2 className="text-white">
                  Le ofrecemos una solución profesional y segura <br /> para su
                  proyecto
                </h2>
              </div>
              <p>
                Valoramos profundamente su patrimonio y tratamos su proyecto con
                el mismo cuidado y dedicación que si fuera nuestro.
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
                {services.map((item, index) => (
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
