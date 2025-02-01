"use client";
import { clientLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Client() {
  return (
    <div className="client-section section-padding pt-10">
      <div className="container pt-10">
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
              autoplay={{
                delay: 4000,
              }}
              loop
              speed={2500}
              className="client-wrap owl-carousel"
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
