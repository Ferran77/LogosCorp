"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Mouse() {
  const pathname = usePathname();
  useEffect(() => {
    const e = document.querySelector(".tf-mouse-inner");
    const t = document.querySelector(".tf-mouse-outer");
    let n,
      i = 0,
      o = false;

    // Mouse move handler
    const handleMouseMove = (s) => {
      if (!o) {
        t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      n = s.clientY;
      i = s.clientX;
    };

    // Add the mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Elements to attach hover listeners
    const hoverElements = document.querySelectorAll(
      "a, .canvas, .progress-wrap, .wishlist-button"
    );

    // Add mouse enter and leave listeners to each element
    hoverElements.forEach((element) => {
      const handleMouseEnter = () => {
        e.classList.add("mouse-hover");
        t.classList.add("mouse-hover");
      };

      const handleMouseLeave = () => {
        if (!element.closest(".canvas")) {
          e.classList.remove("mouse-hover");
          t.classList.remove("mouse-hover");
        }
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup hover listeners
      element.handleMouseEnter = handleMouseEnter;
      element.handleMouseLeave = handleMouseLeave;
    });

    // Set visibility on mouse elements
    e.style.visibility = "visible";
    t.style.visibility = "visible";

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", element.handleMouseEnter);
        element.removeEventListener("mouseleave", element.handleMouseLeave);
      });
      e.classList.remove("mouse-hover");
      t.classList.remove("mouse-hover");
    };
  }, [pathname]);

  return (
    <>
      <div className="tf-mouse tf-mouse-outer"></div>
      <div className="tf-mouse tf-mouse-inner"></div>
    </>
  );
}
