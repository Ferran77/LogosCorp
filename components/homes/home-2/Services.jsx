"use client";
import { services } from "@/data/services";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
export default function Services() {
  return (
    <div id="service-2" className="service-section gray-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="section-title">
              <h6>What We Offer</h6>
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <p>
              Construction is a general term meaning the art and science to form
              objects systems organizations, and comes from Latin construction
              and Old French construction. To construct is the verb: the act of
              building, and the noun
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div
              className="service-slider owl-carousel "
              style={{ display: "block" }}
            >
              <Swiper
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                    loop: true,
                  },
                  990: {
                    slidesPerView: 3,
                    loop: true,
                  },
                  767: {
                    slidesPerView: 2,
                    loop: false,
                  },
                  575: {
                    slidesPerView: 1,
                    loop: false,
                  },
                  0: {
                    slidesPerView: 1,
                    loop: false,
                  },
                }}
                spaceBetween={30}
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".snbp13",
                  nextEl: ".snbn13",
                }}
                autoplay={{
                  delay: 4000,
                }}
                loop
                speed={2500}
              >
                {services.map((service, index) => (
                  <SwiperSlide className="single-service-item" key={index}>
                    <div className="service-icon">
                      <span>
                        <i className={service.iconClass} />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>{service.title}</h4>
                    </div>
                    <p>{service.description}</p>
                    <Link href={`/services`} className="service-link">
                      <i className="las la-long-arrow-alt-right" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>{" "}
              <div className="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev snbp13"
                >
                  <i className="las la-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next snbn13"
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
