import { projects7 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  //Data Projects 7
  return (
    <div id="project-1" className="project-section theme-bg">
      <div className="container-fluid">
        <div className="row">
          {projects7.map((project, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay={project.delay}
            >
              <Link
                href={`/project-details-right-sidebar/${project.id}`}
                className="single-project-item"
              >
                <div className="project-bg">
                  <Image
                    className="height-auto"
                    alt=""
                    src={project.imgSrc}
                    width={1536}
                    height={1536}
                  />
                </div>
                <div className="project-details">
                  <h5>{project.title}</h5>
                  <span>{project.category}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
