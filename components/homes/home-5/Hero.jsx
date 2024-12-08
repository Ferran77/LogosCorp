import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div id="home-5" className="hero-area">
      <div className="container">
        <div className="row align-items-center hero-area-inner">
          <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="hero-area-img">
              <Image
                alt=""
                src="/assets/img/banner/1.jpg"
                width={297}
                height={325}
                priority
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 text-center wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="hero-area-content">
              <div className="section-title">
                <h1>
                  World class
                  <br />
                  Textile Producer
                </h1>
              </div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                vsit aspernatur aut odit aut fugit sed quia.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 text-lg-end">
            <div className="hero-area-img">
              <Image
                alt=""
                src="/assets/img/banner/2.jpg"
                width={200}
                height={226}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
