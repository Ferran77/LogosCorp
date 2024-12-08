import { contactInfo } from "@/data/contactInfo";
import React from "react";
import Image from "next/image";
export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper section-padding pb-90">
      <div className="container">
        <div className="row">
          {contactInfo.map((contact, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <Image alt="" src={contact.imgSrc} width={32} height={32} />
                </div>
                <p>{contact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
