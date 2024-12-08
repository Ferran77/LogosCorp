"use client";
import { services2 } from "@/data/services";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
export default function Services() {
  return (
    <div id="service-page" className="service-section section-padding">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title">
              <h6>What We Do</h6>
              <h2>Top services</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-desc">
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitacion ullamco.
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
                delay: 4000,
              }}
              loop
              speed={2500}
            >
              {services2.map((service) => (
                <SwiperSlide key={service.id} className="single-service-item">
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
                      <p>{service.description}</p>
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
