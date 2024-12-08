import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="banner-section section-padding pt-0">
      <div className="container-fluid">
        <div className="banner-img-wrap">
          <Image
            alt=""
            src="/assets/img/banner/banner-big.jpg"
            width={1920}
            height={647}
          />
          <div className="banner-absolute-img">
            <Image
              alt=""
              src="/assets/img/banner/banner-small.jpg"
              width={297}
              height={325}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
