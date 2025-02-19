import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div className="cta-section section-padding pt-60 pb-60 theme-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="cta-title">
              <div className="section-title">
                <h2 className="text-white">Aproveche nuestras promociones.</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 text-md-end">
            <div className="cta-btn">
              <Link href={`/contact`} className="white-btn">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
