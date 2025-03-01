import Footer1 from "@/components/footers/Footer1";
import Header4 from "@/components/headers/Header4";
import Persuade1 from "@/components/projects/Persuade1";
import Projects7 from "@/components/projects/Projects7";
import React from "react";

export const metadata = {
  title:
    "Obra nueva || LOGOS-CORP MÉXICO",
  description: "Obra nueva LOGOS-CORP MÉXICO",
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
                <h1 className="text-dark">Obra Nueva</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Persuade1/>
      <Projects7 />
      <Footer1 />
    </>
  );
}
