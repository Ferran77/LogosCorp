import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ServicesSurvey from "@/components/otherPages/architecturalSurvey/ServicesSurvey";
import Pricing from "@/components/otherPages/Valuation";
import Cta from "@/components/otherPages/Cta";
import Cta2 from "@/components/otherPages/Cta2";
import React from "react";
import FeaturesSurvey from "@/components/otherPages/architecturalSurvey/FeaturesSurvey";

export const metadata = {
  title: "Levantamiento arquitectónico || LOGOS-CORP MÉXICO",
  description: "Levantamiento arquitectónico",
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
                <h1>Levantamiento arquitectónico</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesSurvey/>
      <FeaturesSurvey/>
      {/* <Cta2/> */}
      <Cta/>
      <Footer1 />
    </>
  );
}
