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
                <h3>¿Qué es lo primero que imagina al pensar en su proyecto ideal?</h3>
                <p>
                ¡Seguramente una visión clara de cómo serán sus espacios, llenos de vida y funcionalidad! <br/>
Aquí es donde entra en juego el Anteproyecto, una herramienta clave que convierte sus ideas en algo tangible antes de dar el siguiente gran paso. <br/>

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
              ¡El Anteproyecto es la clave para convertir su visión en realidad! <br/> No deje que su proyecto quede a la suerte. Involúcrese desde el principio, visualice sus espacios y tome decisiones informadas. <br/>

Con un Anteproyecto detallado y profesional, usted no solo construye un edificio, ¡construye el espacio de sus sueños con total confianza!
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="project-details-info">
              <h3>{projectItem.title}</h3>
              <p>3 elementos necesarios para comenzar su ante-proyecto:</p>
              <div className="row single-details-item gy-3 mt-30">
                <div className="col-4">
                  <h5>1. Análisis de normatividad</h5>
                </div>
                {/* <div className="col-6">
                  <span>New Plant</span>
                </div> */}
                <div className="col-4">
                  <h5>2. Análisis de las condiciones físicas del lugar </h5>
                </div>
                {/* <div className="col-6">
                  <span>
                    {projectItem.date ? projectItem.date : "January, 2023"}
                  </span>
                </div> */}
                <div className="col-4">
                  <h5>3. Análisis y estudio de sus necesidades</h5>
                </div>
                {/* <div className="col-6">
                  <span>Anna Lewis</span>
                </div> */}
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
                  Regresar
                </span>
              </Link>
            </div>
            <div className="nav-next">
              <Link
                href={`/project-details-right-sidebar/${
                  projectItem.id == allProjects.length ? 1 : projectItem.id + 1
                }`}
              >
                Próximo
                <i className="las la-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
