"use client";
import { projects } from "@/data/projects";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
export default function Projects() {
  return (
    <div className="project-section dark-bg section-padding pt-50 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title">
              <h6 className="text-white">Our Portfolio</h6>
              <h2 className="text-white">Creative Works</h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-xl-12">
            <Swiper
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                990: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              spaceBetween={30}
              className="project-slider owl-carousel"
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
              }}
              loop
              speed={2500}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/project-details-left-sidebar/${project.id}`}
                    className="single-project-wrapper"
                  >
                    <div className="project-bg">
                      <Image
                        alt=""
                        className="height-auto"
                        src={project.imgSrc}
                        width={890}
                        height={664}
                      />
                    </div>
                    <div className="project-details">
                      <h5>{project.title}</h5>
                      <span>{project.category}</span>
                    </div>
                  </Link>{" "}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
