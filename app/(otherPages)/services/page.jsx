import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-3/About";
import Clients from "@/components/otherPages/services/Clients";
import Cta from "@/components/otherPages/Cta";
import Services from "@/components/otherPages/services/Services";
import Services2 from "@/components/otherPages/services/Services2";
import VideoSection from "@/components/otherPages/services/VideoSection";
import React from "react";

export const metadata = {
  title: "Services || Factorix - Industrial & Factory React Nextjs Template",
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
                <h1>Our Services</h1>
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
      <VideoSection />
      <Services2 />
      <About />
      <Cta />

      <Footer1 />
    </>
  );
}
