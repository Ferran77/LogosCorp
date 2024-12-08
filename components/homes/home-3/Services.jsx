import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <div
      id="service-3"
      className="service-section dark-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="service-content-wrap">
              <div className="section-title">
                <h6 className="text-white">What We Do</h6>
                <h2 className="text-white">
                  All-encompassing <br />
                  building solutions
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
              <div className="about-btn mt-40">
                <Link href={`/about`} className="theme-btn">
                  About More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="service-item-wrap">
              <div className="row">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mt-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="single-service-item">
                    <div className="service-icon">
                      <span>
                        <i className="flaticon-robotic-arm" />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>New Builds</h4>
                    </div>
                    <p>Vestibulum vestibulum posuere luctus pretium.</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="single-service-item">
                    <div className="service-icon">
                      <span>
                        <i className="flaticon-gears" />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>Management</h4>
                    </div>
                    <p>Vestibulum vestibulum posuere luctus pretium.</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="single-service-item">
                    <div className="service-icon">
                      <span>
                        <i className="flaticon-hard-hat" />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>Architecture</h4>
                    </div>
                    <p>Vestibulum vestibulum posuere luctus pretium.</p>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 mtm-30 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="single-service-item">
                    <div className="service-icon">
                      <span>
                        <i className="flaticon-repair-tools" />
                      </span>
                    </div>
                    <div className="service-title">
                      <h4>Engineering</h4>
                    </div>
                    <p>Vestibulum vestibulum posuere luctus pretium.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
