import Blogs1 from "@/components/blogs/Blogs1";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import React from "react";

export const metadata = {
  title: "Nuestro Blog  || LOGOS-CORP MÉXICO",
  description: "Nuestro Blog",
};
export default function page() {
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area14 bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Nuestro blog</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs1 />
      <Footer1 />
    </>
  );
}
