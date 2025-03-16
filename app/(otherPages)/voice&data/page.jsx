import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import PersuadeVoiceData from "@/components/otherPages/voice&data/PersuadeVoiceData";
import DescriptionVoiceData from "@/components/otherPages/voice&data/DescriptionVoiceData";


import { allProjects } from "@/data/projects";
import React from "react";

export const metadata = {
  title:
    "Sistema de voz y datos",
  description: "Sistema de voz y datos",
};
export default function page({ params }) {
  const projectItem =
    allProjects.filter((elm) => elm.id == params.id)[0] || allProjects[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area12 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Sistema de voz y datos</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PersuadeVoiceData/>
      <DescriptionVoiceData/>
      {/* <Details2 projectItem={projectItem} /> */}
      {/* <Details4/> */}
      <Footer1 />
    </>
  );
}
