import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div id="about-5" className="about-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>What We Do</h6>
                <h2>Chale! modern production of fabrics</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet adipscin elit volare el tempor
                consectetur amor eiusm volupte. Magna aliqua et enim.
              </p>
              <div className="ceo-wrapper">
                <div className="ceo-thumb">
                  <Image
                    alt=""
                    src="/assets/img/ceo-thumb.jpg"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="ceo-info">
                  <h5>Rojer Moore</h5>
                  <span>CEO, Factorix</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="about-desc-wrap">
              <div className="row gx-5">
                <div className="col-xl-6 col-lg-6">
                  <p>
                    <span className="dropcap_style">Q</span>nsectetur adipiscing
                    elit, sed do eiusm onsectetur adipiscing elit, eiusm od
                    tempor ut labore.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do eiusm od tempor ut labore sed
                    adipiscing do eiusm od tempor ut sed do eiusm.
                  </p>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <p>
                    Consectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do od tempor ut labore.
                  </p>
                  <p>
                    Consectetur adipiscing elit, sed do eiusm onsectetur
                    adipiscing elit, sed do eiusm od tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
