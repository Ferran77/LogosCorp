import Counter from "@/components/common/Counter";
import { counters2 } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div
      id="counter-3"
      className="counter-section dark-bg section-padding pt-100 pb-0"
    >
      <div className="container">
        <div className="row gx-5">
          {counters2.map((counter, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter-box">
                <p className="counter-number">
                  <Counter max={counter.number} />
                  {counter.text}
                </p>
                <h6>{counter.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
