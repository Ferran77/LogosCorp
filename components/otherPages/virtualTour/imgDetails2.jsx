"use client";

import { renderDetails3 } from "@/data/renderDetails";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

export default function imgDetails2() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Estado para expandir/retraer texto
  const swiperRef = useRef(null); // Referencia para Swiper

  return (
    <div id="service-page" className="service-section ">
      <div className="container mb-20 ">
        <div className="row gx-5 align-items-center">
          <div className="col-xl-4 col-lg-4 mt-4 ml-6">
            <div className="section-title mt-8 ">
              {/* <h6>
                4 Razones para Usar Imágenes 360° en Tu Proyecto Arquitectónico
              </h6> */}
              <h3>Viva su proyecto antes de construir</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-desc">
              <p className="text-justify ml-4">
              Visualice y recorra cada espacio con nuestro Tour Virtual 360°. <br/> Tome decisiones informadas, optimice detalles y asegure un resultado perfecto antes de construir.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div
            className="service-slider owl-carousel"
            style={{ display: "block" }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp18",
                nextEl: ".snbn18",
              }}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  navigation: false,
                  pagination: {
                    clickable: true,
                  },
                },
                575: {
                  slidesPerView: 1,
                  navigation: false,
                  pagination: false,
                },
                767: {
                  slidesPerView: 2,
                  navigation: false,
                  pagination: false,
                },
                990: {
                  slidesPerView: 3,
                  loop: true,
                },
                1200: {
                  slidesPerView: 3,
                  pagination: false,
                  loop: true,
                },
              }}
              autoplay={{
                delay: 2000,
              }}
              loop
              speed={3200}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Almacena la instancia de Swiper
            >
              {renderDetails3.map((service, index) => (
                <SwiperSlide
                  key={service.id}
                  className="single-service-item"
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Detiene el autoplay
                  onMouseLeave={() => swiperRef.current?.autoplay.start()} // Reinicia el autoplay
                >
                  <div className="service-img">
                    <Image
                      alt={service.title}
                      src={service.imgSrc}
                      width={840}
                      height={840}
                    />
                  </div>
                  <div className="service-content-inner">
                    <div className="service-content-top">
                      <span>{service.number}</span>
                    </div>
                    <div className="service-content-bottom">
                      <h6>
                        <a href="#">{service.title}</a>
                      </h6>
                      <p>
                        {expandedIndex === index
                          ? service.description
                          : `${service.description.slice(0, 100)}...`}
                      </p>
                      <button
                        className="text-[#0b2154] font-bold"
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          )
                        }
                      >
                        {expandedIndex === index ? "Leer menos" : "Leer más"}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="owl-nav">
              <button
                type="button"
                role="presentation"
                className="owl-prev snbp18"
              >
                <i className="las la-arrow-left" />
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next snbn18"
              >
                <i className="las la-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
