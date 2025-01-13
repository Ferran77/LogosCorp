import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Clients from "@/components/common/Clients";
import Facts from "@/components/homes/home-2/Facts";
import Features from "@/components/homes/home-2/Features";
import Hero from "@/components/homes/home-2/Hero";
import Mission from "@/components/homes/home-2/Mission";
import Projects from "@/components/homes/home-2/Projects";
import Services from "@/components/homes/home-2/Services";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Arquitectura y Diseño",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header1 />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Features />
      <Facts />
      <Projects />
      <Clients />
      <Testimonials />
      <Team />
      <Blogs />
      <Footer1 />
    </>
  );
}
