import { recentPosts } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogSidebar() {
  return (
    <div className="blog-sidebar">
      <div className="search-bar-wrap d-flex">
        <input type="search" placeholder="search" />
        <i className="fal fa-search" />
      </div>
      <div className="blog-category">
        <h5>Categories</h5>
        <ul>
          <li>
            <i className="las la-angle-double-right" />
            <Link href={`/blog`}>Industrial</Link>
          </li>
          <li>
            <i className="las la-angle-double-right" />
            <Link href={`/blog`}>Construction</Link>
          </li>
          <li>
            <i className="las la-angle-double-right" />
            <Link href={`/blog`}>Mechanical</Link>
          </li>
          <li>
            <i className="las la-angle-double-right" />
            <Link href={`/blog`}>Oil Refinery</Link>
          </li>
          <li>
            <i className="las la-angle-double-right" />
            <Link href={`/blog`}>Metal</Link>
          </li>
        </ul>
      </div>
      <div className="recent-post-wrap">
        <h5>Recent Post</h5>
        {recentPosts.map((post, index) => (
          <div className="single-recent-post" key={index}>
            <div className="recent-post-thumbs">
              <Image alt="" src={post.imgSrc} width={120} height={120} />
            </div>
            <div className="recent-post-content">
              <p>{post.date}</p>
              <Link href={`/blog-details/${post.id}`}>
                <h6>{post.title}</h6>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="popular-tag-wrap">
        <h5>Popular Tag</h5>
        <span>Factory</span>
        <span>Construction</span>
        <span>Rennovation</span>
        <span>Industrial</span>
        <span>Manufacture</span>
      </div>
    </div>
  );
}
