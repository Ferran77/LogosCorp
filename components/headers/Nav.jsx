"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menu = menuItems[3]) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subMenu) {
      menu.subMenu.forEach((el) => {
        if (el.href != "#") {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subMenu) {
          el.subMenu.map((elm) => {
            if (elm.href != "#") {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={isMenuActive(item) ? "active menuActive" : ""}
        >
          {item.href ? (
            <Link
              className={`/navlink ${isMenuActive(item) ? "linkActive" : ""}`}
              href={item.href}
            >
              {item.title}
            </Link>
          ) : (
            <a className="navlink" href="#">
              {item.title}
            </a>
          )}
          {item.subMenu && (
            <ul className="sub-menu">
              {item.subMenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.subMenu ? "nav-item" : ""}
                >
                  {subItem.subMenu ? (
                    <>
                      <a
                        className={`${
                          isMenuActive(subItem) ? "linkActive" : ""
                        }`}
                      >
                        {subItem.title} <i className="las la-arrow-right" />
                        <span className="sub-nav-toggler" />
                      </a>
                      <ul className="sub-menu-two">
                        {subItem.subMenu.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              className={`${
                                isMenuActive(subSubItem) ? "linkActive" : ""
                              }`}
                              href={subSubItem.href}
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>{" "}
                    </>
                  ) : (
                    <Link
                      className={`${isMenuActive(subItem) ? "linkActive" : ""}`}
                      href={subItem.href}
                    >
                      {subItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
