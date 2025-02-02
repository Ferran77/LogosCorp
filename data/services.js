import { MdOutlineDesignServices } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { LuScreenShare } from "react-icons/lu";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaDraftingCompass } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { MdElectricMeter } from "react-icons/md";
import { BiSolidCctv } from "react-icons/bi";
import { TbCrane } from "react-icons/tb";

export const services = [
  {
    icon: FaDraftingCompass,
    title: "Anteproyectos",
    description:
      "Sus sueños, expectativas, necesidades y dudas se aclaran durante esta etapa de la mano de especialistas calificados quienes le acompañarán en todo momento presentándole soluciones innovadoras y prácticas para materializar su visión de proyecto.",
      link: "/project-details-right-sidebar/1",
  },
  {
    icon: FaBuildingCircleCheck,
    title: "Proyectos arquitectónicos",
    description:
      "¿Sabía que cada proyecto arquitectónico exitoso comienza con una planeación rigurosa y detallada? El Proyecto Arquitectónico es la base sólida sobre la que se construye cualquier edificación profesional.",
      link: "/project-details-right-sidebar/2",
  },
  {
    icon: TbCrane,
    title: "Proyectos estructurales",
    description:
      "Con una Memoria de Cálculo Estructural meticulosa, garantizamos que su inmueble resista tanto las condiciones diarias como los eventos inesperados; brindándole tranquilidad y protección.",
      link: "/project-details-right-sidebar/3",
  },
  {
    icon: MdElectricMeter,
    title: "Instalaciones básicas",
    description:
      "¿Sabía usted que el correcto cálculo y distribución deriva en un ahorro directo en su economía a largo plazo, así como en su seguridad y funcionalidad?",
      link: "/project-details-left-sidebar/1",
      
  },
  {
    icon: BiSolidCctv,
    title: "Instalaciones especiales",
    description:
      "Confíe en nosotros para implementar soluciones avanzadas en instalaciones especiales que transforman sus espacios, combinando tecnología, seguridad y eficiencia para satisfacer sus necesidades con calidad y experiencia.",
      link: "/project-details-left-sidebar/1",
     
  },
];

export const services2 = [
  {
    id: 1,
    imgSrc: "/assets/img/services/1.jpg",
    number: "01.",
    title: "Steel Processing",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    imgSrc: "/assets/img/services/2.jpg",
    number: "02.",
    title: "Welding Work",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    imgSrc: "/assets/img/services/3.jpg",
    number: "03.",
    title: "Construction",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    imgSrc: "/assets/img/services/4.jpg",
    number: "04.",
    title: "Industrial Solutions",
    description: "Lorem ipsum dolor sit amet.",
  },
];

export const services3 = [
  {
    icon: MdOutlineDesignServices,
    title: "Arquitectura y diseño",
    delay: ".2s",
  },
  {
    icon: MdConstruction,
    title: "Costrucción y remodelación",
    delay: ".4s",
  },
  {
    icon: LuScreenShare,
    title: "Render y modelados 3D",
    delay: ".6s",
  },
  {
    icon: FaHelmetSafety,
    title: "Servicios especiales",
    delay: ".8s",

    extraClass: "b-none", // optional additional class
  },
];

export const services4 = [
  { title: "Cutting", icon: "flaticon-robotic-arm", delay: ".2s" },
  { title: "Welding", icon: "flaticon-gears", delay: ".4s" },
  { title: "Turning", icon: "flaticon-hard-hat", delay: ".6s" },
  { title: "Milling", icon: "flaticon-repair-tools", delay: ".8s" },
];

export const services5 = [
  {
    icon: MdOutlineDesignServices,
    title: "Arquitectura y diseño",

    wowDelay: ".2s",
  },
  {
    icon: MdConstruction,
    title: "Construcción y remodelación",

    wowDelay: ".4s",
  },
  {
    icon: LuScreenShare,
    title: "Render y modelados 3D",

    wowDelay: ".6s",
  },
  {
    icon: FaHelmetSafety,
    title: "Servicios especiales",

    wowDelay: ".8s",
    additionalClass: "b-none",
  },
];

export const services6 = [
  {
    title: "Alternative Energy",
    icon: "flaticon-repair-tools",
    wowDelay: ".2s",
  },
  {
    title: "Oil Refinery Plants",
    icon: "flaticon-oil-pump",
    wowDelay: ".4s",
  },
  {
    title: "Maintenance Repair",
    icon: "flaticon-maintenance",
    wowDelay: ".6s",
  },
  {
    title: "Construction Works",
    icon: "flaticon-crane",
    wowDelay: ".8s",
    additionalClass: "b-none", // Optional additional class
  },
];

export const services7 = [
  {
    id: 5,
    imgSrc: "/assets/img/services/1.jpg",
    number: "01.",
    title: "Conceptualización Visual",
    description: "El Anteproyecto es la base sobre la cual se edifica cualquier gran proyecto. Consiste en bocetos detallados y plantas arquitectónicas esquemáticas que representan una vista preliminar de cómo se distribuirán sus espacios. ¿Le gustaría tener una idea clara y visual antes de comenzar con la construcción? Estos bocetos son el primer paso para darle forma a su visión, permitiéndole ajustar detalles antes de avanzar a la siguiente fase.",
  },
  {
    id: 6,
    imgSrc: "/assets/img/services/2.jpg",
    number: "02.",
    title: "Renderizado de Imágenes y Videos",
    description: "¡Esto no es solo papel y lápiz! El Anteproyecto también incluye renderizados de imágenes y videos que le permitirán vivir sus futuros espacios. Imagine poder recorrer virtualmente su proyecto, ver la luz natural entrar por las ventanas, o cómo se distribuirán los muebles en cada habitación. ¿No sería increíble visualizarlo todo antes de que la primera piedra se coloque?",
  },
  {
    id: 7,
    imgSrc: "/assets/img/services/3.jpg",
    number: "03.",
    title: "Toma de Decisiones Informada",
    description: "Uno de los beneficios más importantes del Anteproyecto es que le brinda los elementos suficientes para tomar decisiones acertadas. ¿Está seguro de que el diseño actual es lo que desea? Con esta herramienta, puede realizar cambios y ajustes antes de entrar en la fase de construcción, evitando costosos errores más adelante. ¡Es su oportunidad para asegurarse de que cada detalle es perfecto!",
  },
  {
    id: 8,
    imgSrc: "/assets/img/services/4.jpg",
    number: "04.",
    title: "Evaluación de Costos y Viabilidad",
    description: "El Anteproyecto también le permitirá evaluar de manera preliminar los costos y la viabilidad del proyecto. ¿Quiere saber si su idea se ajusta a su presupuesto? Con un anteproyecto detallado, podrá hacerlo sin comprometer la calidad de su visión.",
  },
  {
    id: 9,
    imgSrc: "/assets/img/services/4.jpg",
    number: "05.",
    title: "Personalización a su Medida",
    description: "Un Anteproyecto no es un proceso genérico; se personaliza para satisfacer sus necesidades específicas. Desde la distribución de espacios hasta los materiales y acabados, cada aspecto del proyecto se adapta a sus gustos y requisitos. ¿Por qué conformarse con menos cuando puede tener un proyecto hecho a su medida?",
  },
  {
    id: 10,
    imgSrc: "/assets/img/services/4.jpg",
    number: "06.",
    title: "Seguridad en el Resultado Final",
    description: "Finalmente, el Anteproyecto le proporciona la seguridad de que el resultado final será exactamente lo que usted imaginó. ¿Qué podría ser mejor que la tranquilidad de saber que su inversión está en manos expertas y que su visión será respetada en cada paso del camino? Este documento es esencial para que usted, como cliente, esté completamente seguro y satisfecho antes de avanzar.",
  },
];

export const services8 = [
  {
    id: 1,
    imgSrc: "/assets/img/services/1.jpg",
    number: "01.",
    title: "Importancia del proyecto arquitectónico",
    description: "Un proyecto arquitectónico bien ejecutado es fundamental para asegurar que cada aspecto de la construcción esté en orden. Desde la plantas y alzados que ilustran cómo se dispondrán los espacios, hasta la planeación del mobiliario fijo y temporal, todo debe estár meticulosamente calculado. ¿Se imagina una construcción sin estos elementos? El caos sería inevitable",
  },
  {
    id: 2,
    imgSrc: "/assets/img/services/2.jpg",
    number: "02.",
    title: "Seguridad normativa",
    description: "La seguridad es una prioridad en cualquier construcción. Por ello, cada Proyecto arquitectónico debe cumplir con las normativas vigentes. Esto no solo protege a quienes utilizarán el edificio, sino que también previene problemas legales a futuro. ¡No puedes dejar esto al azar!",
  },
  {
    id: 3,
    imgSrc: "/assets/img/services/3.jpg",
    number: "03.",
    title: "Funcionalidad y Estética",
    description: "Un buen diseño no solo se ve bien; también funciona bien. El Proyecto Arquitectónico asegura que los espacios no solo sean estéticamente agradables, sino que también sean funcionales para los usuarios. Cada disposición de mobiliario y distribución de espacio está pensada para maximizar la eficiencia y la comodidad.",
  },
  {
    id: 4,
    imgSrc: "/assets/img/services/4.jpg",
    number: "04.",
    title: "Flexibilidad y Personalización",
    description: "Cada cliente tiene necesidades y deseos únicos. Por eso, un Proyecto Arquitectónico debe ser lo suficientemente flexible para adaptarse a estos requerimientos, sin comprometer la seguridad o la funcionalidad. ¿Qué tan importante es para ti que tu espacio refleje tu visión? ¡Nosotros lo hacemos posible!",
  },
  {
    id: 5,
    imgSrc: "/assets/img/services/4.jpg",
    number: "05.",
    title: "Evitar Gastos Innecesarios",
    description: "Un Proyecto Arquitectónico bien planificado también es una herramienta invaluable para evitar gastos innecesarios. Al prever problemas y solucionarlos en la fase de diseño, se evitan costosas correcciones durante la construcción. ¡Imagina ahorrar tiempo y dinero con una planificación adecuada!",
  },
];