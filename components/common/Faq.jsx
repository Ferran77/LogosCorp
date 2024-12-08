import React from "react";
import Image from "next/image";
import Counter from "./Counter";
export default function Faq() {
  return (
    <div className="faq-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>FAQ</h6>
              <h2>
                We develop &amp; <br />
                build production
              </h2>
            </div>
            <div className="cp-custom-accordion">
              <div className="accordions" id="accordionExample">
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-buttons"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span />
                      How can I apply for a job?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span />
                      Which specialties are requested today?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </div>
                  </div>
                </div>
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span />
                      Do you produce products worldwide?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 text-lg-end">
            <div className="counter-wrap">
              <div className="counter-img">
                <Image
                  alt=""
                  src="/assets/img/counter-bg.jpg"
                  width={3703}
                  height={4480}
                  className="height-auto"
                />
              </div>
              <div className="counter-content">
                <div className="single-counter-item dark-bg">
                  <h6>Happy Clients</h6>
                  <h1>
                    <Counter max={124} />+
                  </h1>
                  <p>Adipiscing elit, do eiusm.</p>
                </div>
                <div className="single-counter-item theme-bg">
                  <h6>Partners</h6>
                  <h1>
                    <Counter max={16} />+
                  </h1>
                  <p>Sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
