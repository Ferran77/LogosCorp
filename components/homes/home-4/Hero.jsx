import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="home-4" className="hero-area">
      {/* Video de fondo */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/assets/videos/video_3d.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      {/* Capa oscura opcional */}
      <div className="overlay" />

      {/* Contenido del Hero */}
      <div className="hero-area-banner">
        <div className="hero-area-content">
          <div className="container">
            <div className="row mt-100">
              <div className="col-lg-9 wow fadeInUp animated" data-wow-delay="200ms">
                <div className="section-title bg-black bg-opacity-25 p-2 h-[180px] w-[550px]">
                  <h2 className="text-white">
                    Render 3D y  <br />
                    animaciones virtuales
                  </h2>
                </div>
              </div>
              {/* <div className="col-lg-3 text-lg-end">
                <div className="service-info mt-10">
                  <p>Since 2000</p>
                  <h4>Best Industrial Solutions</h4>
                  <i className="las la-arrow-down mt-30" />
                </div>
              </div> */}
            </div>
            <div className="row ml-3">
              <div className="col-xl-5 col-md-6 bg-black bg-opacity-25 p-2">
                <p>
                Nuestros renders 3D le ofrece una visión detallada y realista de su proyecto ayudándole a visualizar los resultados antes de comprometerse con la construcción.
                </p>
                <Link href={`/about`} className="theme-btn mt-20">
                  Iniciar un proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
