import React from "react";

export default function FeatureLine() {
  return (
    <div
      className="feature_wrap"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div
        className="feature_item"
        style={{ backgroundImage: "url(/assets/img/feature-bg.jpg)" }}
      >
        <div className="marquee-anim">
          <h5>Construction Project</h5>
          <h5>Interior Design</h5>
          <h5>Concept Drawings</h5>
          <h5>Building Venture</h5>
        </div>
      </div>
    </div>
  );
}
