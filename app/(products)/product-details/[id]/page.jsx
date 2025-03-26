import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import DetailsTab from "@/components/products/DetailsTab";
import ProductDetails from "@/components/products/ProductDetails";
import RelatedProducts from "@/components/products/RelatedProducts";
import { products } from "@/data/products";
import React from "react";

export const metadata = {
  title:
    "Servicios || LOGOS-CORP MÉXICO",
  description: "Servicios LOGOS-CORP MÉXICO",
};
export default function page({ params }) {
  const product =
    products.filter((elm) => elm.id == params.id)[0] || products[0];
  return (
    <>
      <Header1 />
      <div className="breadcrumb-area bread-bg">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="breadcrumb-title">
                <h1>Detalles del Servicio</h1>
              </div>
              <div className="breadcrumb-icon">
                <i className="las la-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductDetails product={product} />
      <DetailsTab />
      <RelatedProducts />
      <Footer1 />
    </>
  );
}
