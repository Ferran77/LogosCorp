import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      id="testimonial-3"
      className="testimonial-section gray-bg section-padding"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="testimonial-bg">
              <Image
                alt=""
                className="height-auto"
                src="/assets/img/testimonial/testimonial-img.jpg"
                width={1536}
                height={1536}
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <Image
                  alt=""
                  src="/assets/img/straight-quotes.png"
                  width={32}
                  height={32}
                />
              </div>
              <div className="testimonial-text">
                <h3>
                  Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae
                  vitae dicta. Adipiscing elit, sed do
                </h3>
                <p>
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ut enim ad minim. Adipiscing elit , sed do
                  eiusmod tempor.
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-img">
                  <Image
                    alt=""
                    src="/assets/img/testimonial/ceo.jpg"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="author-desc">
                  <h5>Francis Fooler</h5>
                  <h6>CEO, Factorix Inc.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
