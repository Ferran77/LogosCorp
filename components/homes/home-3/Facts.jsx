import Counter from "@/components/common/Counter";
import { counters2 } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div
      id="counter-3"
      className="counter-section theme-bg section-padding pt-60 pb-60"
    >
      <div className="container">
        <div className="row gx-5">
          {counters2.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-counter-box">
                <p className="counter-number">
                  <Counter max={elm.number} />
                  {elm.text}
                </p>
                <h6>{elm.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
