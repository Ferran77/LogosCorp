import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about-3" className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="about-bg-wrap">
              <Image
                alt=""
                src="/assets/img/about/about-3.jpg"
                className="height-auto"
                width={1556}
                height={1920}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>Quiénes somos</h6>
                <h2>Arquitectura nacida del corazón</h2>
              </div>
              <p>
              En LOGOS-CORP, nos enorgullece proporcionar servicios de construcción de alta calidad, adaptados a las necesidades específicas de nuestros clientes. Desde nuevas edificaciones hasta remodelaciones complejas, manejamos cada proyecto con la máxima precisión y atención al detalle.
              </p>
              <div className="about-feature">
                <ul>
                  <li>Enfoque Individualizado</li>
                  <li>Supervisión constante</li>
                  <li>Atención personalizada</li>
                </ul>
              </div>
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
