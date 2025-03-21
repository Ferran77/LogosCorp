import { allBlogs } from "@/data/allBlogs";
import React from "react";

export default function DetailsBanner({ blogItem = allBlogs[0] }) {
  return (
    <div
      className="banner-section blog-dtl-bg section-padding pb-60 blog-details-banner"
      style={{
        backgroundImage: `url(${blogItem.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="section-title">
              <span className="text-white">
                {blogItem.category || "Construction"}
              </span>
              <h2 className="text-white">
                {blogItem.title.split(" ").slice(0, 4).join(" ")} <br />
                {blogItem.title.split(" ").slice(4).join(" ")}
              </h2>
            </div>
            <div className="blog-meta-wrap">
              <div className="blog-meta">
                <p>
                  <i className="las la-calendar-alt text-white" />
                  {blogItem.date || "05 December 2023"}
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="las la-comments text-white" />
                  {blogItem.comments || "02 Comments"}
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="las la-user-alt text-white" />
                  By Admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
