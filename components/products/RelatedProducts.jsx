"use client";
import { products } from "@/data/products";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
export default function RelatedProducts() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div className="related-products section-padding">
      <div className="container">
        <div className="row">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="section-title">
              <h6>Servicios</h6>
              <h2>Relacionados</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {products.slice(4, 8).map((elm, i) => (
            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
              <div className="all_products_single text-center">
                <div className="all_product_item_image">
                  <Image alt="" src={elm.imgSrc} width={300} height={300} />
                  <div className="all_product_hover">
                    <ul className="all_products_thumb_icon">
                      <li className="icon-list">
                        <a
                          onClick={() => addProductToCart(elm.id)}
                          className="icon add-to-cart-btn"
                        >
                          <i
                            className={`las ${
                              isAddedToCartProducts(elm.id)
                                ? "la-cart-plus"
                                : "la-shopping-cart"
                            } `}
                          />
                        </a>
                      </li>
                      <li className="icon-list add-to-wishlist-btn">
                        <a href="#" className="icon add-to-wishlist-btn">
                          <i className="lar la-heart" />
                        </a>
                      </li>
                      <li className="icon-list">
                        <Link
                          href={`/product-details/${elm.id}`}
                          className="icon cart-loading product-quick-view-ajax"
                        >
                          <i className="lar la-eye" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4>
                  <Link href={`/product-details/${elm.id}`}>{elm.title}</Link>
                </h4>
                <p>${elm.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
