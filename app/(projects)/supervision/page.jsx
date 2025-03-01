import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Projects8 from "@/components/projects/Projects8";
import React from "react";

export const metadata = {
  title:
    "Supervisión de obra || LOGOS-CORP MÉXICO",
  description: "Supervisión LOGOS-CORP MÉXICO",
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
                <h1 className="text-dark">Supervisión de obra</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects8 />
      <Footer1 />
    </>
  );
}
