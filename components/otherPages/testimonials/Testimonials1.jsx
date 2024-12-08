"use client";

import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials1() {
  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7 col-md-7 text-center">
            <div className="section-title">
              <h6>Testimonial</h6>
              <h2>Feedback from clients</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-30">
          <div className="col-xl-7 col-lg-6 text-center">
            <div
              className="testimonial-wrapper owl-carousel"
              style={{ display: "block" }}
            >
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp19",
                  nextEl: ".snbn19",
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
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="testimonial-author">
                      <Image
                        alt=""
                        src={testimonial.authorImage}
                        width={120}
                        height={120}
                      />
                      <h6>
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
                  className="owl-prev snbp19"
                >
                  <i className="las la-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next snbn19"
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
