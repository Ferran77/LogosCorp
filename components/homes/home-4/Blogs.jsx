import { blogs7 } from "@/data/blogs";
import React from "react";
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
          {blogs7.map((blog, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 wow fadeInUp`}
              data-wow-delay={blog.wowDelay}
            >
              <Link
                href={`/blog-details/${blog.id}`}
                className="single-blog-item"
              >
                <div className="blog-img">
                  <Image alt="" src={blog.imgSrc} width={890} height={664} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-title">
                    <h4>{blog.title}</h4>
                  </div>
                  <p>{blog.description}</p>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
