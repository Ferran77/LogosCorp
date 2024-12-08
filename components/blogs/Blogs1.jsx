import { blogs5 } from "@/data/blogs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";
export default function Blogs1() {
  return (
    <div className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row">
          {blogs5.map((blog) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={blog.id}>
              <Link
                href={`/blog-details/${blog.id}`}
                className="single-blog-item wow fadeInUp"
                data-wow-delay={blog.wowDelay}
              >
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
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          <ul className="pagination d-flex justify-content-center">
            <Pagination />
          </ul>
        </div>
      </div>
    </div>
  );
}
