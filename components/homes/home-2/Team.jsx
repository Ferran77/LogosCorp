import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="team-section dark-bg section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
            <div className="team-members-wrap">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={member.delay}
                  >
                    <div className="single-team-member">
                    <div className="relative overflow-hidden group w-full h-[200px] sm:h-[300px] lg:h-[350px]">
  <Image
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    width={1096}
    height={570} // Ancho mayor que altura
  />
  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h5 className="text-xl font-bold">{member.name}</h5>
    <span className="text-sm">{member.role}</span>
  </div>
</div>

                      {/* <div className="social-icon">
                        {member.socials.map((social, socialIndex) => (
                          <a key={socialIndex} href={social.link}>
                            <i className={social.icon} />
                          </a>
                        ))}
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
            <div className="team-content-wrap">
              <div className="section-title">
                <h6 className="text-white">Somos especialistas en:</h6>
                <h2 className="text-white">
                  Instalaciones básicas e instalaciones especiales
                </h2>
              </div>
              <p className="mt-10">
                Básicas:
                <li>Instalación hidráulica</li>
                <li>Instalación sanitaria</li>
                <li>Instalación eléctrica</li>
                <li>Instalación de gas</li>
               
              </p>
              <p className="mt-16 mb-8">
               Especiales:
               <li>Sitema de CCTV</li>
                <li>Riego automatizado para jardín</li>
                <li>Sistema domótico -Casa inteligente- </li>
                <li>Sistema de voz y datos</li>
                <li>Sistema de elevadores</li>
              </p>
              <Link href={`/about`} className="theme-btn mt-30">
                Nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
