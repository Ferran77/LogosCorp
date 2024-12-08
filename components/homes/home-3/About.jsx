import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about-3" className="about-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="about-bg-wrap">
              <Image
                alt=""
                src="/assets/img/about/about-3.jpg"
                className="height-auto"
                width={1556}
                height={1920}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>Who We Are</h6>
                <h2>We are leaders in the building sector</h2>
              </div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia.
              </p>
              <div className="about-feature">
                <ul>
                  <li>Individual Approach</li>
                  <li>Technical Construction</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              <div className="about-btn mt-40">
                <Link href={`/about`} className="theme-btn">
                  About More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
