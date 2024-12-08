"use client";
import { products } from "@/data/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const sortingOptions = [
  "Default Sorting",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
];
import { useContextElement } from "@/context/Context";
import noUiSlider from "nouislider";
import Pagination from "../common/Pagination";
export default function Products() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [priceRange, setPriceRange] = useState([10, 40]);
  const [filtered, setfiltered] = useState(products);
  const [currentSortingOption, setCurrentSortingOption] =
    useState("Default Sorting");
  useEffect(() => {
    const element = document.getElementById("price-slider");
    if (element) {
      // Initialize the noUiSlider
      noUiSlider.create(element, {
        start: [12, 38],
        connect: true,
        range: {
          min: 10,
          max: 40,
        },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Math.round(value),
        },
      });

      // Set up the 'update' event listener
      element.noUiSlider.on("update", (values) => {
        if (values[0] != priceRange[0] || values[1] !== priceRange[1]) {
          setPriceRange(values);
        }
      });
    }

    // Cleanup on component unmount
    return () => {
      if (element) {
        element.noUiSlider.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const filterByPrice = [...products].filter(
      (elm) => elm.price >= priceRange[0] && elm.price <= priceRange[1]
    );
    const sortedProducts = [...filterByPrice].sort((a, b) => {
      switch (currentSortingOption) {
        case "Alphabetically, A-Z":
          return a.title.localeCompare(b.title);
        case "Alphabetically, Z-A":
          return b.title.localeCompare(a.title);
        case "Price, low to high":
          return a.price - b.price;
        case "Price, high to low":
          return b.price - a.price;
        default:
          return 0;
      }
    });
    setfiltered(sortedProducts);
  }, [priceRange, currentSortingOption]);

  return (
    <div className="product-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-12">
            <div className="sidebar-wrapper">
              <div className="single-sidebar">
                <div className="sidebar-search-box">
                  <form
                    className="search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input placeholder="Search" required type="text" />
                    <button type="submit">
                      <i className="las la-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="single-sidebar">
                <h6>
                  Filter by Price : ${priceRange[0]} to ${priceRange[1]}
                </h6>
                <div className="filter-price">
                  <div id="price-slider" />
                  {/* End #price-slider */}
                </div>
                {/* End .filter-price */}
              </div>
              <div className="single-sidebar">
                <div className="categories-box">
                  <div className="title">
                    <h3>Categories</h3>
                  </div>
                  <ul className="categories clearfix">
                    <li>
                      <a className="active" href="#">
                        Engine Parts
                      </a>
                    </li>
                    <li>
                      <a href="#">Suspension Parts</a>
                    </li>
                    <li>
                      <a href="#">Wheels &amp; Tyres</a>
                    </li>
                    <li>
                      <a href="#">Electrical System</a>
                    </li>
                    <li>
                      <a href="#">Exterior &amp; Interior</a>
                    </li>
                    <li>
                      <a href="#">Care &amp; Cleaning</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-sidebar">
                <div className="tag-box">
                  <div className="title">
                    <h3>Filter by Tag</h3>
                  </div>
                  <ul className="tags clearfix">
                    <li>
                      <a className="active" href="#">
                        Craft
                      </a>
                    </li>
                    <li>
                      <a href="#">Energy</a>
                    </li>
                    <li>
                      <a href="#">Engine</a>
                    </li>
                    <li>
                      <a href="#">Iron</a>
                    </li>
                    <li>
                      <a href="#">Machines</a>
                    </li>
                    <li>
                      <a href="#">Motor</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Speed</a>
                    </li>
                    <li>
                      <a href="#">Fuel</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="product-items">
              <div className="row">
                <div className="col-xl-12">
                  <div className="showing-result-shorting">
                    <div className="left">
                      <div className="showing">
                        <p>Showing {filtered.length} Results</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="shorting">
                        <select
                          onChange={(e) =>
                            setCurrentSortingOption(e.target.value)
                          }
                          className="selectpicker"
                          data-width="100%"
                        >
                          {sortingOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all_products">
                <div className="row">
                  {filtered.map((product, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                      <div className="all_products_single text-center">
                        <div className="all_product_item_image">
                          <Image
                            alt={product.title}
                            src={product.imgSrc}
                            width={800}
                            height={800}
                            className="height-auto"
                          />
                          <div className="all_product_hover">
                            <ul className="all_products_thumb_icon">
                              <li className="icon-list">
                                <a
                                  onClick={() => addProductToCart(product.id)}
                                  className="icon add-to-cart-btn"
                                >
                                  <i
                                    className={`las ${
                                      isAddedToCartProducts(product.id)
                                        ? "la-cart-plus"
                                        : "la-shopping-cart"
                                    } `}
                                  />
                                </a>
                              </li>
                              <li className="icon-list add-to-wishlist-btn">
                                <a className="icon add-to-wishlist-btn">
                                  <i className="lar la-heart" />
                                </a>
                              </li>
                              <li className="icon-list">
                                <Link
                                  href={`/product-details/${product.id}`}
                                  className="icon cart-loading product-quick-view-ajax"
                                >
                                  <i className="lar la-eye" />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <Link href={`/product-details/${product.id}`}>
                            {product.title}
                          </Link>
                        </h4>
                        <p>${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {filtered.length ? (
              <ul className="pagination">
                <Pagination />
              </ul>
            ) : (
              ""
            )}
            {!filtered.length ? (
              <div className="p-5">
                No products found . Please try another filter
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
