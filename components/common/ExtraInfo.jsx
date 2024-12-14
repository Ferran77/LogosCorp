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
              En LOGOS-CORP MÉXICO, Valoramos profundamente su inversión y esfuerzo en la construcción o remodelación de su propiedad. Por ello, invertimos en la capacitación continua de nuestro equipo en diversas especialidades, asegurando que cada servicio que ofrecemos esté a la altura de su confianza y expectativas.

¡Con nosotros, su confianza está garantizada!
              </p>
              <Image
                alt=""
                width={1000}
                height={600}
                src="/assets/img/offcanvas-img.jpg"
                className="height-auto"
              />
              <div className="mt-30 mb-30">
                <Link href={`/`} className="theme-btn">
                  Contacto
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
                <i className="lab la-youtube" />
              </a>
              {/* <a href="#">
                <i className="lab la-skype" />
              </a> */}
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
