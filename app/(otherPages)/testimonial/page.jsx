import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Features from "@/components/otherPages/testimonials/Features";
import Mission from "@/components/otherPages/testimonials/Mission";
import Testimonials1 from "@/components/otherPages/testimonials/Testimonials1";
import Testimonials2 from "@/components/otherPages/testimonials/Testimonials2";
import React from "react";

export const metadata = {
  title:
    "Testimonials || Factorix - Industrial & Factory React Nextjs Template",
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
                <h1>Testimonials</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials1 />
      <Mission />
      <Features />
      <Testimonials2 />

      <Footer1 />
    </>
  );
}
