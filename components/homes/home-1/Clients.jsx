"use client";
import { clientLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";
import { skills } from "@/data/skills";
import ProgressBar from "@/components/common/ProgressBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Clients() {
  return (
    <div className="client-section section-padding">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="client-content-wrap">
              <div className="section-title">
                <h6>Nuestros Clientes</h6>
                <h2>
                  Nos preocupamos por <br />
                  cada uno de nuestros clientes
                </h2>
              </div>
              <p>
                En LOGOS-CORP MÉXICO, cultivamos relaciones basadas en humanismo y honestidad asegurando, que cada interacción refleje nuestro compromiso auténtico con su éxito. .
              </p>
              <div className="contact-info-wrap">
                <div className="contact-icon">
                  <i className="las la-envelope" />
                </div>
                <div className="contact-text">
                  <p>info@logoscorp.net</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-5">
            <div className="progress-bar-area">
              {skills.map((skill, index) => (
                <ProgressBar
                  max={skill.percentage}
                  name={skill.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-120">
          <div className="col-12">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1100: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay]}
              className="client-wrap owl-carousel"
              autoplay={{
                delay: 4000,
              }}
              loop
              speed={2500}
            >
              {clientLogos.map((elm, i) => (
                <SwiperSlide key={i} className="single-client">
                  <a href="#">
                    <Image alt="" src={elm.imgSrc} width={121} height={63} />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
