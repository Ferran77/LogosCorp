import React from "react";

export default function Mission() {
  return (
    <div
      className="mission-section pt-90 pb-90"
      style={{ backgroundImage: "url(/assets/img/mission-bg.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 text-center">
            <div className="section-title">
              <h6 className="text-white">Our Mission</h6>
              <h2 className="text-white">
                Custom solutions, unique manufacturing process &amp; quality,
                crafted by <span>skill</span>
              </h2>
            </div>
            <div className="author-info">
              <h5 className="text-white">Piter Bowman</h5>
              <h6 className="text-white">Business CEO</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
