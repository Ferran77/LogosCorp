import { projects2 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects1() {
  return (
    <div id="project-standard" className="project-section pb-60">
      <div className="container">
        <div className="row">
          {projects2.map((project) => (
            <div key={project.id} className="col-xl-4 col-lg-4 col-md-6">
              <Link
                href={`/project-details-left-sidebar/${project.id}`}
                className="single-project-wrapper"
              >
                <div className="project-img">
                  <Image
                    alt=""
                    src={project.imgSrc}
                    width={project.width}
                    height={project.height}
                    className="height-auto"
                  />
                </div>
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <h6>{project.category}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
