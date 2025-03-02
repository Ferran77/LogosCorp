// src/components/projects/Projects4VariantA.tsx
import { projects4 } from "@/data/projects";
import { imageText } from "@/data/imageText";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects7() {

  return (
    <div className="project-list-wrap section-padding pt-6">
      <div className="container">
        {projects4.map((project, index) => (
          <div
            className="flex flex-col md:flex-row items-center mt-10"
            key={index}
          >
            {/* Texto a la izquierda */}
            <div className="w-full md:w-1/2 md:pr-8">
              <div className="project-list-content text-center">
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

            {/* Imágenes a la derecha con texto sobre ellas */}
            <div className="w-full md:w-1/2 relative mr-6">
              <div className="project-list-img text-left relative">
                <Image
                  alt=""
                  src={project.imgSrc}
                  className="height-auto rounded-lg"
                  width={800}
                  height={600}
                />

                {/* Overlay Oscuro */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

                {/* Texto sobre la imagen */}
                <div className="absolute inset-0 flex items-end justify-center p-4">
                  <ul className="text-white text-sm space-y-2 text-left">
                    {imageText[index].map((punto, i) => (
                      <li key={i} className="list-disc list-inside">
                        {punto}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
