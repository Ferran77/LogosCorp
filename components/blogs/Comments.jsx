import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="commetns-section-wrap">
      <div className="comments-headline">
        <h3>Comments (2)</h3>
      </div>
      <div className="single-comments-wrap">
        <div className="single-comments-inner">
          <div className="comments-autor-thumb">
            <Image
              alt=""
              src="/assets/img/blog/comment-1.jpg"
              width={150}
              height={150}
            />
          </div>
          <div className="comments-content">
            <h6>Patric Evra</h6>
            <p className="comments-date">November 02, 2023 - 9:44 am</p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt
            </p>
          </div>
        </div>
        <a href="#" className="reply-btn">
          Reply
        </a>
      </div>
      <div className="single-comments-wrap">
        <div className="single-comments-inner">
          <div className="comments-autor-thumb">
            <Image
              alt=""
              src="/assets/img/blog/comment-2.jpg"
              width={150}
              height={150}
            />
          </div>
          <div className="comments-content">
            <h6>Monica Benedict</h6>
            <p className="comments-date">November 06, 2023 - 7:28 am</p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt
            </p>
          </div>
        </div>
        <a href="#" className="reply-btn">
          Reply
        </a>
      </div>
    </div>
  );
}
