import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PersuadeAutomation from "@/components/otherPages/automationSystem/PersuadeAutomation";
import DescriptionAutomation from "@/components/otherPages/automationSystem/DescriptionAutomation";


import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Hogar inteligente",
  description: "Sistema domótico",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area10 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Sistema domótico  <br /> Hogar inteligente</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PersuadeAutomation/>
      <DescriptionAutomation/>
      {/* <Details2 projectItem={projectItem} /> */}
      {/* <Details4/> */}
      <Footer1 />
    </>
  );
}
