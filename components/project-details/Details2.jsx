import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projects";
export default function Details2({ projectItem }) {
  return (
    <div className="project-details-wrap section-padding">
      <div className="container">
        <div className="row gx-5">
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
              <div className="project-details-content">
                <h3>{projectItem.title}</h3>
                <p>
                  Aenean interdum purus vitae purus laoreet, eu egestas augue
                  dictum. Nunc tincidunt felis ullamcorper dolor euismod
                  porttitor at tincidunt arcu. Ut molestie cursus sapien, a
                  auctor quam viverra ac. Sed non blandit mi. Proin pharetra dui
                  in molestie sollicitudin. Vivamus ornare lorem in tempus
                  facilisis. Quisque tristique erat interdum augue sodales
                  fringilla.
                </p>
              </div>
              <div className="project-image-gallery">
                <div className="row">
                  <div className="col-6">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-1.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                  <div className="col-6">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-2.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                  <div className="col-12 mt-30">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-3.jpg"
                      width={1920}
                      height={1433}
                      className="height-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                Phasellus euismod, dolor at efficitur condimentum, neque nulla
                viverra lectus, varius bibendum quam sapien dignissim mi.
                Maecenas rhoncus leo turpis, sit amet aliquet lectus viverra
                sed. Aliquam sodales commodo imperdiet. Morbi tincidunt ante
                interdum urna commodo tempor vitae id orci. Suspendisse id orci
                ut erat convallis iaculis luctus vel diam. Donec felis eros,
                consectetur sed ornare quis, ultrices a libero. Vestibulum
                consectetur purus id libero euismod maximus.
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="project-details-info">
              <h3>{projectItem.title}</h3>
              <p>Dicta sunt explicabo enim ipsam</p>
              <div className="row single-details-item gy-3 mt-30">
                <div className="col-4">
                  <h5>Client</h5>
                </div>
                <div className="col-6">
                  <span>New Plant</span>
                </div>
                <div className="col-4">
                  <h5>Year</h5>
                </div>
                <div className="col-6">
                  <span>
                    {projectItem.date ? projectItem.date : "January, 2023"}
                  </span>
                </div>
                <div className="col-4">
                  <h5>Author</h5>
                </div>
                <div className="col-6">
                  <span>Anna Lewis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="nav-links">
            <div className="nav-previous">
              <Link
                href={`/project-details-right-sidebar/${
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
                href={`/project-details-right-sidebar/${
                  projectItem.id == allProjects.length ? 1 : projectItem.id + 1
                }`}
              >
                Next Project
                <i className="las la-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
