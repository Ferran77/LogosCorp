import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projects";
export default function Details3({ projectItem }) {
  return (
    <div className="project-details-wrap section-padding">
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-xl-9 col-lg-9">
            <div className="project-desc">
              <h3>¡Su seguridad es nuestra prioridad!</h3>
              <p>
              Con una Memoria de Cálculo Estructural meticulosa, garantizamos que su inmueble resista tanto las condiciones diarias como los eventos inesperados, brindándole tranquilidad y protección.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3">
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
        <div className="row gx-5">
          <div className="col-xl-12 col-lg-12">
            <div className="project-details-inner">
              <div className="project-feature-img">
                <Image
                  alt=""
                  src="/assets/img/project/project-feature-img-5.jpg"
                  width={1536}
                  height={768}
                  className="height-auto"
                />
              </div>
              <div className="project-details-content">
                <h3>Confíe en nuestra experiencia y honestidad.</h3>
                <p>
                Le aseguramos que cada decisión estará respaldada por un análisis riguroso y detallado. <br/> Contamos la sólida experiencia de ingenieros calculistas 
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
              Con un proyecto estructural sólido y bien planificado, garantizamos la seguridad y durabilidad de tu construcción. <br/> Nuestro equipo de expertos está altamente comprometido a ofrecerle soluciones innovadoras y eficientes, <br/> asegurando que cada detalle cumpla con los más altos estándares.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-100">
          <div className="nav-links">
            <div className="nav-previous">
              <Link
                href={`/project-details-gallery/${
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
                href={`/project-details-gallery/${
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
