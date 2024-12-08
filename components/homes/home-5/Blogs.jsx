"use client";
import { blogs4 } from "@/data/blogs";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Blogs() {
  return (
    <div id="blog-2" className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center">
            <div className="section-title">
              <h6>From Our Blog</h6>
              <h2>Our latest news</h2>
            </div>
          </div>
        </div>
        <div className="row gx-5 mt-30">
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
            className="blog-carousel owl-carousel pb-5"
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
            {blogs4.map((post, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/blog-details/${post.id}`}
                  className="single-blog-item wow fadeInUp"
                  data-wow-delay={post.delay}
                >
                  <div className="blog-img">
                    <Image alt="" src={post.imgSrc} width={890} height={664} />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{post.category}</span>
                    </div>
                    <div className="blog-title">
                      <h4>{post.title}</h4>
                    </div>
                    <div className="blog-info">
                      <span>{post.date}</span>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </Link>{" "}
              </SwiperSlide>
            ))}
            <div className="owl-dots mt-0 spd1"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
