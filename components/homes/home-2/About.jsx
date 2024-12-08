import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about-2" className="about-section section-padding pb-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-xl-1">
            <div className="about-img-wrap">
              <div className="image-one wow fadeInUp" data-wow-delay=".2s">
                <Image
                  alt=""
                  src="/assets/img/about/about-2-1.jpg"
                  width={440}
                  height={586}
                  className="height-auto"
                />
              </div>
              <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                <Image
                  alt=""
                  src="/assets/img/about/about-2-2.jpg"
                  width={410}
                  height={530}
                  className="height-auto"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-1 order-xl-2">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Us</h6>
                <h2>
                  We proudly fuel <br />
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
