import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Projects4 from "@/components/projects/Projects4";
import React from "react";

export const metadata = {
  title:
    "Project List || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header4 />
      <div className="breadcrumb-area white-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1 className="text-dark">Project - List</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects4 />
      <Footer1 />
    </>
  );
}
