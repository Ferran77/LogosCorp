import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Services from "@/components/otherPages/Services";
import Pricing from "@/components/otherPages/Valuation";
import Cta from "@/components/otherPages/Cta";
import Cta2 from "@/components/otherPages/Cta2";
import React from "react";
import Features from "@/components/otherPages/Features";

export const metadata = {
  title: "Valuación inmobiliaria || LOGOS-CORP MÉXICO",
  description: "Valuación inmobiliaria",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area8 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Valuación inmobiliaria</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
      <Features/>
      {/* <Cta2/> */}
      <Cta/>
      <Footer1 />
    </>
  );
}
