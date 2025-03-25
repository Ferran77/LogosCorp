import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Products from "@/components/products/Products";
import React from "react";

export const metadata = {
  title: "Tienda de servicios || LOGOS-CORP MÉXICO",
  description: "Tienda - LOGOS-CORP MÉXICO",
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
                <h1>Tienda de servicios</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
      <Footer1 />
    </>
  );
}
