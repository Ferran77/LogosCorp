import { features2 } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Features() {
  return (
    <div
      id="feature-3"
      className="feacture-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <h6>What We Offer</h6>
              <h2>Global Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {features2.map((feature, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={feature.delay}
            >
              <div className="single-feature-item">
                <div className="feature-bg">
                  <Image
                    alt=""
                    className="height-auto"
                    src={feature.image}
                    width={890}
                    height={664}
                  />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <Link href={`/about`} className="read_more_link">
                    <span className="link_text">Read More</span>
                    <span className="link_icon">
                      <i className="las la-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
