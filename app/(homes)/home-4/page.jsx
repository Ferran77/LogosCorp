import Footer1 from "@/components/footers/Footer1";
import Header3 from "@/components/headers/Header3";
import About from "@/components/homes/home-4/About";
import Blogs from "@/components/homes/home-4/Blogs";
import Cta from "@/components/homes/home-4/Cta";
import Hero from "@/components/homes/home-4/Hero";
import Process from "@/components/homes/home-4/Process";
import Projects from "@/components/homes/home-4/Projects";
import PromoSection from "@/components/homes/home-4/PromoSection";
import Services from "@/components/homes/home-4/Services";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";

export const metadata = {
  title:
    "Home Metal Working || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header3 />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Process />
      <PromoSection />
      <Cta />
      <Team />
      <Blogs />
      <Footer1 />
    </>
  );
}
