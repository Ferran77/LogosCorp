import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs6 } from "@/data/blogs";
import BlogSidebar from "./BlogSidebar";
import Pagination from "../common/Pagination";
export default function Blogs2() {
  return (
    <div className="blog-page section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-12">
            {blogs6.map((post, index) => (
              <div key={index} className="single-blog-item">
                <div className="blog-thumb">
                  <Image
                    alt=""
                    className="height-auto "
                    src={post.imgSrc}
                    width={840}
                    height={473}
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-title">
                    <h3>
                      <Link href={`/blog-details/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="blog-info">
                    <span>{post.date}</span>
                    <span>{post.comments}</span>
                  </div>
                </div>
                <p>{post.description}</p>
                <Link
                  href={`/blog-details/${post.id}`}
                  className="read_more_link"
                >
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </Link>
              </div>
            ))}
            <ul className="pagination">
              <Pagination />
            </ul>
          </div>
          <div className="col-xl-4 col-lg-4 col-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
