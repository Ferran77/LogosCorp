"use client";
import { slides } from "@/data/heroSlides";
import React from "react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Hero() {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Autoplay]}
      navigation={{
        prevEl: ".snbp12",
        nextEl: ".snbn12",
      }}
      autoplay={{
        delay: 4000,
      }}
      loop
      speed={2500}
      effect="fade"
      id="home-2"
      className="homepage-slides owl-carousel owl-loaded owl-drag"
    >
      {slides.map((slide, index) => (
        <SwiperSlide className="single-slide-item" key={index}>
          <div
            className="image-layer"
            style={{ backgroundImage: slide.backgroundImage }}
          >
            {/* <div className="overlay"></div> */}
          </div>
          <div className="hero-area-content ">
            <div className="container ">
              <div className="row justify-content-center align-items-center ">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                  <div className="section-title text-blue-600">
                    <h1>
                      {slide.title.split("\n").map((elm, i) => (
                        <React.Fragment key={i}>
                          {elm}
                          <br />
                        </React.Fragment>
                      ))}
                    </h1>
                    <Link
                      href={`/about`}
                      className="theme-btn"
                      style={{ animation: "none" }}
                    >
                      Nosotros
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="owl-nav">
        <button
          type="button"
          role="presentation"
          style={{ zIndex: 12 }}
          className="owl-prev snbp12"
        >
          <i className="las la-arrow-left" />
        </button>
        <button
          type="button"
          style={{ zIndex: 12 }}
          role="presentation"
          className="owl-next snbn12"
        >
          <i className="las la-arrow-right" />
        </button>
      </div>
    </Swiper>
  );
}
