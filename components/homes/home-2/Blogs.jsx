"use client";
import Link from "next/link";
import { blogs2 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
export default function Blogs() {
  return (
    <div id="blog-2" className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 text-center">
            <div className="section-title">
              <h6>Our News</h6>
              <h2>Oil &amp; Gas Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <Swiper
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
            autoplay={{
              delay: 4000,
            }}
            loop
            speed={2500}
            modules={[Autoplay]}
            spaceBetween={40}
            className="blog-carousel owl-carousel"
          >
            {blogs2.map((post, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/blog-details/${post.id}`}
                  className="single-blog-item wow fadeInUp"
                  data-wow-delay={post.delay}
                >
                  {index % 2 ? (
                    <>
                      {" "}
                      <div className="blog-img">
                        <Image
                          alt=""
                          src={post.imgSrc}
                          width={890}
                          height={664}
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
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
                  {!(index % 2) ? (
                    <>
                      {" "}
                      <div className="blog-img">
                        <Image
                          alt=""
                          src={post.imgSrc}
                          width={890}
                          height={664}
                        />
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
