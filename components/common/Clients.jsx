import { clientLogos } from "@/data/brands";
import React from "react";
import Image from "next/image";
export default function Clients() {
  return (
    <div id="client-2" className="client-section">
      <div className="row gx-0">
        {clientLogos.map((client, index) => (
          <div key={index} className="col-xl-2 col-lg-2 col-md-3">
            <div className="single-client-item">
              <Image alt="" src={client.imgSrc} width={121} height={63} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
