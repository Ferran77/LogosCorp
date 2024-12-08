"use client";

import { testimonials } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
export default function Testimonials() {
  return (
    <div
      id="about-page"
      className="testimonial-section"
      style={{
        backgroundImage: "url(/assets/img/testimonial-bg.jpg)",
        maxWidth: "100vw",
        overflowX: "clip",
      }}
    >
      <div className="row mt-30">
        <div className="col-xl-7 col-lg-7">
          <div className="testimonial-wrap dark-bg">
            <div className="section-title">
              <h6 className="text-white">Testimonial</h6>
              <h2 className="text-white">What People Say</h2>
            </div>

            <div
              className="testimonial-wrapper owl-carousel"
              style={{ display: "block" }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp17",
                  nextEl: ".snbn17",
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
                  className="owl-prev snbp17"
                >
                  <i className="las la-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next snbn17"
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
