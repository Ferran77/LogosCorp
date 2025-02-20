import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-4/About";
import Blogs from "@/components/homes/home-4/Blogs";
import Cta from "@/components/homes/home-4/Cta";
import Hero from "@/components/homes/home-5/Hero";
import Process from "@/components/homes/home-4/Process";
import Projects from "@/components/homes/home-5/Projects";
import PromoSection from "@/components/homes/home-4/PromoSection";
import Services from "@/components/homes/home-5/Services";
import Services1 from "@/components/homes/home-5/Services1";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
import Projects1 from "@/components/homes//home-5/Projects1";

export const metadata = {
  title:
    "Soluciones integrales y servicios especiales || LOGOS-CORP MÉXICO",
  description: "Servicios especiales - LOGOS-CORP MÉXICO",
};
export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      {/* <About /> */}
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Process /> */}
      {/* <PromoSection /> */}
      <Cta />
      <Services1/>
      <Projects1/>
      {/* <Team />
      <Blogs /> */}
      <Footer1 />
    </>
  );
}
