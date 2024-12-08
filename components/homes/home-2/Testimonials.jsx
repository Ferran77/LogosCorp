"use client";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <div
      id="testimonial-2"
      className="testimonial-area gray-bg section-padding pb-100"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <h6>Testimonial</h6>
              <h2>
                Happy Client Says <br />
                About Us
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              breakpoints={{
                1100: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              spaceBetween={30}
              className="testimonial-carousel owl-carousel"
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: ".spd6",
                bulletActiveClass: "active",
                renderBullet: function (index, className) {
                  return `  <button role="button" class="owl-dot ${className}">
                    <span></span>
                  </button>`;
                },
              }}
              autoplay={{
                delay: 4000,
              }}
              loop
              speed={2500}
            >
              {testimonials2.map((testimonial, index) => (
                <SwiperSlide key={index} className="single-testimonial-item">
                  <div className="testimonial-icon">
                    <i className="las la-quote-left" />
                  </div>
                  <p>{testimonial.quote}</p>
                  <div className="author-wrap">
                    <div className="author-thumb">
                      <Image
                        alt=""
                        src={testimonial.image}
                        width={testimonial.width}
                        height={testimonial.height}
                      />
                    </div>
                    <div className="author-desc">
                      <h5>{testimonial.author}</h5>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-dots spd6"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
