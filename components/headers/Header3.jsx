"use client";
import { openMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header3() {
  return (
    <div className="header-area absolute-header">
      <div id="header-sticky">
        <div className="navigation">
          <div className="container">
            <div className="header-inner-box">
              <div className="logo">
                <Link className="navbar-brand" href={`/`}>
                  <Image
                    alt=""
                    src="/assets/img/logos img/mundo_150_150_logos-corp_mexico.png"
                    width={64}
                    height={64}
                  />
                </Link>
              </div>
              <div className="main-menu d-none d-lg-block">
                <ul>
                  <Nav />
                </ul>
              </div>
              <div className="header-right">
                <div className="social-area d-none d-md-block">
                  <a href="">
                    <i className="lab la-facebook-f" />
                  </a>
                  <a href="">
                    <i className="lab la-instagram" />
                  </a>
                  <a href="">
                    <i className="lab la-dribbble" />
                  </a>
                  <a href="">
                    <i className="lab la-whatsapp" />
                  </a>
                </div>
              </div>
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
