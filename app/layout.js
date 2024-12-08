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
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("header-sticky");
      if (scrollPosition < 400) {
        header?.classList.remove("header-sticky");
      } else {
        header?.classList.add("header-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    <html lang="en">
      <body style={{ transition: "0s" }}>
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
