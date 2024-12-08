import { projects8 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div
      id="project-2"
      className="project-section dark-bg section-padding pb-0"
    >
      <div className="row gx-0">
        {projects8.map((project, index) => (
          <div key={index} className="col-xl-3 col-lg-3 col-md-6">
            <Link
              href={`/project-details-left-sidebar/${project.id}`}
              className="single-project-item"
            >
              <div className="project-bg">
                <Image
                  alt=""
                  src={project.imgSrc}
                  width={840}
                  height={782}
                  className="height-auto"
                />
              </div>
              <div className="project-info">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
