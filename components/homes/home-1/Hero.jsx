import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div id="home-1" className="hero-area dark-bg section-padding pt-100">
      <div className="container">
        <div className="row gx-0 align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="hero-area-bg">
              <Image
                alt=""
                src="/assets/img/slider/1.jpg"
                className="height-auto"
                width={810}
                height={865}
                priority
              />
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-5 col-md-6 wow fadeInRight"
            data-wow-delay=".2s"
          >
            <div className="hero-area-content">
              <div className="section-title">
                <h1 className="text-white">
                  Somos expertos en 
                  arquitectura y{" "}
                  {/* <span>
                    <img alt="" src="/assets/img/headline-img.jpg" />
                  </span>{" "} */}
                  construcción
                   <br />
                </h1>
              </div>
              <p>
                ¿No sabe cómo empezar? ¡Contáctenos! Estamos listos para ofrecerle la solución perfecta 
              </p>
              <Link href={`/contact`} className="theme-btn mt-20 font-bold">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
