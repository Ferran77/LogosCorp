"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { openExxtrainfo } from "@/utlis/toggleOpenExtrainfo";
import { openSearchPopup } from "@/utlis/toggleSearchPopup";
import MiniCart from "./MiniCart";

export default function Header4() {
  return (
    <div className="header-area bg-[#181d4e]">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container bg-[#181d4e] ">
            <div className="header-inner-box">
              {/* Logo */}
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
              {/* Main Menu  */}
              <div className="main-menu d-none d-lg-block">
                <ul>
                  <Nav />
                </ul>
              </div>
              <div className="header-right">
                {/* Cart Button  */}

                {/* Mini Cart */}
                <MiniCart />
                {/* Search Button  */}
                <div className="search-trigger" onClick={openSearchPopup}>
                  <i className="fal fa-search" />
                </div>
                {/* Offcanvas Menu Bar */}
                <div className="header-btn">
                  <div className="menu-trigger" onClick={openExxtrainfo}>
                    <span className="lines" />
                    <span className="lines" />
                    <span className="lines" />
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
                <div className="mobile-nav-wrap">
                  <div id="hamburger">
                    <i onClick={openMobileMenu} className="las la-bars" />
                  </div>
                  {/* mobile menu - responsive menu  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
