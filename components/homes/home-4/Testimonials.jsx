"use client";

import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
export default function Testimonials() {
  return (
    <div
      className="testimonial-section dark-bg section-padding"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-5 col-md-6 text-center">
            <div className="section-title">
              <h6 className="text-white">LOGOS-CORP MÉXICO</h6>
              <h2 className="text-white">
                Arquitectura nacida del corazón
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-30">
          <div className="col-xl-7 col-lg-7 text-center">
            <div
              className="testimonial-wrapper owl-carousel"
              style={{ display: "block" }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp15",
                  nextEl: ".snbn15",
                }}
                autoplay={{
                  delay: 4000,
                }}
                loop
                speed={2500}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide className="single-testimonial-item" key={index}>
                    <div className="testimonial-content">
                      <p className="text-white">{testimonial.content}</p>
                    </div>
                    <div className="testimonial-author">
                      <Image
                        alt=""
                        src={testimonial.authorImage}
                        width={120}
                        height={120}
                      />
                      <h6 className="text-white">
                        {testimonial.authorName}{" "}
                        <span>{testimonial.authorLocation}</span>
                      </h6>
                    </div>
                  </SwiperSlide>
                ))}{" "}
              </Swiper>
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev snbp15"
                >
                  <i className="las la-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next snbn15"
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
