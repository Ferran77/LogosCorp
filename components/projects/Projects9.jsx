import { projects8 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Projects9() {
  return (
    <div className="project-list-wrap section-padding pt-4">
      <div className="container">
        {projects8.map((project, index) => (
          <div className="row align-items-center mt-60" key={index}>
            <div className="col-xl-6 col-lg-6">
              <div className="project-list-img">
                <Image
                  alt=""
                  src={project.imgSrc}
                  className="height-auto"
                  width={890}
                  height={664}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="project-list-content">
                <div className="section-title">
                  <h6>{project.category}</h6>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                {/* <Link
                  href={`/project-details-left-sidebar/${project.id}`}
                  className="read_more_link"
                >
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
