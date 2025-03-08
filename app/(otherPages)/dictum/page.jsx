import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import ServicesDictum from "@/components/otherPages/dictum/ServicesDictum";
import Pricing from "@/components/otherPages/Valuation";
import Cta from "@/components/otherPages/Cta";
import Cta2 from "@/components/otherPages/Cta2";
import React from "react";
import FeaturesDictum from "@/components/otherPages/dictum/FeaturesDictum";

export const metadata = {
  title: "Dictamen de seguridad estructural || LOGOS-CORP MÉXICO",
  description: "Dictamen de seguridad estructural",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area7 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Dictamen de seguridad estructural</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesDictum/>
      <FeaturesDictum/>
      {/* <Cta2/> */}
      <Cta/>
      <Footer1 />
    </>
  );
}
