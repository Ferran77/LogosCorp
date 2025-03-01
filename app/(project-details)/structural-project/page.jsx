import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Details3 from "@/components/project-details/Details3";
import Details7 from "@/components/project-details/Details7";
import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title: "Proyecto estructural",
  description: "Proyecto estructural",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area-1 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Proyecto estructural</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details3 projectItem={projectItem} />
      <Details7 />
      <Footer1 />
    </>
  );
}
