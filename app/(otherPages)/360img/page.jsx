import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ImgDetails from "@/components/otherPages/360img/ImgDetails"
import RenderImg from "@/components/otherPages/360img/RenderImg";
import Cta from "@/components/otherPages/Cta";
import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Imágenes 360°",
  description: "Imágenes 360°",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area-3 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Imágenes 360°</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderImg/>
      <ImgDetails/>
      <Cta/>
      <Footer1 />
    </>
  );
}
