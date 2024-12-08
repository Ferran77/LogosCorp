import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Pricing from "@/components/otherPages/Pricing";
import React from "react";

export const metadata = {
  title: "Pricing || Factorix - Industrial & Factory React Nextjs Template",
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
                <h1>Pricing</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
      <Footer1 />
    </>
  );
}
