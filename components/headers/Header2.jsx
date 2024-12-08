"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header2() {
  return (
    <div className="header-area">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container">
            <div className="header-inner-box">
              <div className="main-menu d-none d-xl-block">
                <ul>
                  <Nav />
                </ul>
              </div>
              <div className="logo">
                <Link className="navbar-brand" href={`/`}>
                  <Image
                    alt=""
                    src="/assets/img/logo.png"
                    width={198}
                    height={64}
                  />
                </Link>
              </div>
              <div className="header-right">
                <div className="contact-number d-none d-md-block">
                  <h4>1 800 458 56 97</h4>
                </div>
                <div className="header-btn">
                  <Link href={`/contact`} className="theme-btn">
                    Let's Talk
                  </Link>
                </div>
              </div>
              <div className="mobile-nav-bar d-block col-sm-1 col-6 d-xl-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i onClick={openMobileMenu} className="las la-bars" />
                  </div>
                  {/* mobile menu - responsive menu  */}
                </div>
                {/* <div class="overlay"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
