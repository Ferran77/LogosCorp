import { pricePackages } from "@/data/pricing";
import React from "react";
import Image from "next/image";
export default function Pricing() {
  return (
    <div className="price-section gray-bg section-padding">
      <div className="container">
        <div className="row gx-lg-0">
          {pricePackages.map((elm) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={elm.id}>
              <div
                className={`single-price-item ${elm.active ? "active" : ""}`}
              >
                <div className="price-item-inner">
                  <div className="price-title">
                    <h5>{elm.title}</h5>
                  </div>
                  <div className="price-icon">
                    <Image alt="" src={elm.icon} width={64} height={64} />
                  </div>
                  <div className="price-amount">
                    <h1>{elm.amount}</h1>
                    <h6>per/month</h6>
                  </div>
                  <hr />
                  <div className="price-feature">
                    <ul>
                      {elm.features.map((feature, index) => (
                        <li key={index}>
                          {feature} <i className="las la-check" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="price-btn">
                    <a href="#" className="bordered-btn">
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
