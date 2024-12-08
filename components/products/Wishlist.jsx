import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Wishlist() {
  return (
    <div className="wishlist-area section-padding">
      <div className="table-content table-responsive">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-status">Stock Status</th>
                <th className="product-action">Action</th>
                <th className="product-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-name">
                  <div className="prod_thum">
                    <a href="#">
                      <Image
                        alt=""
                        src="/assets/img/shop/wishlist-img-1.jpg"
                        width={800}
                        height={800}
                      />
                    </a>
                  </div>
                  <div className="prod_title">
                    <Link href={`/`}>Air Filter</Link>
                  </div>
                </td>
                <td className="product-price">
                  <b>$19.25</b>
                </td>
                <td className="product-status">
                  <span className="status text-success">In Stock</span>
                </td>
                <td className="product-price">
                  <div>
                    <a href="#" className="theme-btn">
                      Buy Now{" "}
                    </a>
                  </div>
                </td>
                <td className="product-remove">
                  <a href="#">
                    <i className="las la-times" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row pt-50">
            <div className="col-xl-6 col-lg-6">
              <div className="buttons-cart">
                <input type="text" placeholder="Coupon Code" />
                <Link className="dark-btn" href={`/cart`}>
                  Apply Coupon
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-md-end">
              <div className="buttons-cart mt-20">
                <Link className="theme-btn" href={`/cart`}>
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
