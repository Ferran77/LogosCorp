import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Details3 from "@/components/project-details/Details3";
import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Project Details Gallery || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header4 />
      <div className="breadcrumb-area bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>{projectItem.title}</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details3 projectItem={projectItem} />
      <Footer1 />
    </>
  );
}