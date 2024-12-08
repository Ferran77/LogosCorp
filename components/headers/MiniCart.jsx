"use client";
import { useContextElement } from "@/context/Context";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
const toggleCartOpen = () => {
  document
    .querySelector(".mini-cart-content")
    .classList.toggle("mini-cart-content-toggle");
};

const cartClose = () => {
  document
    .querySelector(".mini-cart-content")
    .classList.remove("mini-cart-content-toggle");
};
const opencart = () => {
  document
    .querySelector(".mini-cart-content")
    .classList.add("mini-cart-content-toggle");
};
export default function MiniCart() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
    setTimeout(() => {
      opencart();
    });
  };

  const shopIconRef = useRef(null);
  const miniCartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element does not have the specified classes
      if (
        shopIconRef.current &&
        miniCartRef.current &&
        !shopIconRef.current.contains(event.target) &&
        !miniCartRef.current.contains(event.target) &&
        document
          .querySelector(".mini-cart-content")
          .classList.contains("mini-cart-content-toggle")
      ) {
        cartClose(); // Close the mini-cart
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <a
        className="shop-icon cart-toggle-btn"
        ref={shopIconRef}
        onClick={toggleCartOpen}
      >
        <i className="fal fa-shopping-bag" />
        <div className="icon-notify">{cartProducts.length}</div>
      </a>
      <div className="mini-cart" ref={miniCartRef}>
        <div className="mini-cart-content">
          {cartProducts.length ? (
            <>
              <div className="mini-cart-items">
                {cartProducts.map((elm, i) => (
                  <div key={i} className="mini-cart-item">
                    <div className="mini-cart-item-image">
                      <Link href={`/product-details/${elm.id}`}>
                        <Image
                          alt="mini-cart-img"
                          src={elm.imgSrc}
                          width={600}
                          height={713}
                        />
                      </Link>
                    </div>
                    <div className="mini-cart-item-des">
                      <Link href={`/product-details`}>{elm.title}</Link>
                      <span className="mini-cart-item-price">
                        <b>
                          {elm.quantity} x ${elm.price.toFixed(2)}
                        </b>
                      </span>
                      <span
                        className="cart-cross-btn"
                        onClick={() => removeItem(elm.id)}
                      >
                        x
                      </span>
                    </div>
                  </div>
                ))}
              </div>{" "}
              <div className="mini-cart-action">
                <span className="mini-checkout-price">
                  <b>Total</b>${totalPrice.toFixed(2)}
                </span>
                <div className="cart-action-btn">
                  <Link href={`/cart`} className="theme-btn">
                    View Cart
                  </Link>
                  <Link href={`/checkout`} className="bordered-btn">
                    Checkout
                  </Link>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              <div className="row p-3">
                <div className="col-12 p-3">Shop Cart is Expty</div>
                <div className="cart-action-btn">
                  <Link
                    href={`/product`}
                    onClick={cartClose}
                    className="bordered-btn browse-products-btn"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
