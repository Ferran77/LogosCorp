"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
export default function Checkout() {
  const { cartProducts, totalPrice, setCartProducts } = useContextElement();
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  return (
    <div className="checkout-page section-padding">
      <div className="container">
        <div className="row gx-5">
          <div className="col-xl-7">
            <div className="billing-details-wrap">
              <h5>Billing Details</h5>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-7">
                    <input required type="text" placeholder="First Name" />
                  </div>
                  <div className="col-lg-5">
                    <input required type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <input required type="tel" placeholder="Phone No." />
                  </div>
                  <div className="col-lg-5">
                    <input required type="email" placeholder="E-mail" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <input required type="text" placeholder="Street Address" />
                  </div>
                  <div className="col-lg-12">
                    <input required type="text" placeholder="Town/City" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <select required className="form-dropdown">
                      <option value="">Select Country</option>
                      <option value="italy">Italy</option>
                      <option value="england">England</option>
                      <option value="france">France</option>
                      <option value="germany">Germany</option>
                    </select>
                  </div>
                  <div className="col-lg-5">
                    <select required className="form-dropdown">
                      <option value="">Select State</option>
                      <option value="italy">Rome</option>
                      <option value="england">Manchester</option>
                      <option value="france">Paris</option>
                      <option value="germany">Berlin</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Order Note"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="order-wrap">
              <h6>Your Order</h6>
              <div className="mini-shop-cart">
                {cartProducts.map((elm, i) => (
                  <div key={i} className="single-cart-item d-flex">
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
                    <div className="prod_desc">
                      <Link href={`/product-details/${elm.id}`}>
                        <h5>{elm.title}</h5>
                      </Link>
                      <p className="price">
                        ${(elm.price * elm.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div
                      className="cart-cross-btn"
                      onClick={() => removeItem(elm.id)}
                    >
                      <i className="la la-times" />
                    </div>
                  </div>
                ))}
                {!cartProducts.length ? (
                  <div className="col-12 p-3">Shop Cart is Expty</div>
                ) : (
                  ""
                )}

                <div className="calculation-area">
                  <p>
                    Sub Total<span>${totalPrice.toFixed(2)}</span>
                  </p>

                  <p>
                    Tax<span>${totalPrice ? "5.00" : "0"}</span>
                  </p>
                  <p className="total_amount">
                    <b>Total</b>
                    <span>${totalPrice ? (totalPrice + 5).toFixed(2) : 0}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="payment-method-wrap">
              <h6>Select Payment Method</h6>
              <div className="payment-method">
                <input
                  type="radio"
                  id="pay1"
                  name="radio-group"
                  defaultChecked=""
                />
                <span>Cash On Delivery</span>
              </div>
              <div className="payment-method">
                <input
                  type="radio"
                  id="pay2"
                  name="radio-group"
                  defaultChecked=""
                />
                <Image
                  alt=""
                  src="/assets/img/paypal.png"
                  width={122}
                  height={30}
                />
              </div>
              <Link href={`/`} className="theme-btn">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
