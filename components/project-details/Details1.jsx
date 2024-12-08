import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projects";
export default function Details1({ projectItem }) {
  return (
    <div className="project-details-wrap section-padding">
      <div className="container">
        <div className="row gx-5">
          <div className="col-xl-5 col-lg-5">
            <div className="project-details-info">
              <h3>{projectItem.title}</h3>
              <p>Dicta sunt explicabo enim ipsam</p>
              <div className="row single-details-item gy-3 mt-30">
                <div className="col-4">
                  <h5>Client</h5>
                </div>
                <div className="col-6">
                  <span>Good invest</span>
                </div>
                <div className="col-4">
                  <h5>Year</h5>
                </div>
                <div className="col-6">
                  <span>
                    {projectItem.date ? projectItem.date : "February, 2023"}
                  </span>
                </div>
                <div className="col-4">
                  <h5>Author</h5>
                </div>
                <div className="col-6">
                  <span>Jim Rayan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="project-details-inner">
              <div className="project-feature-img">
                <Image
                  alt=""
                  src={projectItem.imgSrc}
                  width={1536}
                  height={1536}
                  className="height-auto"
                />
              </div>
              <div className="project-feature-img mt-30">
                <Image
                  alt=""
                  src="/assets/img/project/project-feature-img-3.jpg"
                  width={1024}
                  height={954}
                  className="height-auto"
                />
              </div>
              <div className="project-feature-img mt-30">
                <Image
                  alt=""
                  src="/assets/img/project/project-feature-img-4.jpg"
                  width={1024}
                  height={792}
                  className="height-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="nav-links">
            <div className="nav-previous">
              <Link
                href={`/project-details-left-sidebar/${
                  projectItem.id == 1 ? 1 : projectItem.id - 1
                }`}
              >
                <span className="meta-nav">
                  <i className="las la-arrow-left" />
                  Prev Project
                </span>
              </Link>
            </div>
            <div className="nav-next">
              <Link
                href={`/project-details-left-sidebar/${
                  projectItem.id == allProjects.length ? 1 : projectItem.id + 1
                }`}
              >
                <span className="meta-nav">
                  Next Project
                  <i className="las la-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
