import { teamMembers2 } from "@/data/team";
import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <div className="team-section gray-bg section-padding pb-90">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title">
              <h6>Arquitectura nacida del corazón</h6>
              <h2>Construimos con pasión y precisión</h2>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="team-desc">
              <p className="mt-5">
              Cada proyecto es una historia en construcción. Nuestro equipo, dedicado y apasionado, transforma ideas en espacios que inspiran. Con calidad, compromiso y un enfoque personalizado, hacemos realidad tus sueños arquitectónicos, garantizando confianza en cada detalle.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {teamMembers2.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-member">
                <div className="team-bg">
                  <Image
                    alt={member.name}
                    src={member.imgSrc}
                    className="height-auto"
                    width={600}
                    height={700}
                  />
                </div>
                <div className="team-hover-info">
                  <div className="team-title">
                    <h5 className="mb-3">{member.name}</h5>
                    <span className="mb-1">"{member.position}"</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
