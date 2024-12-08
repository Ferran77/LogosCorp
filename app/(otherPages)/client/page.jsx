import Faq from "@/components/common/Faq";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Client2 from "@/components/otherPages/clients/Client2";
import Clients1 from "@/components/otherPages/clients/Clients1";
import Cta from "@/components/otherPages/Cta";
import Testimonials from "@/components/otherPages/Testimonials";
import React from "react";

export const metadata = {
  title: "Client || Factorix - Industrial & Factory React Nextjs Template",
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
                <h1>Our Clients</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Clients1 />
      <Testimonials />
      <Client2 />
      <Cta />
      <Footer1 />
    </>
  );
}
