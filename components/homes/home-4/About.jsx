"use client";
import { clientLogos } from "@/data/brands";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function About() {
  return (
    <div id="about-4" className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="about-img-wrap">
              <Image
                alt=""
                src="/assets/img/about/about-4.jpg"
                width={520}
                height={642}
                className="height-auto"
              />
              <div className="about-desc">
                <h3>We work with any type of metal</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Us</h6>
                <h2>Next-generation metal plant</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className="about-feature">
                <h4>
                  <span>01.</span>Quality Control
                </h4>
                <h4>
                  <span>02.</span>Unique Equipment
                </h4>
              </div>
              <Link href={`/about`} className="theme-btn mt-30">
                About Us
              </Link>
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
