import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ServicesTopograph from "@/components/otherPages/topographicSurvey/ServicesTopograph";
import Cta from "@/components/otherPages/Cta";
import React from "react";
import FeaturesTopograph from "@/components/otherPages/topographicSurvey/FeaturesTopograph";

export const metadata = {
  title: "Levantamiento topográfico || LOGOS-CORP MÉXICO",
  description: "Levantamiento topográfico",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area9 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Levantamiento topográfico</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesTopograph/>
      <FeaturesTopograph/>
      <Cta/>
      <Footer1 />
    </>
  );
}
