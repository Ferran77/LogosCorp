import React from "react";
import Image from "next/image";
export default function Process() {
  return (
    <div id="process-3" className="process-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="process-img-one wow fadeInUp" data-wow-delay=".2s">
              <Image
                className="height-auto"
                alt=""
                src="/assets/img/process/5-1.jpg"
                width={1782}
                height={2048}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="process-content-wrap">
              <div className="section-title">
                <h6>Professional Approach</h6>
                <h2>Let's craft something cute and creative</h2>
              </div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit sed quia.
              </p>
            </div>
            <div
              className="process-img-two mt-100 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <Image
                className="height-auto"
                alt=""
                src="/assets/img/process/5-2.jpg"
                width={1536}
                height={1168}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
