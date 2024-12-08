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
                <h6>Quality Work</h6>
                <h2>We develop top production solutions</h2>
              </div>
              <p>
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores.
              </p>
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
                  alt=""
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
