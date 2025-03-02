// src/components/projects/Projects4VariantB.tsx
import { projects6 } from "@/data/projects";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects8() {
  return (
    <div className="project-list-wrap section-padding pt-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Grid de 2x2: Imagen arriba y texto abajo */}
          {projects6.map((project, index) => (
            <div key={index} className="text-center">
              <div className="project-list-img mb-4 rounded-lg">
                <Image
                  alt=""
                  src={project.imgSrc}
                  className="height-auto rounded-lg"
                  width={500}
                  height={375}
                />
              </div>
              <div className="project-list-content">
                <div className="section-title">
                  <h6>{project.category}</h6>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
                {/* <Link
                  href={`/project-details-left-sidebar/${project.id}`}
                  className="read_more_link inline-block mt-2"
                >
                  <span className="link_text">Read More</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
