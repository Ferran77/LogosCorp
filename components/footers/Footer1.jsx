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
                <Link href={`/`} className="logo ">
                  <Image
                    alt="logos-corp-logo"
                    src="/assets/img/logo-white.png"
                    width={198}
                    height={64}
                    className="pl-5"
                  />
                </Link>
                <p className="pt-4 font-bold">
                  Arquitectura nacida del corazón
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5>México</h5>
                <p>
                  Contancto: <br />
                  Teléfono: 55 5801 8167
                </p>
                <h5>Oaxaca</h5>
                <p>
                  Contacto: <br />
                  Teléfono: 951 0454 506
                </p>
                <div className="company-email">
                  <a href="/contact">info@logoscorp.net</a>
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
                <h5>Síganos en nuestras redes sociales</h5>
                <ul>
                  <li>
                    <div className="social-area">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          className="inline-block mr-4 text-2xl text-black hover:text-blue-600"
                        >
                          {/* Renderiza el ícono */}
                          {link.iconComponent ? (
                            <span className="text-white mr-4">
                              {link.iconComponent}
                            </span> // React Icon
                          ) : (
                            <i className={link.iconClass} /> // Line Awesome Icon
                          )}
                          {/* Renderiza el label */}
                          <span className="ml-2 text-white">{link.label}</span>
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
                © {new Date().getFullYear()} Ferrán Dev. Tods los derechos
                reservados.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 text-md-end">
              <p className="privacy">
                Política de privacidad | Terminos &amp; Condiciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
