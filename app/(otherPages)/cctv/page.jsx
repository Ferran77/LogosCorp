import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PersuadeCCTV from "@/components/otherPages/cctv/PersuadeCCTV";
import DescriptionCCTV from "@/components/otherPages/cctv/DescriptionCCTV";


import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Sistema de CCTV",
  description: "Sistema de CCTV",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area11 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Sistema de CCTV</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PersuadeCCTV/>
      <DescriptionCCTV/>
      {/* <Details2 projectItem={projectItem} /> */}
      {/* <Details4/> */}
      <Footer1 />
    </>
  );
}
