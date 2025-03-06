import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ImgDetails1 from "@/components/otherPages/3dImg/ImgDetails1"
import RenderImg1 from "@/components/otherPages/3dImg/RenderImg1";
import Cta from "@/components/otherPages/Cta";

import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Imágenes 3D",
  description: "Imágenes 3D",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area-4 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Imágenes 3D</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderImg1/>
      <ImgDetails1/>
      <Cta/>
      <Footer1 />
    </>
  );
}
