import { footerLinks } from "@/data/footerLinks";
import { socialLinks } from "@/data/socials";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Footer1() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Link href={`/`} className="logo">
                  <Image
                    alt="factorix-logo"
                    src="/assets/img/logo-white.png"
                    width={198}
                    height={64}
                  />
                </Link>
                <p>
                  We provide the best techniques <br />
                  to deliver superior performance.
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5>Office</h5>
                <p>
                  Corporate Office- <br />
                  175 24th Street, OT- 35 London, UK 265
                </p>
                <div className="company-email">
                  <a href="#">info@factorix.com</a>
                </div>
                <div className="phone-number">
                  <p>+18-4675826</p>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
                <h5>Links</h5>
                <ul>
                  <li>
                    {footerLinks.map((link, index) => (
                      <Link key={index} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Get in Touch</h5>
                <ul>
                  <li>
                    <div className="social-area">
                      {socialLinks.map((link, index) => (
                        <a key={index} href={link.href}>
                          <i className={link.iconClass} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="copyright-line">
                © {new Date().getFullYear()} Factorix. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 text-md-end">
              <p className="privacy">Privacy Policy | Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
