import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects10 } from "@/data/projects";
export default function Projects2() {
  return (
    <div id="project-3" className="project-section">
      <div className="row gx-0">
        {projects10.slice(0, 1).map((elm, i) => (
          <div key={i} className="col-xl-6 col-lg-6 col-md-6">
            <Link
              href={`/project-details-gallery/${elm.id}`}
              className="single-project-wrap big"
            >
              <Image
                alt=""
                src={elm.imgSrc}
                width={elm.imgWidth}
                height={elm.imgHeight}
              />
              <div className="details">
                <div className="info">
                  <h5>{elm.title}</h5>
                  <h6>{elm.category}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="row gx-0">
            {projects10.slice(1, 3).map((elm, i) => (
              <div key={i} className="col-lg-6">
                <Link
                  href={`/project-details-gallery/${elm.id}`}
                  className="single-project-wrap small"
                >
                  <Image
                    alt=""
                    src={elm.imgSrc}
                    width={elm.imgWidth}
                    height={elm.imgHeight}
                  />
                  <div className="details">
                    <div className="info">
                      <h5>{elm.title}</h5>
                      <h6>{elm.category}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {projects10.slice(3, 4).map((elm, i) => (
              <div key={i} className="col-lg-12 d-none d-lg-block">
                <Link
                  href={`/project-details-gallery/${elm.id}`}
                  className="single-project-wrap wide"
                >
                  <Image
                    alt=""
                    src={elm.imgSrc}
                    width={elm.imgWidth}
                    height={elm.imgHeight}
                  />
                  <div className="details">
                    <div className="info">
                      <h5>{elm.title}</h5>
                      <h6>{elm.category}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
