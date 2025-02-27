import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Details2 from "@/components/project-details/Details2";
import Details4 from "@/components/project-details/Details4";

import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Anteproyecto",
  description: "Anteproyecto",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Anteproyecto</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details2 projectItem={projectItem} />
      <Details4/>
      <Footer1 />
    </>
  );
}
