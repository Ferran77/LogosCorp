import { projects3 } from "@/data/projects";
import React from "react";
import Image from "next/image";
export default function Projects3() {
  return (
    <div id="project-2" className="project-grid project-section">
      <div className="container-fluid">
        <div className="row">
          {projects3.map((project) => (
            <div key={project.id} className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-project-item">
                <div className="project-bg">
                  <Image
                    alt=""
                    src={project.imgSrc}
                    width={project.width}
                    height={project.height}
                    className="height-auto"
                  />
                </div>
                <div className="project-info">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
