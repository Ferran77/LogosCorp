import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Details6() {
  return (
    <div className="team-section dark-bg section-padding">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Columna izquierda (2 imágenes) */}
          <div className="flex flex-col gap-6">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="relative overflow-hidden group w-full h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width={1096}
                  height={570}
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-xl font-bold">{member.name}</h5>
                  <span className="text-sm">{member.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Columna central (Texto) */}
          <div className="text-center text-white">
            <div className="section-title">
              <h6 className="text-white">Proyecto arquitectónico</h6>
              <h2 className="text-white">¡Vivimos cada detalle de su proyecto!</h2>
            </div>
            <p className="mt-10">
              <strong>¿Sabía que cada proyecto arquitectónico exitoso comienza con una planeación rigurisa y detallada? <br/> <br/> El proyecto arquitectónico </strong>es la base sólida sobre la que se construye cualquier edificación profesional <br/> En cada detalle está la diferencia. Es por ello que le animamos a realizar su proyecto con nuestro equipo de aquitectos califiacdos que, con amor, dedicarán tiempo para entregarle un trabajo de excelencia. 
              
            </p>
            <p className="mt-16 mb-8">
              <strong>Al concluir le entregamos:</strong> <br/>
              <br/><li><strong>Planos arquiectónicos</strong> de plantas, azoteas, fachada principal, un corte longitudinal, un corte transversal, cuadro de áreas y croquis de localización</li>
              <br/><li><strong>Planos arquiectónicos</strong> con cotas, ejes, niveles y alturas de entrepisos en totods los espacios</li>
             
            </p>
            <Link href={`/about`} className="theme-btn mt-30">
              Nosotros
            </Link>
          </div>

          {/* Columna derecha (2 imágenes) */}
          <div className="flex flex-col gap-6">
            {teamMembers.slice(2, 4).map((member, index) => (
              <div key={index} className="relative overflow-hidden group w-full h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width={1096}
                  height={570}
                />
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-xl font-bold">{member.name}</h5>
                  <span className="text-sm">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
