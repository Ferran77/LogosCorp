import Image from "next/image";
import React from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

export default function BlogDetails({ blogItem }) {
  return (
    <div className="blog-details-page section-padding">
      <div className="container mx-auto max-w-xl">
        <div className="row">
          <div className="col-12">
            <div className="blog-content-wrap text-center">
              {blogItem.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={index} className="text-base text-zinc-900 mb-4 mx-10">
                      {item.text}
                    </p>
                  );
                }
                if (item.type === "subtitle") {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-sky-900 my-4 mx-8"
                    >
                      {item.text}
                    </h3>
                  );
                }
                return null;
              })}

              {blogItem.quotes.map((quote, index) => (
                <div className="blog-quote-wrap" key={index}>
                  <div className="quote-icon">
                    <Image
                      alt=""
                      src="/assets/img/straight-quotes.png"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="blog-quote-text">
                    <p>{quote.text}</p>
                    <h6 className="blog-subtext">
                      {quote.subtext} / <span>{quote.position}</span>
                    </h6>
                  </div>
                </div>
              ))}

              <h3 className="mt-20 mb-30">{blogItem.title}</h3>

              <div className="row mt-30 mb-30 justify-center gap-4">
                {blogItem.images.map((image, index) => (
                  <div className="col-4" key={index}>
                    <div className="blog-feature-img">
                      <Image
                        alt=""
                        src={image}
                        width={1024}
                        height={764}
                        className="height-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
                <div className="col-6">
                  <div className="blog-tag-wrap d-flex align-items-center justify-center">
                    <h5>Tags:</h5>
                    <span>{blogItem.category}</span>
                  </div>
                </div>
                <div className="col-6 text-end">
                  <div className="social-icon">
                    <a href="#">
                      <i className="lab la-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="lab la-skype" />
                    </a>
                    <a href="#">
                      <i className="lab la-instagram" />
                    </a>
                    <a href="#">
                      <i className="lab la-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pagination-wrap">
                <a href="#">
                  <i className="las la-long-arrow-alt-left" />
                  Previous Post
                </a>
                <a href="#">
                  Next Post
                  <i className="las la-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            <Comments />
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
