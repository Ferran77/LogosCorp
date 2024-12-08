"use client";
import { slides2 } from "@/data/heroSlides";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      navigation={{
        prevEl: ".snbp14",
        nextEl: ".snbn14",
      }}
      effect="fade"
      id="home-3"
      className="homepage-slides owl-carousel"
      autoplay={{
        delay: 4000,
      }}
      loop
      speed={2500}
    >
      {slides2.map((slide, index) => (
        <SwiperSlide key={index} className="single-slide-item">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay" />
          </div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div
                  className="col-lg-12 wow fadeInUp animated"
                  data-wow-delay={slide.delay}
                >
                  <div className="section-title">
                    <h1>
                      <b>{slide.title}</b>
                      <br />
                      {slide.subtitle}
                    </h1>
                    <p>
                      {slide.description.split("\n")[0]}
                      <br />
                      {slide.description.split("\n")[1]}
                    </p>
                    <Link href={`/about`} className="theme-btn">
                      {slide.buttonText}
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
          className="owl-prev snbp14"
        >
          <i className="las la-arrow-left" />
        </button>
        <button
          type="button"
          style={{ zIndex: 12 }}
          role="presentation"
          className="owl-next snbn14"
        >
          <i className="las la-arrow-right" />
        </button>
      </div>
    </Swiper>
  );
}
