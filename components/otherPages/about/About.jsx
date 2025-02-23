import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about-2" className="about-page about-section section-padding pb-0">
      <div className="container mb-55">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrap">
              <div className="image-one wow fadeInUp" data-wow-delay=".2s">
                <Image
                  alt=""
                  src="/assets/img/about/about-page-1.jpg"
                  width={440}
                  height={586}
                  className="height-auto"
                />
              </div>
              <div className="image-two wow fadeInUp mb-85" data-wow-delay=".4s">
                <Image
                  alt=""
                  src="/assets/img/about/about-page-2.jpg"
                  width={410}
                  height={150}
                  className="height-auto"
                />
              </div>
              <div className="founder-year-wrap">
                <h1 >2020</h1>
                <span>Nuestro inicio</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6 className="text-[#f5c31f]">Nosotros</h6>
                <h2>
                  Arquitectura, diseño <br />
                  y construcción
                </h2>
              </div>
              <p>
Durante nuestro tiempo como empresa legalmente constituida, hemos completado con éxito más de 35 proyectos de diversas envergaduras, creando y sosteniendo más de 65 empleos formales y más de 90 empleos temporales que benefician a las familias y al bienestar comunitario.

¡Nuestra creencia en la honestidad y la confianza impulsa vínculos auténticos y duraderos!
              </p>
              <ul className="about-key mt-30">
                <li>
                  <i className="las la-check-square" />
                  <p>Arquitectura</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Diseño</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Construcción</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Render y modelados 3D</p>
                </li>
              </ul>
              <Link href={`/contact`} className="theme-btn mt-30">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
