export const menuItems = [
  {
    title: "Inicio", href: "/",
    subMenu: [
      { title: "Home", href: "/" },
      
      // { title: "Contrucción", href: "/home-3" },
      
      // { title: "Proyectos especiales", href: "/home-5" },
    ],
    active: true,
  },
  {
    title: "Nosotros", href: "/about"
  },
  {
    title: "Servicios", href: "/services",
    subMenu: [
      { title: "Arquitectura y Diseño", href: "/home-2",
        subMenu: [
          { title: "Anteproyecto", href: "/project-details-right-sidebar/1" },
          { title: "Proyecto Arquitectónico", href: "/project-details-left-sidebar/1" },
          { title: "Proyecto Estructural", href: "/project-details-gallery/1" },
          { title: "Instalaciones", href: "/project-details-gallery/2",
            subMenu: [
              { title: "Instalaciones básicas", href: "/project-details-right-sidebar/1" },
              { title: "Sistema de CCTV", href: "/project-details-left-sidebar/1" },
              { title: "Sistema de riego automatizado", href: "/project-details-gallery/1" },
              { title: "Sistema domótico", href: "/project-details-left-sidebar/1" },
              { title: "Sistema de voz y datos", href: "/project-details-gallery/1" },
              { title: "Sistema de elevadores", href: "/project-details-gallery/1" },
            ],
           },
        ],
        isNested: true,
      },
      { title: "Construcción y remodelación", href: "/price",

        subMenu: [
          { title: "Obra nueva", href: "/project-details-right-sidebar/1" },
          { title: "Remodelación de interiores", href: "/project-details-left-sidebar/1" },
          { title: "Remodelación de exteriores", href: "/project-details-gallery/1" },
          { title: "Supervisión de obra", href: "/project-details-left-sidebar/1" },
          { title: "Mantenimiento a empresas", href: "/project-details-gallery/1" },
        ],
      },
      { title: "Modelado 3D y Reder", href: "/home-4",
        subMenu: [
          { title: "Imágenes 360°", href: "/project-details-right-sidebar/1"},
          { title: "Imágenes 3D", href: "/project-details-left-sidebar/1" },
          { title: "Tour virtual 360°", href: "/project-details-gallery/1" },
          { title: "Recorrido virtual 3D en video", href: "/project-details-left-sidebar/1" },
        ],
       },
      { title: "Valuación inmoviliaria", href: "/client" },
      { title: "Dictamen de seguridad estructural", href: "/faq" },
      { title: "Levantamiento arquitectónico", href: "/project-fullwidth" },
      { title: "Levantamiento topográfico", href: "/project-grid" },
    ],
  },
  {
    title: "Mi Proyecto",
    subMenu: [
      { title: "Avances", href: "/project-standard" },
      
      // { title: "List", href: "/project-list" },
      // { title: "Masonry", href: "/project-masonry" },
      // { title: "Slider", href: "/project-slider" },
     
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
      // { title: "Product Details", href: "/product-details/1" },
      // { title: "Cart", href: "/cart" },
      // { title: "Checkout", href: "/checkout" },
      // { title: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Contacto",
    href: "/contact",
  },
];
