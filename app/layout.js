"use client";
import MobileNav from "@/components/headers/MobileNav";
import "@/public/assets/scss/main.scss";

import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect } from "react";
import ExtraInfo from "@/components/common/ExtraInfo";
import SearchPopup from "@/components/common/SearchPopup";
import Context from "@/context/Context";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BacktoTop";
import Mouse from "@/components/common/Mouse";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.esm");
    }
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    const initWOW = async () => {
      const { default: WOW } = await import("../utlis/wow");
      const wow = new WOW({
        mobile: false,
        live: false,
      });
      wow.init();
    };

    initWOW();
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        {/* Fuente Roboto */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <body style={{ transition: "0s", fontFamily: "Roboto, sans-serif" }}>
        <Context>{children}</Context>
        <MobileNav />
        <ExtraInfo />
        <SearchPopup />
        <BackToTop />
        <Mouse />
      </body>
    </html>
  );
}
