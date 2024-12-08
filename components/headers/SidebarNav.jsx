"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function SidebarNav() {
  const pathname = usePathname();
  const isMenuActive = (menu) => {
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
  useEffect(() => {
    // Select all elements with the class 'dropdown2' inside '.mobile-nav'
    const dropdowns = document.querySelectorAll(".mobile-nav .dropdown-1");

    // Define a function to handle the click
    const handleClick = (event) => {
      // Remove the 'active' class from all dropdowns
      const currentDropdown = event.currentTarget;
      dropdowns.forEach((item) => {
        if (currentDropdown != item) {
          item.classList.remove("active");
          const ulElement = item.nextElementSibling;
          if (ulElement) ulElement.style.height = "0px";
        }
      });

      // Toggle the 'active' class on the clicked dropdown

      if (!currentDropdown.classList.contains("active")) {
        // Collapse the dropdown
        currentDropdown.classList.add("active");
        const ulElement = currentDropdown.nextElementSibling;
        if (ulElement)
          ulElement.style.height = `${ulElement.scrollHeight + 30}px`;
      } else {
        currentDropdown.classList.remove("active");
        const ulElement = currentDropdown.nextElementSibling;
        if (ulElement) ulElement.style.height = "0px";

        // Expand the dropdown
      }
    };

    // Add click event listener to each dropdown
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleClick);
    });

    // Cleanup function to remove event listeners on component unmount
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleClick);
      });
      document.body.classList.remove("mobile-menu-visible");
    };
  }, []);

  return (
    <nav className="sidebar-nav">
      <ul className="metismenu" id="mobile-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link
                className={`${isMenuActive(item) ? "linkActive" : ""}`}
                href={item.href}
              >
                {item.title}
              </Link>
            ) : (
              <a
                className={`has-arrow dropdown-1 ${
                  isMenuActive(item) ? "linkActive" : ""
                }`}
                href="#"
              >
                {item.title}
              </a>
            )}
            {item.subMenu ? (
              <ul className="sub-menu">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    {subItem.isNested ? (
                      <>
                        <a href="#">
                          {subItem.title} <i className="las la-arrow-right" />
                          <span className="sub-nav-toggler" />
                        </a>
                        <ul className="sub-menu-two">
                          {subItem.subMenu.map((nestedItem, nestedIndex) => (
                            <li key={nestedIndex}>
                              <Link
                                className={`${
                                  isMenuActive(nestedItem) ? "linkActive" : ""
                                }`}
                                href={nestedItem.href}
                              >
                                {nestedItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        className={`${
                          isMenuActive(subItem) ? "linkActive" : ""
                        }`}
                        href={subItem.href}
                      >
                        {subItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
