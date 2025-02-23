import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-3/About";
import Clients from "@/components/otherPages/services/Clients";
import Cta from "@/components/otherPages/Cta";
import Services from "@/components/otherPages/services/Services";
import Services2 from "@/components/otherPages/services/Services2";
import VideoSection from "@/components/otherPages/services/VideoSection";
import Cta2 from "@/components/otherPages/Cta2";
import React from "react";

export const metadata = {
  title: "Nuestros servicios || LOGOS-CORP MÉXICO",
  description: "Servicios LOGOS-CORP MÉXICO",
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
                <h1>Nuestros Servicios</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Clients />
      <Cta2/>
      {/* <VideoSection /> */}
      <Services2 />
      {/* <About /> */}
      <Cta />

      <Footer1 />
    </>
  );
}
