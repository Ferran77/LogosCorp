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
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/video_render_mix_logos-corp_mexico.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="marquee-anim ">
          <h5>Arquitectura y diseño</h5>
          <h5>Construcción y remodelación</h5>
          <h5>Render y modelados 3D</h5>
          <h5>Servicios especiales</h5>
        </div>
      </div>
    </div>
  );
}
