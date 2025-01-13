import React from "react";

export default function FeatureLineIframe() {
  return (
    <div
      className="feature_wrap"
      style={{ maxWidth: "100vw", overflow: "hidden" }}
    >
      <div
        className="feature_item"
        style={{
          backgroundColor: "#000", // Fondo para asegurar que no haya bordes blancos
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "700px", // Ajusta la altura para el iframe
          pointerEvents: "auto",
        }}
      >
        {/* Renderización del iframe */}
        <iframe
          src="/tour/index.html"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture; gamepad"
          allowFullScreen
          title="Virtual Tour"
        ></iframe>
      </div>
    </div>
  );
}
