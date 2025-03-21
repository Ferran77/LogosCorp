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
      {
        title: "Arquitectura y diseño",
        subMenu: [
          { title: "Arquitectura y diseño", href: "/home-2" },
          { title: "Anteproyecto", href: "/preliminary-draft" },
          { title: "Proyecto arquitectónico", href: "/architectural-project" },
          { title: "Proyecto estructural", href: "/structural-project" },
        ],
        isNested: true,
      },
      {
        title: "Construción y remodelación",
        subMenu: [
          { title: "Construcción y remodelación", href: "/home-3" },
          { title: "Obra nueva", href: "/new-construction" },
          {
            title: "Remodelación de interiores y exteriores",
            href: "/remodeling",
          },
          { title: "Supervisión de obra", href: "/supervision" },
          { title: "Mantenimiento a empresas", href: "/maintenance" },
        ],
        isNested: true,
      },
      {
        title: "Render 3D y animaciones",
        subMenu: [
          { title: "Render 3D y animaciones", href: "/home-4" },
          { title: "Imágenes 360°", href: "/360img" },
          { title: "Imágenes 3D", href: "/3dImg" },
          { title: "Tour virtual 360°", href: "/virtualTour" },
        ],
        isNested: true,
      },
      {
        title: "Catálogo de instalaciones básicas", href: "/basics"
      },
      {
        title: "Catálogo de servicios especiales", href: "/home-5"
      },
      {
        title: "Soluciones integrales",
        subMenu: [
          { title: "Valuación inmobiliaria", href: "/valuation" },
          { title: "Dictamen de seguridad estructural", href: "/dictum" },
          {
            title: "Levantamiento arquitectónico",
            href: "/architecturalSurvey",
          },
          { title: "Levantamiento topográfico", href: "/topographicSurvey" },
        ],
        isNested: true,
      },
      {
        title: "Servicios especiales",
        subMenu: [
          { title: "Sistema domótico -Hogar inteligente-", href: "/automationSystem" },
          { title: "Sistema de CCTV", href: "/cctv" },
          { title: "Sistema de voz y datos", href: "/voice&data" },
          { title: "Sistema de elevadores", href: "/elevator" },
        ],
        isNested: true,
      },
      // { title: "Preguntas frecuentes", href: "/home-3" },
    ],
  },
  {
    title: "Mi proyecto",
    subMenu: [
      { title: "Avances", href: "/contact" },
      // { title: "Metro Fullwidth", href: "/project-fullwidth" },
      // { title: "Grid", href: "/project-grid" },
      // { title: "List", href: "/project-list" },
      // { title: "Masonry", href: "/project-masonry" },
      // { title: "Slider", href: "/project-slider" },
      // {
      //   title: "Single Project",
      //   subMenu: [
      //     { title: "Left Sidebar", href: "/project-details-left-sidebar/1" },
      //     { title: "Right Sidebar", href: "/project-details-right-sidebar/2" },
      //     { title: "Gallery", href: "/project-details-gallery/3" },
      //   ],
      //   isNested: true,
      // },
    ],
  },
  {
    title: "Blog",
    subMenu: [
      { title: "Nuestro blog", href: "/blog-grid" },
      // { title: "Blog Standard", href: "/blog-standard" },
      // { title: "Blog Details", href: "/blog-details/1" },
    ],
  },
  {
    title: "Tienda",
    subMenu: [
      { title: "Cupón promocional", href: "/about" },
      // { title: "Product Details", href: "/product-details/1" },
      // { title: "Cart", href: "/cart" },
      // { title: "Checkout", href: "/checkout" },
      // { title: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Reunión virtual",
    subMenu: [
      { title: "Agendar reunión virtual", href: "/contact" },
      { title: "Ingresar a reunión virtual", href: "/about" },
      // { title: "Blog Details", href: "/blog-details/1" },
    ],
  },
  {
    title: "Contacto",
    href: "/contact",
  },
];
