export const menuItems = [
  {
    title: "Home",
    subMenu: [
      { title: "Main", href: "/" },
      { title: "Oil Industry", href: "/home-2" },
      { title: "Construction", href: "/home-3" },
      { title: "Metal Working", href: "/home-4" },
      { title: "Textile", href: "/home-5" },
    ],
    active: true,
  },
  {
    title: "Pages",
    subMenu: [
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/services" },
      { title: "Pricing", href: "/price" },
      { title: "Testimonials", href: "/testimonial" },
      { title: "Our Team", href: "/team" },
      { title: "Our Clients", href: "/client" },
      { title: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Projects",
    subMenu: [
      { title: "Standard", href: "/project-standard" },
      { title: "Metro Fullwidth", href: "/project-fullwidth" },
      { title: "Grid", href: "/project-grid" },
      { title: "List", href: "/project-list" },
      { title: "Masonry", href: "/project-masonry" },
      { title: "Slider", href: "/project-slider" },
      {
        title: "Single Project",
        subMenu: [
          { title: "Left Sidebar", href: "/project-details-left-sidebar/1" },
          { title: "Right Sidebar", href: "/project-details-right-sidebar/2" },
          { title: "Gallery", href: "/project-details-gallery/3" },
        ],
        isNested: true,
      },
    ],
  },
  {
    title: "Blog",
    subMenu: [
      { title: "Blog Grid", href: "/blog-grid" },
      { title: "Blog Standard", href: "/blog-standard" },
      { title: "Blog Details", href: "/blog-details/1" },
    ],
  },
  {
    title: "Shop",
    subMenu: [
      { title: "Shop List", href: "/product" },
      { title: "Product Details", href: "/product-details/1" },
      { title: "Cart", href: "/cart" },
      { title: "Checkout", href: "/checkout" },
      { title: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
