import { features4 } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Features() {
  return (
    <div
      id="feature-3"
      className="feacture-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <h6>Qué ofrecemos</h6>
              <h2>Un equipo certificado y experto de Peritos y Directores responables de obra</h2>
            </div>
          </div>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          {features4.map((feature, index) => (
            <div
              key={index}
              className="single-feature-item text-center"
              data-wow-delay={feature.delay}
            >
              <div className="feature-bg">
                <Image
                  alt=""
                  className="height-auto"
                  src={feature.image}
                  width={890}
                  height={664}
                />
              </div>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <Link href={`/about`} className="read_more_link">
                  <span className="link_text">Contacto</span>
                  <span className="link_icon">
                    <i className="las la-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
