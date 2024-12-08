import { services5 } from "@/data/services";
import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <div id="service-1" className="service-section dark-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6 className="text-white">What We Offer</h6>
              <h2 className="text-white">
                Engineering solutions for all industries
              </h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="row mt-60">
          {services5.map((service, index) => (
            <div
              key={index}
              className={`col-xl-3 col-lg-3 col-md-6 wow fadeInUp`}
              data-wow-delay={service.wowDelay}
            >
              <div
                className={`single-service-item ${
                  service.additionalClass || ""
                }`}
              >
                <div className="service-icon">
                  <span>
                    <i className={service.icon} />
                  </span>
                </div>
                <div className="service-title">
                  <h4>
                    {service.title.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {word}
                        {idx === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </h4>
                </div>
                <Link href={`/about`} className="read_more_link">
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
