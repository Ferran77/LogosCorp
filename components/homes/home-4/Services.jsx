import { services4 } from "@/data/services";
import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <div
      id="service-3"
      className="service-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="service-content-wrap">
              <div className="section-title">
                <h6>Metal Services</h6>
                <h2>Metal fabrication &amp; engineering services</h2>
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
                {services4.map((service, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 mt-30 wow fadeInUp"
                    data-wow-delay={service.delay}
                  >
                    <div className="single-service-item">
                      <div className="service-icon">
                        <span>
                          <i className={service.icon} />
                        </span>
                      </div>
                      <div className="service-title">
                        <h4>{service.title}</h4>
                      </div>
                      <p>Vestibulum vestibulum posuere luctus pretium.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
