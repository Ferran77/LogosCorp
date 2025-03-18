import { projects20 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function BasicProjects() {
  return (
    <div id="project-4" className="project-section">
      <div className="row gx-0">
        {projects20.map((project, index) => (
          <div key={index} className="col-xl-3 col-lg-3 col-md-6">
            <Link
              href={`/about`}
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
