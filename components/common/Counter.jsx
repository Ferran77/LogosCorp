"use client";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ parentClass, min = 0, max }) => {
  const targetElement = useRef();
  const [counted, setCounted] = useState(min);

  const startCountup = () => {
    const step = max / 20; // Divide el total en 20 pasos

    const intervalId = setInterval(() => {
      setCounted((prevCount) => {
        const tempCount = prevCount + step;

        if (tempCount >= max) {
          clearInterval(intervalId);
          return max; // Asegura que no pase el valor máximo
        }

        return tempCount;
      });
    }, 50);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) observer.unobserve(targetElement.current);
    };
  }, []);

  return (
    <span ref={targetElement} className={parentClass}>
      {Math.floor(counted)} {/* Redondea hacia abajo */}
    </span>
  );
};

export default Counter;
