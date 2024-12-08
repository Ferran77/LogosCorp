"use client";
import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";

const PriceSlider = ({ min = 10, max = 40, start = [12, 38], onUpdate }) => {
  useEffect(() => {
    const element = document.getElementById("price-slider");
    if (element) {
      // Initialize the noUiSlider
      noUiSlider.create(element, {
        start: start,
        connect: true,
        range: {
          min: min,
          max: max,
        },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Math.round(value),
        },
      });

      // Set up the 'update' event listener
      element.noUiSlider.on("update", (values) => {
        if (onUpdate) {
          onUpdate(values);
        }
      });
    }

    // Cleanup on component unmount
    return () => {
      if (element) {
        element.noUiSlider.destroy();
      }
    };
  }, [min, max, start, onUpdate]);

  return <div id="price-slider" />;
};

export default PriceSlider;
