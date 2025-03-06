import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ImgDetails2 from "@/components/otherPages/virtualTour/imgDetails2"
import RenderImg2 from "@/components/otherPages/virtualTour/RenderImg2";
import Cta from "@/components/otherPages/Cta";
import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Tour virtual 360°",
  description: "Tour virtual 360°",
};
export default function Page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];

  return (
    <>
      <Header1 />
      {/* Sección de video con breadcrumb */}
      <div className="breadcrumb-area-6">
        {/* Video de fondo */}
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/assets/videos/video_render_mix_logos-corp_mexico.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        {/* Contenido del breadcrumb */}
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Tour virtual 360°</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contenido adicional */}
      <RenderImg2 />
      <ImgDetails2 />
      <Cta />
      <Footer1 />
    </>
  );
}
