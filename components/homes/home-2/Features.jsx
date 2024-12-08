import { features } from "@/data/features";
import React from "react";
import Link from "next/link";
export default function Features() {
  return (
    <div
      id="feature-2"
      className="feature-section dark-bg section-padding pt-0"
    >
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={feature.delay}
            >
              <div
                className="single-feature-item"
                style={{ backgroundImage: `url(${feature.backgroundImage})` }}
              >
                <div className="feature-info-wrap">
                  <div className="feature-num">
                    <span>{feature.number}</span>
                  </div>
                  <div className="feature-title">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-12 text-center mt-60">
            <Link href={`/about`} className="theme-btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
