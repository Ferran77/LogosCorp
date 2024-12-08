import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about-2" className="about-page about-section section-padding pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="about-img-wrap">
              <div className="image-one wow fadeInUp" data-wow-delay=".2s">
                <Image
                  alt=""
                  src="/assets/img/about/about-page-1.jpg"
                  width={440}
                  height={586}
                  className="height-auto"
                />
              </div>
              <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                <Image
                  alt=""
                  src="/assets/img/about/about-page-2.jpg"
                  width={410}
                  height={450}
                  className="height-auto"
                />
              </div>
              <div className="founder-year-wrap">
                <h1>1995</h1>
                <span>Start In</span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Us</h6>
                <h2>
                  We proudly leed <br />
                  the world's future
                </h2>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <ul className="about-key mt-30">
                <li>
                  <i className="las la-check-square" />
                  <p>Best Industrial</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Quality Construction</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Expert Contractor</p>
                </li>
                <li>
                  <i className="las la-check-square" />
                  <p>Affordable Cost Rate</p>
                </li>
              </ul>
              <Link href={`/about`} className="theme-btn mt-30">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
