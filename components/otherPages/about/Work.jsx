import React from "react";
import Image from "next/image";
import { skills } from "@/data/skills";
import ProgressBar from "@/components/common/ProgressBar";
export default function Work() {
  return (
    <div className="work-section gray-bg section-padding pb-180">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="work-left-content">
              <div className="section-title">
                <h6>2020-2025</h6>
                <h2>Transformando realidades</h2>
              </div>
              <p>
              Durante nuestro tiempo como empresa legalmente constituida, hemos completado con éxito más de 35 proyectos de diversas envergaduras, creando y sosteniendo más de 65 empleos formales y más de 90 empleos temporales que benefician a las familias y al bienestar comunitario.
              </p>
              <h2 className="text-xl mt-6 mb-12">¡Nuestra creencia en la honestidad y la confianza impulsa vínculos auténticos y duraderos!</h2>
              <div className="progress-bar-area pr-60">
                {skills.slice(0, 2).map((skill, index) => (
                  <ProgressBar
                    max={skill.percentage}
                    name={skill.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="work-img-wrap">
              <div
                className="image-one text-end wow fadeInUp"
                data-wow-delay=".2s"
              >
                <Image
                  alt=""
                  src="/assets/img/work/work-1.jpg"
                  width={520}
                  height={590}
                  className="height-auto"
                />
              </div>
              <div className="image-two wow fadeInUp" data-wow-delay=".4s">
                <Image
                  alt="work"
                  src="/assets/img/work/work-2.jpg"
                  width={413}
                  height={424}
                  className="height-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
