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
        }}
      >
        {/* Renderización del iframe */}
        <iframe
          src="https://www.logoscorp.net/modelo%20rio%20de%20la%20plata/"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
          title="Video Frame"
        ></iframe>
      </div>
    </div>
  );
}
