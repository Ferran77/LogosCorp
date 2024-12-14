"use client";
import { blogs } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
  return (
    <div className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center">
            <div className="section-title">
              <h6>De nuestro Blog</h6>
              <p>Lo invitamos a explorar nuestro blog; un espacio donde compartimos artículos cuidadosamente elaborados para inspirarlo e informarlo sobre temas que, sabemos, le serán de gran interés</p>
              <h2>Últimas novedades:</h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <Swiper
            spaceBetween={40}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              990: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            className="blog-carousel owl-carousel owl-loaded owl-drag pb-5"
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              el: ".spd1",
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
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                {/* Blog Links Here */}
                {/* <Link 
                  href={`/blog-details/${blog.id}`}
                  className="single-blog-item wow fadeInUp"
                  data-wow-delay={blog.delay}
                > */}
                  <div className="blog-img">
                    <Image alt="" src={blog.imgSrc} width={890} height={664} />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{blog.category}</span>
                    </div>
                    <div className="blog-title">
                      <h4>{blog.title}</h4>
                    </div>
                    <div className="blog-info">
                      <span>{blog.date}</span>
                      <span>{blog.comments}</span>
                    </div>
                  </div>
                {/* </Link>{" "} */}
              </SwiperSlide>
            ))}
            <div className="owl-dots mt-0 spd1"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
