"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/virtual";
import { useEffect, useState } from "react";
import { Thumbs } from "swiper/modules";
import Drift from "drift-zoom";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
export default function ProductDetails({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { cartProducts, setCartProducts } = useContextElement();
  const [quantity, setQuantity] = useState(1);

  const isIncludeCard = () => {
    const item = cartProducts.filter((elm) => elm.id == product.id)[0];
    return item;
  };
  const setQuantityCartItem = (id, quantity) => {
    if (isIncludeCard()) {
      if (quantity >= 1) {
        const item = cartProducts.filter((elm) => elm.id == id)[0];
        const items = [...cartProducts];
        const itemIndex = items.indexOf(item);
        item.quantity = quantity;
        items[itemIndex] = item;
        setCartProducts(items);
      }
    } else {
      setQuantity(quantity - 1 > 0 ? quantity : 1);
    }
  };
  const addToCart = () => {
    if (!isIncludeCard()) {
      const item = product;
      item.quantity = quantity > 0 ? quantity : 1;
      setCartProducts((pre) => [...pre, item]);
    }
  };
  const products = [
    { id: 1, imgSrc: product.imgSrc, alt: "product image" },
    { id: 2, imgSrc: "/assets/img/shop/product-2.jpg", alt: "product image" },
    { id: 3, imgSrc: "/assets/img/shop/product-3.jpg", alt: "product image" },
    { id: 4, imgSrc: "/assets/img/shop/product-4.jpg", alt: "product image" },
    { id: 5, imgSrc: "/assets/img/shop/product-5.jpg", alt: "product image" },
    { id: 6, imgSrc: "/assets/img/shop/product-6.jpg", alt: "product image" },
  ];

  const thumbnails = [
    { id: 1, imgSrc: product.imgSrc, alt: "product image" },
    { id: 2, imgSrc: "/assets/img/shop/thumbnail-2.jpg", alt: "product image" },
    { id: 3, imgSrc: "/assets/img/shop/thumbnail-3.jpg", alt: "product image" },
    { id: 4, imgSrc: "/assets/img/shop/thumbnail-4.jpg", alt: "product image" },
    { id: 5, imgSrc: "/assets/img/shop/thumbnail-5.jpg", alt: "product image" },
    { id: 6, imgSrc: "/assets/img/shop/thumbnail-6.jpg", alt: "product image" },
  ];

  useEffect(() => {
    // Function to initialize Drift
    const imageZoom = () => {
      const driftAll = document.querySelectorAll(".tf-image-zoom-inner");
      const pane = document.querySelector(".tf-product-zoom-inner");

      driftAll.forEach((el) => {
        new Drift(el, {
          paneContainer: pane,
          zoomFactor: 1.8,
          inlinePane: false,
          containInline: false,
        });
      });
    };

    // Call the function
    imageZoom();

    // Optionally, clean up if necessary
    return () => {
      // Clean up logic if required
    };
  }, []);
  return (
    <div className="products-details section-padding">
      <div className="container">
        <div className="row gx-5">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="detail-gallery">
              <span className="zoom-icon">
                <i className="fi-rs-search" />
              </span>
              {/* Product Image Slider */}
              <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className=" tf-product-zoom-inner overflow-hidden"
                style={{ maxWidth: "100%" }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Image
                      alt={product.alt}
                      src={product.imgSrc}
                      data-zoom={product.imgSrc}
                      width={800}
                      height={800}
                      className="height-auto tf-image-zoom-inner"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Thumbnail Slider */}
              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                slidesPerView={4}
                className="slider-nav-thumbnails"
              >
                {thumbnails.map((thumbnail) => (
                  <SwiperSlide key={thumbnail.id}>
                    <Image
                      alt={thumbnail.alt}
                      src={thumbnail.imgSrc}
                      width={599}
                      height={600}
                      className="height-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="product-details-wrap mt-20">
              <h1>{product.title}</h1>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <div className="product-review">
              <ul>
                <li>
                  <i className="las la-star" />
                </li>
                <li>
                  <i className="las la-star" />
                </li>
                <li>
                  <i className="las la-star" />
                </li>
                <li>
                  <i className="las la-star" />
                </li>
                <li>
                  <i className="las la-star-half" />
                </li>
              </ul>
              <span>(1) Reviews</span>
            </div>
            <div className="product-summary">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit
                amet consectetur adipiscing elit sed do eiusmod tempor. ipsum,
                dolor sit amet consectetur adipisicing elit. Molestiae, tempore?
              </p>
            </div>
            <div className="product-details-cart">
              <div className="qty-plus-minus">
                <div
                  className="dec gi-qtybtn"
                  onClick={() =>
                    setQuantityCartItem(
                      product.id,
                      isIncludeCard()?.quantity - 1 || quantity - 1
                    )
                  }
                >
                  -
                </div>
                <input
                  className="qty-input"
                  type="number"
                  name="gi-qtybtn"
                  min={1}
                  onChange={(e) =>
                    setQuantityCartItem(product.id, e.target.value / 1)
                  }
                  value={isIncludeCard() ? isIncludeCard().quantity : quantity}
                />
                <div
                  className="inc gi-qtybtn"
                  onClick={() =>
                    setQuantityCartItem(
                      product.id,
                      isIncludeCard()?.quantity + 1 || quantity + 1
                    )
                  }
                >
                  +
                </div>
              </div>

              <div className="add_to_cart-btn" onClick={addToCart}>
                <a className="theme-btn">
                  <i className="las la-shopping-bag" />
                  <span>
                    {isIncludeCard() ? "Already Added" : "Add To Cart"}
                  </span>
                </a>
              </div>
            </div>
            <div className="product-wishlist">
              <a href="#">
                <i className="las la-heart" />
                Add to Wishlist
              </a>
            </div>
            <div className="social-icons">
              <span className="social-label">Share:</span>
              <a
                href="#"
                className="social-icon"
                title="Facebook"
                target="_blank"
              >
                <i className="lab la-facebook-f" />
              </a>
              <a href="#" className="social-icon" title="Skype" target="_blank">
                <i className="lab la-skype" />
              </a>
              <a
                href="#"
                className="social-icon"
                title="Instagram"
                target="_blank"
              >
                <i className="lab la-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                title="Pinterest"
                target="_blank"
              >
                <i className="lab la-pinterest" />
              </a>
            </div>
            <div className="product-meta">
              <h6>
                Category: <span>Engine Parts, Electric System</span>
              </h6>
              <h6>
                Tag: <span>Car Repair | Maintenance</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
