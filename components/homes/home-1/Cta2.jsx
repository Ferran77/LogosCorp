import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="w-4/5 mx-auto bg-[#0b0d26] text-white rounded-lg p-4 shadow-lg border border-[#fa4729] relative">
      <div className="text-center bg-[#181d4e] text-white rounded-t-lg">
        <h3 className="text-2xl font-bold text-[#fa4729]">¡Aproveche nuestras promociones!</h3>
      </div>
      <div className="cta-section section-padding pt-30 pb-30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 text-center">
              <div className="cta-title">
                <div className="section-title">
                  <h2 className="text-white text-lg">
                    <ul>
                    <li>Precios <span className="text-[#fa4729] font-bold"> especiales</span></li>
                    <li>20% de <span className="text-[#fa4729] font-bold"> descuento</span></li>
                    <li>3 y 6 meses <span className="text-[#fa4729] font-bold"> sin intereses</span></li>
                    <li>Modelado y asesorías personalizadas <span className="text-[#fa4729] font-bold">  gratuitas</span></li>
                    </ul> 
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right p-4">
        <Link href={`/contact`} className="bg-[#fa4729] text-[#0b0d26] text-base px-4 py-2 hover:bg-white hover:text-[#fa4729] transition-all">
          Saber más
        </Link>
      </div>
      <div className="text-center bg-[#181d4e] text-white px-4 py-2 rounded-b-lg mt-4"></div>
    </div>
  );
}
