export const menuItems = [
  {
    title: "Inicio",
    subMenu: [
      { title: "Inicio", href: "/" },
      { title: "Nosotros", href: "/about" },
      
    ],
    active: true,
  },
  {
    title: "Servicios",
    subMenu: [
      { title: "Nuestros Servicios", href: "/services" },
      { title: "Arquitectura y diseño", href: "/home-2" },
      { title: "Construción y remodelación", href: "/home-3" },
      { title: "Render 3D y animaciones", href: "/home-4" },
      { title: "Soluciones integrales y servicios especiales", href: "/home-5" },
      { title: "Valución inmobiliaria", href: "/price" },
      { title: "Dictamen de seguridad estructural", href: "/testimonial" },
      { title: "Levantamiento arquitectónico", href: "/team" },
      { title: "Levantamiento topográfico", href: "/client" },
      { title: "Preguntas frecuentes", href: "/faq" },
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
