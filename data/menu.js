export const menuItems = [
  {
    title: "Inicio",
    subMenu: [
      { title: "Home", href: "/" },
      { title: "Arquitectura y Diseño", href: "/home-2" },
      { title: "Contrucción", href: "/home-3" },
      { title: "Modelado 3D y Reder", href: "/home-4" },
      { title: "Proyectos especiales", href: "/home-5" },
    ],
    active: true,
  },
  {
    title: "Páginas",
    subMenu: [
      { title: "Nosotros", href: "/about" },
      { title: "Servicios", href: "/services" },
      { title: "Mi proyecto", href: "/price" },
      { title: "Nuestro equipo", href: "/testimonial" },
      { title: "Clientes", href: "/client" },
      { title: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Mi Proyecto",
    subMenu: [
      { title: "Avances", href: "/project-standard" },
      {
        title: "Fases del proyecto",
        subMenu: [
          { title: "Anteproyecto", href: "/project-details-right-sidebar/1" },
          { title: "Proyecto Arquitectónico", href: "/project-details-left-sidebar/1" },
          { title: "Proyecto Estructural", href: "/project-details-gallery/1" },
        ],
        isNested: true,
      },
      { title: "Metro Fullwidth", href: "/project-fullwidth" },
      { title: "Grid", href: "/project-grid" },
      { title: "List", href: "/project-list" },
      { title: "Masonry", href: "/project-masonry" },
      { title: "Slider", href: "/project-slider" },
     
    ],
  },
  {
    title: "Blog",
    subMenu: [
      { title: "Últimas noticias ", href: "/blog-grid" },
      { title: "Blog Standard", href: "/blog-standard" },
      { title: "Blog Details", href: "/blog-details/1" },
    ],
  },
  {
    title: "Tienda",
    subMenu: [
      { title: "Cupón Promocional", href: "/product" },
      { title: "Product Details", href: "/product-details/1" },
      { title: "Cart", href: "/cart" },
      { title: "Checkout", href: "/checkout" },
      { title: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Contacto",
    href: "/contact",
  },
];
