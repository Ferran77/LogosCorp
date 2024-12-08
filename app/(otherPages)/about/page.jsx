import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/about/About";
import Client from "@/components/otherPages/about/Client";
import Facts from "@/components/otherPages/about/Facts";
import Process from "@/components/otherPages/about/Process";
import Services from "@/components/otherPages/about/Services";
import Team from "@/components/otherPages/about/Team";
import Testimonials from "@/components/otherPages/Testimonials";
import VideoSection from "@/components/otherPages/about/VideoSection";
import Work from "@/components/otherPages/about/Work";
import React from "react";

export const metadata = {
  title: "About || Factorix - Industrial & Factory React Nextjs Template",
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
                <h1>About Us</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Client />
      <VideoSection />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Facts />
      <Team />
      <Footer1 />
    </>
  );
}
