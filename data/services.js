import { MdOutlineDesignServices, MdConstruction, MdElectricMeter, MdOutline3dRotation, MdOutlineContactPhone } from "react-icons/md";
import { LuScreenShare } from "react-icons/lu";
import { FaHelmetSafety, FaBuildingCircleCheck,  FaBuildingShield, FaMoneyCheckDollar, FaHouseLaptop, FaHouseCircleCheck  } from "react-icons/fa6";
import { FaDraftingCompass, FaMap  } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";
import { TbCrane } from "react-icons/tb";
import { Gi3dGlasses } from "react-icons/gi";
import { TbRotate360, TbView360Number } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { PiSecurityCameraBold } from "react-icons/pi";
import { GiElevator } from "react-icons/gi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { BsBuildingFillLock } from "react-icons/bs";
import { PiWarningDiamondBold } from "react-icons/pi";

export const services = [
  {
    icon: FaDraftingCompass,
    title: "Anteproyectos",
    description:
      "Sus sueños, expectativas, necesidades y dudas se aclaran durante esta etapa de la mano de especialistas calificados quienes le acompañarán en todo momento presentándole soluciones innovadoras y prácticas para materializar su visión de proyecto.",
    link: "/preliminary-draft",
  },
  {
    icon: FaBuildingCircleCheck,
    title: "Proyectos arquitectónicos",
    description:
      "¿Sabía que cada proyecto arquitectónico exitoso comienza con una planeación rigurosa y detallada? El Proyecto Arquitectónico es la base sólida sobre la que se construye cualquier edificación profesional.",
    link: "/architectural-project",
  },
  {
    icon: TbCrane,
    title: "Proyectos estructurales",
    description:
      "Con una Memoria de Cálculo Estructural meticulosa, garantizamos que su inmueble resista tanto las condiciones diarias como los eventos inesperados; brindándole tranquilidad y protección.",
    link: "/structural-project", 
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
    title: "Arquitectura y diseño",
    description: "Anteproyecto, proyecto estructural y arquitectónico",
  },
  {
    id: 2,
    imgSrc: "/assets/img/services/2.jpg",
    number: "02.",
    title: "Construcción y remodelación",
    description: "Obras nuevas, remodelaciones, mantenimiento a empresas, supervisión de obra",
  },
  {
    id: 3,
    imgSrc: "/assets/img/services/3.jpg",
    number: "03.",
    title: "Renders 3D",
    description: "Recorrido virtual 3D, tour virtual 360°, imágenes 3D, imágenes 360°",
  },
  {
    id: 4,
    imgSrc: "/assets/img/services/4.jpg",
    number: "04.",
    title: "Servicios especiales",
    description: "Hogar inteligente, sistema de voz y datos, sistema de CCTV",
  },
];

export const services3 = [
  {
    icon: MdOutlineDesignServices,
    title: "Arquitectura y diseño",
    link: "/home-2",
    delay: ".2s",
  },
  {
    icon: MdConstruction,
    title: "Costrucción y remodelación",
    link: "/home-3",
    delay: ".4s",
  },
  {
    icon: LuScreenShare,
    title: "Render y modelados 3D",
    link: "/home-4",
    delay: ".6s",
  },
  {
    icon: FaHelmetSafety,
    title: "Servicios especiales",
    link: "/home-5",
    delay: ".8s",

    extraClass: "b-none", // optional additional class
  },
];

export const services4 = [
  {
    title: "Recorrido virtual 3D en video",
    subtitile:
      "Explore su proyecto antes de su construcción, identificando oportunidades de mejora desde el principio",
    icon: <Gi3dGlasses />,
    delay: ".2s",
  },
  {
    title: "Tour virtual 360°",
    subtitile:
      "Es una experiencia interactiva que le brinda control total sobre la exploración de su proyecto.",
    icon: <TbRotate360 />,
    delay: ".4s",
  },
  {
    title: "Imágenes 3D",
    subtitile:
      "Son representaciones digitales detalladas y realistas de sus proyectos arquitectónicos o de diseño interior.",
    icon: <MdOutline3dRotation />,
    delay: ".6s",
  },
  {
    title: "Imágenes 360°",
    subtitile:
      "Capturan todos los ángulos de un espacio, permitiendo una visualización completa y detallada en cualquier dirección.",
    icon: <TbView360Number />,
    delay: ".8s",
  },
];

export const services5 = [
  {
    icon: MdOutlineDesignServices,
    title: "Arquitectura y diseño",
    href: "/home-2",

    wowDelay: ".2s",
  },
  {
    icon: MdConstruction,
    title: "Construcción y remodelación",
    href: "/home-3",

    wowDelay: ".4s",
  },
  {
    icon: LuScreenShare,
    title: "Render y modelados 3D",
    href: "/home-4",

    wowDelay: ".6s",
  },
  {
    icon: FaHelmetSafety,
    title: "Servicios especiales",
    href: "/home-5",

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
    imgSrc: "/assets/img/services/preliminary1.jpg",
    number: "01.",
    title: "Conceptualización Visual",
    description:
      "El Anteproyecto es la base sobre la cual se edifica cualquier gran proyecto. Consiste en bocetos detallados y plantas arquitectónicas esquemáticas que representan una vista preliminar de cómo se distribuirán sus espacios. ¿Le gustaría tener una idea clara y visual antes de comenzar con la construcción? Estos bocetos son el primer paso para darle forma a su visión, permitiéndole ajustar detalles antes de avanzar a la siguiente fase.",
  },
  {
    id: 6,
    imgSrc: "/assets/img/services/preliminary2.jpg",
    number: "02.",
    title: "Renderizado de Imágenes y Videos",
    description:
      "¡Esto no es solo papel y lápiz! El Anteproyecto también incluye renderizados de imágenes y videos que le permitirán vivir sus futuros espacios. Imagine poder recorrer virtualmente su proyecto, ver la luz natural entrar por las ventanas, o cómo se distribuirán los muebles en cada habitación. ¿No sería increíble visualizarlo todo antes de que la primera piedra se coloque?",
  },
  {
    id: 7,
    imgSrc: "/assets/img/services/preliminary3.jpg",
    number: "03.",
    title: "Toma de Decisiones Informada",
    description:
      "Uno de los beneficios más importantes del Anteproyecto es que le brinda los elementos suficientes para tomar decisiones acertadas. ¿Está seguro de que el diseño actual es lo que desea? Con esta herramienta, puede realizar cambios y ajustes antes de entrar en la fase de construcción, evitando costosos errores más adelante. ¡Es su oportunidad para asegurarse de que cada detalle es perfecto!",
  },
  {
    id: 8,
    imgSrc: "/assets/img/services/preliminary4.jpg",
    number: "04.",
    title: "Evaluación de Costos y Viabilidad",
    description:
      "El Anteproyecto también le permitirá evaluar de manera preliminar los costos y la viabilidad del proyecto. ¿Quiere saber si su idea se ajusta a su presupuesto? Con un anteproyecto detallado, podrá hacerlo sin comprometer la calidad de su visión.",
  },
  {
    id: 9,
    imgSrc: "/assets/img/services/preliminary5.jpg",
    number: "05.",
    title: "Personalización a su Medida",
    description:
      "Un Anteproyecto no es un proceso genérico; se personaliza para satisfacer sus necesidades específicas. Desde la distribución de espacios hasta los materiales y acabados, cada aspecto del proyecto se adapta a sus gustos y requisitos. ¿Por qué conformarse con menos cuando puede tener un proyecto hecho a su medida?",
  },
  {
    id: 10,
    imgSrc: "/assets/img/services/preliminary6.jpg",
    number: "06.",
    title: "Seguridad en el Resultado Final",
    description:
      "Finalmente, el Anteproyecto le proporciona la seguridad de que el resultado final será exactamente lo que usted imaginó. ¿Qué podría ser mejor que la tranquilidad de saber que su inversión está en manos expertas y que su visión será respetada en cada paso del camino? Este documento es esencial para que usted, como cliente, esté completamente seguro y satisfecho antes de avanzar.",
  },
];

export const services8 = [
  {
    id: 1,
    imgSrc: "/assets/img/services/1.jpg",
    number: "01.",
    title: "Importancia del proyecto arquitectónico",
    description:
      "Un proyecto arquitectónico bien ejecutado es fundamental para asegurar que cada aspecto de la construcción esté en orden. Desde la plantas y alzados que ilustran cómo se dispondrán los espacios, hasta la planeación del mobiliario fijo y temporal, todo debe estár meticulosamente calculado. ¿Se imagina una construcción sin estos elementos? El caos sería inevitable",
  },
  {
    id: 2,
    imgSrc: "/assets/img/services/2.jpg",
    number: "02.",
    title: "Seguridad normativa",
    description:
      "La seguridad es una prioridad en cualquier construcción. Por ello, cada Proyecto arquitectónico debe cumplir con las normativas vigentes. Esto no solo protege a quienes utilizarán el edificio, sino que también previene problemas legales a futuro. ¡No puedes dejar esto al azar!",
  },
  {
    id: 3,
    imgSrc: "/assets/img/services/3.jpg",
    number: "03.",
    title: "Funcionalidad y Estética",
    description:
      "Un buen diseño no solo se ve bien; también funciona bien. El Proyecto Arquitectónico asegura que los espacios no solo sean estéticamente agradables, sino que también sean funcionales para los usuarios. Cada disposición de mobiliario y distribución de espacio está pensada para maximizar la eficiencia y la comodidad.",
  },
  {
    id: 4,
    imgSrc: "/assets/img/services/4.jpg",
    number: "04.",
    title: "Flexibilidad y Personalización",
    description:
      "Cada cliente tiene necesidades y deseos únicos. Por eso, un Proyecto Arquitectónico debe ser lo suficientemente flexible para adaptarse a estos requerimientos, sin comprometer la seguridad o la funcionalidad. ¿Qué tan importante es para ti que tu espacio refleje tu visión? ¡Nosotros lo hacemos posible!",
  },
  {
    id: 5,
    imgSrc: "/assets/img/services/4.jpg",
    number: "05.",
    title: "Evitar Gastos Innecesarios",
    description:
      "Un Proyecto Arquitectónico bien planificado también es una herramienta invaluable para evitar gastos innecesarios. Al prever problemas y solucionarlos en la fase de diseño, se evitan costosas correcciones durante la construcción. ¡Imagina ahorrar tiempo y dinero con una planificación adecuada!",
  },
];

export const services9 = [
  {
    title: "Levantamientos topográficos",
    description:
      "Le ofrecemos una representación precisa de su terreno que le facilite la planificación y ejecución de sus proyectos",
    icon: FaMap,
  },
  {
    title: "Dictamen de seguridad estructural",
    description:
      "Un Dictamen de Seguridad Estructural exhaustivo previene riesgos y asegura la protección de quienes ocupan su edificio",
    icon: FaBuildingShield,
  },
  {
    title: "Valuación inmobiliaria",
    description:
      "¿Se ha preguntado cuánto vale su propiedad? No se preocupe, nosotros le hacemos un estudio detallado y completo",
    icon: FaMoneyCheckDollar,
  },
  {
    title: "Asesorías gratuitas",
    description:
      "Tenemos una solución integral para usted. Agende una reunión virtual y platiquemos de sus proyectos",
    icon: RiCustomerServiceFill,
  },
];
export const services10 = [
  {
    title: "Sistema domótico",
    description:
      "Transforme su espacio en un lugar inteligente. ¿Qué tal un hogar que se ajusta a su rutina y preferencias automáticamente?",
    icon: FaHouseLaptop,
  },
  {
    title: "Sistema de CCTV",
    description:
      "¿Desea estar al tanto de lo que sucede tanto dentro como fuera de su inmueble? Contar con un sistema de CCTV no solo es una opción, sino una necesidad.",
    icon: PiSecurityCameraBold,
  },
  {
    title: "Sistema de voz y datos",
    description:
      "¡Transforme su infraestructura con un sistema de voz y datos de vanguardia! ¡CONÉCTESE! en todas las áreas de su hogar u oficina sin perder la estética de los espacios!",
    icon: MdOutlineContactPhone,
  },
  {
    title: "Sistema de elevadores",
    description:
      "¿Está considerando instalar un elevador en su inmueble? Nuestro equipo cuenta con Ingenieros Mecatrónicos calificados para desarrollar eficientemente este tipo de proyectos.",
    icon: GiElevator,
  },
];

export const services11 = [
  {
    title: "Avalúo comercial",
    description:
      "Con nuestro Avalúo Comercial, usted obtendrá el valor real de su inmueble, clave para garantizar transacciones justas al comprar o vender.",
    icon: LiaMoneyCheckAltSolid,
  },
  {
    title: "Avalúo comercial referenciado",
    description:
      "Este tipo de Avalúo le ofrece una visión clara del valor de un inmueble en una fecha específica pasada, facilitando la regularización de propiedades cuya compra se haya completado anteriormente.",
    icon: FaHouseCircleCheck,
  },
];

export const services12 = [
  {
    id: 5,
    imgSrc: "/assets/img/services/structural1.jpg",
    number: "01.",
    title: "Planos estructurales",
    description:
      "Al concluir, le entregaremos los Planos Estructurales, que son fundamentales para la correcta ejecución de su proyecto. Estos planos contienen los detalles constructivos y especificaciones técnicas de todos los elementos estructurales, como la cimentación, entrepisos, cubierta (azotea), y más. Además, incluyen armados, especificaciones de concreto, y dimensiones precisas de zapatas, contratrabes, columnas, castillos, dalas de desplante, cadenas de cerramiento, losas, escaleras y muros. El objetivo de los Planos Estructurales es garantizar que cada componente de la estructura sea diseñado y construido de acuerdo con las normativas de seguridad y eficiencia.Su finalidad es proporcionar una guía detallada que asegure la durabilidad, resistencia y estabilidad del inmueble, protegiendo así su inversión y la seguridad de quienes lo habitarán. Con estos planos, usted cuenta con una herramienta esencial para la supervisión y ejecución de la obra, respaldada por nuestro compromiso con la calidad y precisión.",
  },
  {
    id: 6,
    imgSrc: "/assets/img/services/structural2.jpg",
    number: "02.",
    title: "Planos de cimentación",
    description:
      "El Plano de Cimentación es un componente esencial en la planificación de cualquier proyecto de construcción, ya que define las bases sobre las que se asentará la estructura. Este plano incluye detalles constructivos fundamentales, como las dimensiones y características de los materiales que se emplearán en la cimentación del inmueble. Se especifican elementos clave como zapatas corridas o aisladas de concreto o mampostería, muros de contención de concreto armado o mampostería, losas de cimentación de concreto armado, y cajones de cimentación. Además, el plano incorpora el detalle constructivo de la cisterna, asegurando que todos los componentes subterráneos estén perfectamente integrados y diseñados para soportar las cargas de la estructura y resistir las fuerzas externas. El objetivo de este plano es garantizar que la cimentación del edificio sea lo suficientemente robusta y estable para soportar el peso de la estructura y las condiciones del terreno. Su finalidad es proporcionar una guía detallada y precisa para la construcción de la base del inmueble, asegurando la durabilidad, estabilidad y seguridad del proyecto desde su origen. Con este plano, usted asegura que su construcción esté respaldada por una base sólida y confiable, protegiendo tanto su inversión como la seguridad de los ocupantes.",
  },
  {
    id: 7,
    imgSrc: "/assets/img/services/structural3.jpg",
    number: "03.",
    title: "Planos de entrepisos",
    description:
      "Los Planos de Entrepisos son esenciales para la correcta ejecución de cualquier proyecto de construcción, ya que detallan las dimensiones y características de los materiales que se utilizarán en los elementos a construir. Estos planos incluyen especificaciones para castillos de concreto armado, columnas de diversos materiales como concreto armado, acero o madera, así como cadenas de cerramiento y dalas de desplante. Además, abarcan los muros de mampostería, tabiques y blocks, tanto de concreto armado como prefabricados, ya sean de carga o divisorios. También se incluyen detalles sobre trabes, vigas, losas macizas, encasetonadas, y prefabricadas, así como los detalles específicos de escaleras y otros elementos especiales. El objetivo de los Planos de Entrepiso es garantizar que cada componente estructural cumpla con las normativas de seguridad y funcionalidad, asegurando así la integridad y estabilidad del edificio. Su finalidad es proporcionar una guía precisa para la construcción de los elementos intermedios del inmueble, optimizando la eficiencia y resistencia de la estructura. Con estos planos, usted obtiene una base sólida que asegura la calidad y durabilidad de su proyecto, protegiendo su inversión y la seguridad de todos los usuarios del edificio.",
  },
  {
    id: 8,
    imgSrc: "/assets/img/services/structural4.jpg",
    number: "04.",
    title: "Memoria de cálculo estructural",
    description:
      "El análisis técnico detallado y los cálculos precisos necesarios para definir los elementos constructivos de su proyecto. Con un enfoque basado en normativas vigentes y criterios técnicos rigurosos, esta memoria asegura que cada especificación de armados, dimensiones, y características técnicas constructivas esté en total cumplimiento con los estándares de seguridad y calidad. El objetivo principal de la Memoria Estructural es proporcionar una justificación técnica y normativa que respalde el diseño y la ejecución de la estructura, garantizando su estabilidad y durabilidad ante diversas condiciones de carga y factores ambientales. La finalidad es doble: Primero, asegurar que cada elemento estructural, desde cimentaciones hasta cubiertas, esté diseñado para soportar las cargas previstas de manera segura. Segundo, optimizar los recursos materiales y económicos, evitando sobrecostos y garantizando la eficiencia en la construcción. Con la Memoria Estructural, usted tiene la certeza de que su proyecto no solo cumple con las exigencias normativas, sino que también está preparado para ofrecer la máxima seguridad y desempeño a lo largo de su vida útil.",
  },
];

export const services13 = [
  {
    title: "Qué es",
    description:
      "El dictamen de seguridad estructural es un informe técnico crucial que certifica la estabilidad y resistencia de su edificación, realizado por Peritos y Directores Responsables de Obra avalados por la “Secretaría de Desarrollo Urbano” y el “Consejo de la Judicatura.”",
    icon: BsBuildingFillLock,
  },
  {
    title: "Su importancia",
    description:
      "Un dictamen oportuno previene problemas potenciales, asegura el cumplimiento normativo y proporciona una base sólida para la operación segura y eficiente de su construcción. Con nuestro dictamen de seguridad estructural, garantizamos la integridad de sus espacios.",
    icon: PiWarningDiamondBold,
  },
];
