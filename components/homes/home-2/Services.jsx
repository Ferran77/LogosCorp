"use client";
import { services } from "@/data/services";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
export default function Services() {
  return (
    <div id="service-2" className="service-section gray-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="section-title">
              <h6>¡Confie en nuestros servicios!</h6>
              <h2>Potenciamos su proyecto con solidez y experiencia</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <p>
              Transformamos sus ideas en espacios extraordinarios. Desde
              anteproyectos inspiradores hasta proyectos arquitectónicos
              detallados y estructuras sólidas, materializamos su visión con
              diseño y precisión. Contáctenos y descubra cómo convertir sus
              aspiraciones en una realidad arquitectónica única
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div
              className="service-slider owl-carousel "
              style={{ display: "block" }}
            >
              <Swiper
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                    loop: true,
                  },
                  990: {
                    slidesPerView: 3,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 2,
                    loop: false,
                  },
                  575: {
                    slidesPerView: 1,
                    loop: false,
                  },
                  0: {
                    slidesPerView: 1,
                    loop: false,
                  },
                }}
                spaceBetween={30}
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp13",
                  nextEl: ".snbn13",
                }}
                autoplay={{
                  delay: 4000,
                }}
                loop
                speed={2500}
              >
                {services.map((service, index) => (
                  <SwiperSlide className="single-service-item" key={index}>
                    <div className="service-icon">
                      <span>
                        {service.icon ? (
                          <service.icon className="react-icon text-blue-700 text-4xl hover:text-red-500" />
                        ) : (
                          <i className={service.iconClass} />
                        )}
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>{service.title}</h4>
                    </div>
                    <p>{service.description}</p>
                    <Link href={service.link} className="service-link">
                      <i className="las la-long-arrow-alt-right" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>{" "}
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev snbp13"
                >
                  <i className="las la-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next snbn13"
                >
                  <i className="las la-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
