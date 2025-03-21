"use client";

import { allBlogs } from "@/data/allBlogs";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../common/Pagination";

const postsPerPage = 9;

export default function Blogs1() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice inicial y final de los posts para la página actual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allBlogs.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="blog-section gray-bg section-padding">
      <div className="container">
        <div className="row">
          {currentPosts.map((blog) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={blog.id}>
              <Link
                href={`/blog-details/${blog.id}`}
                className="single-blog-item wow fadeInUp"
                data-wow-delay="0.2s"
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
