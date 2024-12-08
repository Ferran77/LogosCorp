import Counter from "@/components/common/Counter";
import { counters } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div id="counter-2" className="counter-area dark-bg pt-60">
      {/* <div class="overlay-2"></div> */}
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 col-12 wow fadeInLeft"
              data-wow-delay={counter.delay}
            >
              <div className="single-counter-box">
                <p className="counter-number">
                  <Counter max={counter.number} />
                </p>
                <h6 className="text-white">{counter.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
