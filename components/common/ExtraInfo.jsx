"use client";
import { closeExxtrainfo } from "@/utlis/toggleOpenExtrainfo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function ExtraInfo() {
  const pathname = usePathname();
  useEffect(() => {
    closeExxtrainfo();
  }, [pathname]);

  return (
    <>
      <>
        <div id="extra-info" className="extra-info">
          <div className="close-icon menu-close">
            <button onClick={closeExxtrainfo}>
              <i className="las la-times" />
            </button>
          </div>
          <div className="logo-side mb-30">
            <div className="logo">
              <a className="navbar-brand" href="index.html">
                <Image
                  className="height-auto"
                  alt=""
                  width={198}
                  height={64}
                  src="/assets/img/logo-white.png"
                />
              </a>
            </div>
          </div>
          <div className="side-info">
            <div className="contact-list mb-40">
              {/* <h4>About</h4> */}
              <p>
                Welcome to Factorix, a full service industrial and factory
                theme. We specialize in creating beautiful, functional design
                that reflect your unique site.
              </p>
              <Image
                alt=""
                width={1000}
                height={600}
                src="/assets/img/offcanvas-img.jpg"
                className="height-auto"
              />
              <div className="mt-30 mb-30">
                <Link href={`/contact`} className="theme-btn">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="social-area-wrap">
              <a href="#">
                <i className="lab la-facebook-f" />
              </a>
              <a href="#">
                <i className="lab la-instagram" />
              </a>
              <a href="#">
                <i className="lab la-linkedin-in" />
              </a>
              <a href="#">
                <i className="lab la-skype" />
              </a>
            </div>
          </div>
        </div>
        <div
          id="extra-info-overlay"
          className="offcanvas-overlay"
          onClick={closeExxtrainfo}
        />
      </>
    </>
  );
}
