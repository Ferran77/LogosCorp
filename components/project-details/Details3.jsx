import React from "react";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/data/projects";
export default function Details2({ projectItem }) {
  return (
    <div className="project-details-wrap section-padding bg-[#0B0D26]">
      <div className="container ">
        <div className="row gx-5">
          <div className="col-xl-7 col-lg-7">
            <div className="project-details-inner">
              <div className="project-feature-img">
                <Image
                  alt=""
                  src="/assets/img/project/gallery-img-5.jpg"
                  width={1536}
                  height={1536}
                  className="height-auto"
                />
              </div>
              <div className="project-details-content ml-4">
                <h3 className="text-white">
                Le aseguramos que cada decisión estará respaldada por un análisis riguroso y detallado.
                </h3>
                <p>
                  Con un proyecto estructural sólido y bien planificado,
                  garantizamos la seguridad y durabilidad de su construcción.{" "}
                  <br /> <br/>
                  Nuestro equipo de expertos se compromete a ofrecerle
                  soluciones innovadoras y eficientes, asegurando que
                  cada detalle cumpla con los más altos estándares.
                </p>
              </div>
              <div className="project-image-gallery">
                <div className="row">
                  <div className="col-6">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-6.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                  <div className="col-6">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-7.jpg"
                      width={1024}
                      height={764}
                      className="height-auto"
                    />
                  </div>
                  <div className="col-12 mt-30">
                    <Image
                      alt=""
                      src="/assets/img/project/gallery-img-8.jpg"
                      width={1920}
                      height={1433}
                      className="height-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-30">
                Con una Memoria de Cálculo Estructural meticulosa, garantizamos
                que su inmueble resista tanto las condiciones diarias como los
                eventos inesperados, brindándole tranquilidad y protección.
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="project-details-info">
              <h3 className="text-white">
                ¡Su seguridad es nuestra prioridad!
              </h3>
              <p>
                3 razones de peso para llevar a cabo un Proyecto estructural:
              </p>
              <div className="row single-details-item gy-3 mt-30">
                <div className="col-4">
                  <h5 className="text-white">
                    1. Garantiza la seguridad y estabilidad de la consturcción
                  </h5>
                </div>
                {/* <div className="col-6">
                  <span>New Plant</span>
                </div> */}
                <div className="col-4">
                  <h5 className="text-white">
                    2. Se evitan colapsos o deformaciones a largo plazo
                  </h5>
                </div>
                {/* <div className="col-6">
                  <span>
                    {projectItem.date ? projectItem.date : "January, 2023"}
                  </span>
                </div> */}
                <div className="col-4">
                  <h5 className="text-white">
                    3. Se cumple con la normativa vigente
                  </h5>
                </div>
                {/* <div className="col-6">
                  <span>Anna Lewis</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mt-100">
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
        </div> */}
      </div>
    </div>
  );
}
