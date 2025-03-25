"use client";

import { products } from "@/data/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import Pagination from "../common/Pagination";

const sortingOptions = [
  "Predeterminado",
  "Alfabéticamente, A-Z",
  "Alfabéticamente, Z-A",
  "Precio, bajo a alto",
  "Precio, alto a bajo",
];

const discountedProducts = [
  "Imágenes 360°",
  "Proyecto Arquitectónico Básico",
  "Proyecto Arquitectónico Elite",
  "Proyecto de Instalación de Riego Automatizado (planos)",
  "Proyecto de Instalación Eléctrica (planos y memoria de cálculo)",
  "Proyecto de Instalación Hidro-Sanitaria (planos y memoria de cálculo)",
  "Proyecto de Instalación Voz y Datos (planos)",
  "Recorrido Virtual en Video",
  "Tour virtual 360°",
];

export default function Products() {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const [filtered, setFiltered] = useState(products);
  const [currentSortingOption, setCurrentSortingOption] =
    useState("Predeterminado");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let sortedProducts = [...products];

    if (selectedCategory) {
      sortedProducts = sortedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    sortedProducts.sort((a, b) => {
      switch (currentSortingOption) {
        case "Alfabéticamente, A-Z":
          return a.title.localeCompare(b.title);
        case "Alfabéticamente, Z-A":
          return b.title.localeCompare(a.title);
        case "Precio, bajo a alto":
          return a.price - b.price;
        case "Precio, alto a bajo":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFiltered(sortedProducts);
    setCurrentPage(1);
  }, [currentSortingOption, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filtered]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="product-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-12">
            <div className="sidebar-wrapper">
              <div className="single-sidebar">
                <div className="categories-box">
                  <div className="title">
                    <h3>Categorías:</h3>
                  </div>
                  <ul className="categories clearfix">
                    <li>
                      <a
                        href="#"
                        className={!selectedCategory ? "active" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(null);
                        }}
                      >
                        Mostrar todo
                      </a>
                    </li>
                    {Array.from(new Set(products.map((p) => p.category))).map(
                      (category, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className={
                              selectedCategory === category ? "active" : ""
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedCategory(category);
                            }}
                          >
                            {category}
                          </a>
                        </li>
                      )
                    )}
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
                        <p>
                          Mostrando {currentItems.length} de {filtered.length}{" "}
                          resultados
                        </p>
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
                  {currentItems.map((product, index) => (
                    <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                      <div className="all_products_single text-center">
                        <div
                          className="all_product_item_image position-relative"
                          style={{
                            width: "300px",
                            height: "300px",
                            overflow: "hidden",
                          }}
                        >
                          {discountedProducts.includes(product.title) && (
                            <div
                              className="sale-badge position-absolute bg-danger text-white p-2"
                              style={{
                                top: "10px",
                                left: "10px",
                                borderRadius: "5px",
                              }}
                            >
                              ¡Oferta!
                            </div>
                          )}
                          <div className="w-[300px] h-[300px] overflow-hidden flex items-center justify-center bg-gray-100">
                            <Image
                              alt={product.title}
                              src={product.imgSrc}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <p>{product.category}</p>
                        <h4>
                          <Link href={`/product-details/${product.id}`}>
                            {product.title}
                          </Link>
                        </h4>
                        {discountedProducts.includes(product.title) ? (
                          <p>
                            <span className="text-gray line-through mr-2">
                              ${(product.price * 1.2).toFixed(2)}
                            </span>
                            <span>${product.price.toFixed(2)}</span>
                          </p>
                        ) : (
                          <p>${product.price.toFixed(2)}</p>
                        )}
                        <p className="text-black mb-7 -mt-2">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
