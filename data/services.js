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
      link: "/project-details-left-sidebar/1",
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
      link: "/project-details-gallery/3",
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
    iconClass: "flaticon-factory",
    title: "Arquitectura y diseño",
    delay: ".2s",
  },
  {
    iconClass: "flaticon-oil-pump",
    title: "Costrucción y remodelación",
    delay: ".4s",
  },
  {
    iconClass: "flaticon-maintenance",
    title: "Render y modelados 3D",
    delay: ".6s",
  },
  {
    iconClass: "flaticon-crane",
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
    icon: "flaticon-factory",
    title: "Metal Manufacturing",

    wowDelay: ".2s",
  },
  {
    icon: "flaticon-oil-pump",
    title: "Oil Refinery Plants",

    wowDelay: ".4s",
  },
  {
    icon: "flaticon-maintenance",
    title: "Maintenance Repair",

    wowDelay: ".6s",
  },
  {
    icon: "flaticon-crane",
    title: "Construction Works",

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
