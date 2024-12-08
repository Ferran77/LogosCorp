"use client";
import { projects6 } from "@/data/projects";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
export default function Projects6() {
  return (
    <div id="project-standard" className="project-section pb-120">
      <div className="container">
        <div className="row">
          <div
            className="project-slider-2 owl-carousel"
            style={{ display: "block" }}
          >
            <Swiper
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  navigation: false,
                  pagination: false,
                },
                767: {
                  slidesPerView: 2,
                  pagination: {
                    clickable: true,
                  },
                },
                990: {
                  slidesPerView: 3,
                  pagination: false,
                },
                1200: {
                  slidesPerView: 2,
                  pagination: false,
                },
              }}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp20",
                nextEl: ".snbn20",
              }}
              autoplay={{
                delay: 4000,
              }}
              loop
              speed={2500}
            >
              {projects6.map((project, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/project-details-left-sidebar/${project.id}`}
                    className="single-project-wrapper"
                  >
                    <div className="project-img">
                      <Image
                        alt=""
                        src={project.imgSrc}
                        width={project.imgWidth}
                        height={project.imgHeight}
                        className="height-auto"
                      />
                    </div>
                    <div className="project-title">
                      <h3>{project.title}</h3>
                      <h6>{project.category}</h6>
                    </div>
                  </Link>{" "}
                </SwiperSlide>
              ))}{" "}
            </Swiper>
            <div className="owl-nav">
              <button
                type="button"
                role="presentation"
                className="owl-prev snbp20"
              >
                <i className="las la-arrow-left" />
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next snbn20"
              >
                <i className="las la-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
