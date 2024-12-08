"use client";
import React, { useEffect, useRef, useState } from "react";

const ProgressBar = ({ max = 90, name }) => {
  const targetElement = useRef();
  const [viewed, setViewed] = useState(false);
  const [counted, setCounted] = useState(0);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((prevCount) => {
        const tempCount = prevCount + Math.ceil(max / 20);
        if (tempCount >= max) {
          clearInterval(intervalId);
          return max;
        }
        return tempCount;
      });
    }, 50);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setViewed(true);
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div className="single-bar-item">
        <h5>{name}</h5>
        <div className="bar-parcentage">{counted}%</div>
      </div>
      <div className="barfiller">
        <span
          ref={targetElement}
          className="fill progress-bar-fill"
          style={viewed ? { width: `${max}%` } : { width: "0px" }}
        />
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
