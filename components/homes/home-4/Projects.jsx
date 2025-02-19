import { projects9 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div id="project-4" className="project-section">
      <div className="row gx-0">
        {projects9.map((project, index) => (
          <div key={index} className="col-xl-3 col-lg-3 col-md-6">
            <Link
              href={`/project-details-right-sidebar/${project.id}`}
              className="single-project-wrap small"
            >
              <Image alt="" src={project.imgSrc} width={840} height={840} />
              <div className="details">
                <div className="info">
                  <h5>{project.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
