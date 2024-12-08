import ProgressBar from "@/components/common/ProgressBar";
import { skills } from "@/data/skills";
import React from "react";

export default function PromoSection() {
  return (
    <div className="promo-section section-padding pt-0">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="client-content-wrap">
              <div className="section-title">
                <h6>Custom Order</h6>
                <h2>
                  Have a project? <br />
                  Send a brief!
                </h2>
              </div>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt labore dolore
                magna aliqua. Ut enim ad minim veniam, quisq wiusmod ut tempor
                incididunt ut labore et dolore sed do magna aliqua.
              </p>
              <div className="contact-info-wrap">
                <div className="contact-icon">
                  <i className="las la-envelope" />
                </div>
                <div className="contact-text">
                  <p>info@factorix.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="progress-bar-area">
              {skills.map((skill, index) => (
                <ProgressBar
                  max={skill.percentage}
                  name={skill.name}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
