import React from "react";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function FunFact() {
  return (
    <div id="team-page" className="funfact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="section-title">
              <h6>Fact in Numbers</h6>
              <h2>We develop &amp; create global production</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <div className="counter-content">
              <div className="single-counter-item">
                <h6>Years</h6>
                <h1>
                  <span className="odometer" data-count={12}>
                    <Counter max={12} />+
                  </span>
                </h1>
                <p style={{ color: "#5A5A67" }}>Adipiscing elit, do eiusm.</p>
              </div>
              <div className="single-counter-item">
                <h6>People</h6>
                <h1>
                  <span className="odometer" data-count={100}>
                    <Counter max={99} />+
                  </span>
                </h1>
                <p style={{ color: "#5A5A67" }}>Sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 ">
            <div className="work-img-wrap mb-5">
              <div
                className="image-one text-end wow fadeInUp"
                data-wow-delay=".2s"
              >
                <Image
                  alt=""
                  src="/assets/img/funfact/1.jpg"
                  width={850}
                  height={964}
                  className="height-auto"
                />
              </div>
              <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                <Image
                  alt=""
                  src="/assets/img/funfact/2.jpg"
                  width={413}
                  height={424}
                  className="height-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
