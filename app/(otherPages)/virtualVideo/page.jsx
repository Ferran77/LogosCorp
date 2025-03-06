import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ImgDetails3 from "@/components/otherPages/virtualVideo/imgDetails3"
import RenderImg3 from "@/components/otherPages/virtualVideo/RenderImg3";
import Cta from "@/components/otherPages/Cta";
import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Recorrido virtual en video",
  description: "Recorrido virtual en video",
};
export default function Page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];

  return (
    <>
      <Header1 />
      <div className="breadcrumb-area-6">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/assets/videos/Video-Recorrido_Oaxaca_Proyecto_Rio_de_la_Plata.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Recorrido virtual en video</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderImg3 />
      <ImgDetails3 />
      <Cta />
      <Footer1 />
    </>
  );
}
