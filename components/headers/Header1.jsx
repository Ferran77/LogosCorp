"use client";
import React from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import { openExxtrainfo } from "@/utlis/toggleOpenExtrainfo";
import { openSearchPopup } from "@/utlis/toggleSearchPopup";
import MiniCart from "./MiniCart";

export default function Header1() {
  return (
    <div className="header-area absolute-header">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container">
            <div className="header-inner-box">
              {/* Logo */}
              <div className="logo">
                <Link className="navbar-brand" href={`/`}>
                  <Image
                    alt="Logo"
                    src="/assets/img/logos img/logo_nuevo.png"
                    width={140}
                    height={140}
                    className="pt-4 mr-15"
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
                <div className="header-btn" onClick={openExxtrainfo}>
                  <div className="menu-trigger">
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
                <div className="overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
