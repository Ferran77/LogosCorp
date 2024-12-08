"use client";
import { projects5 } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const filters = [
  { label: "All", filterClass: "*" },
  { label: "Factory", filterClass: ".factory" },
  { label: "Production", filterClass: ".production" },
  { label: "Manufacture", filterClass: ".manufacture" },
  { label: "Construction", filterClass: ".construction" },
];
export default function Projects5() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".project-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div
      id="project-masonry"
      className="section-padding pt-0"
      data-scroll-index={2}
    >
      <div className="container">
        <div className="row">
          <ul id="menu-filter" className="project-menu mb-0">
            {filters.map((filter, index) => (
              <li
                onClick={() => updateCategory(filter.filterClass)}
                className="list-inline-item"
                key={index}
              >
                <a
                  className={
                    filter.filterClass === currentFilter ? "active" : ""
                  }
                  data-filter={filter.filterClass}
                >
                  {filter.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="row project-filter mt-30" ref={isotopContainer}>
          {projects5.map((project, index) => (
            <div
              className={`col-lg-4 col-md-6 project-item ${project.category.toLowerCase()}`}
              key={index}
            >
              <a
                href={project.imgSrc}
                className="img-zoom"
                title={project.title}
              >
                <div className="project-box">
                  <div className="project-img">
                    <Image
                      className="img-fluid mx-auto d-block"
                      alt=""
                      src={project.imgSrc}
                      width={project.category === "Manufacture" ? 840 : 410}
                      height={project.category === "Manufacture" ? 840 : 530}
                    />
                  </div>
                  <div className="project-detail">
                    <h4 className="mb-0">{project.title}</h4>
                    <p className="mb-3">{project.category}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
