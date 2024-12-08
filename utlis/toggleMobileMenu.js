export const openMobileMenu = () => {
  document.querySelector(".mobile-nav")?.classList.add("show");
  document.querySelector(".mobile-menu-overlay")?.classList.add("active");
  console.log("first");
};
export const closeMobileMenu = () => {
  document.querySelector(".mobile-nav")?.classList.remove("show");
  document.querySelector(".mobile-menu-overlay")?.classList.remove("active");
};
