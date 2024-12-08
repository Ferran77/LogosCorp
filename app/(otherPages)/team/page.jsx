import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import FunFact from "@/components/otherPages/team/FunFact";
import Team from "@/components/otherPages/team/Team";
import React from "react";

export const metadata = {
  title: "Team || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Our Team</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FunFact />

      <Team />
      <Footer1 />
    </>
  );
}
