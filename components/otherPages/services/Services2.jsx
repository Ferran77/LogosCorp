import { services6 } from "@/data/services";
import React from "react";

export default function Services2() {
  return (
    <div
      id="service-1"
      className="service-page service-section section-padding pb-90"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6>What We Offer</h6>
              <h2>Top engineering for every project</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-service-item">
                  <div className="service-icon">
                    <span>
                      <i className="flaticon-cogwheel" />
                    </span>
                  </div>
                  <div className="service-title">
                    <h4>
                      Metal <br />
                      Manufacturing
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-service-item">
                  <div className="service-icon">
                    <span>
                      <i className="flaticon-lab-tool" />
                    </span>
                  </div>
                  <div className="service-title">
                    <h4>
                      Chemical <br />
                      Institute
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          {services6.map((service, index) => (
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
                    {service.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word}
                        {i < service.title.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
