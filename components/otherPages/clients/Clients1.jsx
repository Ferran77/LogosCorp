import { clientLogos2 } from "@/data/brands";
import React from "react";
import Image from "next/image";
export default function Clients1() {
  return (
    <div className="client-section section-padding pt-0">
      <div className="container">
        <div className="row">
          {clientLogos2.map((client, index) => (
            <div key={index} className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-client-wrap">
                <Image
                  alt=""
                  src={client.src}
                  width={client.width}
                  height={client.height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
