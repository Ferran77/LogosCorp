"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function ShopCart() {
  const { cartProducts, setCartProducts, totalPrice } = useContextElement();

  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="cart-area section-padding">
      <div className="table-content table-responsive">
        <div className="container">
          {cartProducts.length ? (
            <table>
              <thead>
                <tr>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Qty</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((elm, i) => (
                  <tr key={i}>
                    <td className="product-name">
                      <div className="prod_thum">
                        <Link href={`/product-details/${elm.id}`}>
                          <Image
                            alt=""
                            src={elm.imgSrc}
                            width={800}
                            height={800}
                          />
                        </Link>
                      </div>
                      <div className="prod_title">
                        <Link href={`/product-details/${elm.id}`}>
                          {elm.title}
                        </Link>
                      </div>
                    </td>
                    <td className="product-price">${elm.price.toFixed(2)}</td>
                    <td className="product-quantity">
                      <span className="quantity">{elm.quantity}pcs</span>
                    </td>
                    <td className="product-price">
                      <span className="amount">
                        ${(elm.price * elm.quantity).toFixed(2)}
                      </span>
                    </td>
                    <td
                      className="product-remove"
                      onClick={() => removeItem(elm.id)}
                    >
                      <a href="#">
                        <i className="las la-times" aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <div className="row ">
                <div className="col-12 ">Shop Cart is Expty</div>
                <div className="cart-action-btn">
                  <Link
                    href={`/product`}
                    className="bordered-btn browse-products-btn"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </>
          )}
          <div className="row pt-50">
            <div className="col-lg-8">
              <div className="buttons-cart">
                <input type="text" placeholder="Coupon Code" />
                <Link className="dark-btn" href={`/cart`}>
                  Apply Coupon
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mini-shop-cart mt-30">
                <div className="calculation-area">
                  <p>
                    Sub Total<span>${totalPrice.toFixed(2)}</span>
                  </p>
                  {totalPrice ? (
                    <p>
                      Tax<span>$5.00</span>
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="total_amount">
                    <b>Total</b>
                    <span>${totalPrice ? (totalPrice + 5).toFixed(2) : 0}</span>
                  </p>
                </div>
              </div>
              <div className="proceed-to-checkout">
                <Link className="theme-btn" href={`/checkout`}>
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
