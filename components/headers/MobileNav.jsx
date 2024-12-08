"use client";
import React, { useEffect } from "react";
import SidebarNav from "./SidebarNav";
import Link from "next/link";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <>
      <div className="mobile-nav">
        <button onClick={closeMobileMenu} type="button" className="close-nav">
          <i className="las la-times-circle" />
        </button>
        <SidebarNav />
        <div className="action-bar">
          <a href="mailto:info@factorix.com">
            <i className="las la-envelope" />
            info@factorix.com
          </a>
          <a href="tel:123-456-7890">
            <i className="fal fa-phone" />
            123-456-7890
          </a>
          <Link href={`/contact`} className="theme-btn">
            Contact Us
          </Link>
        </div>
      </div>
      <div onClick={closeMobileMenu} className="mobile-menu-overlay"></div>
    </>
  );
}
