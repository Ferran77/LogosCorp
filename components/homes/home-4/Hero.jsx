import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div id="home-4" className="hero-area">
      <div className="overlay" />
      <div className="hero-area-banner">
        <div className="hero-area-content">
          <div className="container">
            <div className="row mt-100">
              <div
                className="col-lg-9 wow fadeInUp animated"
                data-wow-delay="200ms"
              >
                <div className="section-title">
                  <h1>
                    Transform Metal <br />
                    edge in steel turning
                  </h1>
                </div>
              </div>
              <div className="col-lg-3 text-lg-end">
                <div className="service-info mt-10">
                  <p>Since 2000</p>
                  <h4>Best Industrial Solutions</h4>
                  <i className="las la-arrow-down mt-30" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <p>
                  Welcome to Factorix, a full service architecture and interior
                  design firm. We specialize in creating beautiful, functional
                  spaces that reflect your unique style and personality.
                </p>
                <Link href={`/about`} className="theme-btn mt-20">
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
