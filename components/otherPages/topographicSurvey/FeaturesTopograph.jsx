import { features6 } from "@/data/features";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function FeaturesTopograph() {
  return (
    <div
      id="feature-3"
      className="feacture-section gray-bg section-padding pb-90"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <h2>Esencial para trámites y desarrollo sin contratiempos</h2>
              <p className="text-2xl text-[#0B0D26]">¡Nuestros planos cumplen con los más altos estándares de precisión y fiabilidad!</p>
            </div>
          </div>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
          {features6.map((feature, index) => (
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
