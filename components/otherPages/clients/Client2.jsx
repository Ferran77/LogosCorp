import { clientImages } from "@/data/brands";
import React from "react";
import Image from "next/image";
export default function Client2() {
  return (
    <div className="client-section section-padding pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="section-title">
              <h6>Our Client</h6>
              <h2>Check our top partners &amp; clients</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="section-text">
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitacion ullamco.
              </p>
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="clients-img-wrap">
            {clientImages.map((client, index) => (
              <div key={index} className="clients-img-inner">
                <Image
                  alt=""
                  src={client.src}
                  width={client.width}
                  height={client.height}
                  className="height-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
