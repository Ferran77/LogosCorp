import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Details1 from "@/components/project-details/Details1";
import Details5 from "@/components/project-details/Details5";
import Details6 from "@/components/project-details/Details6";

import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Proyecto arquitectónico",
  description: "Proyecto arquitectónico",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header2 />
      <div className="breadcrumb-area-2 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Proyecto arquitectónico</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Details1 projectItem={projectItem} />
      <Details6/>
      <Details5/>
      <Footer1 />
    </>
  );
}
