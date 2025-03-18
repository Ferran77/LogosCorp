import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-4/About";
import Blogs from "@/components/homes/home-4/Blogs";
import Cta from "@/components/homes/home-4/Cta";
import BasicCta from "@/components/otherPages/basics/BasicCta"
import BasicHero from "@/components/otherPages/basics/BasicHero";
import Process from "@/components/homes/home-4/Process";
import BasicProjects from "@/components/otherPages/basics/BasicProjects";
import BasicProjects1 from "@/components/otherPages/basics/BasicProjects1";
import BasicProjects2 from "@/components/otherPages/basics/BasicProjects2";

import PromoSection from "@/components/homes/home-4/PromoSection";
import BasicServices from "@/components/otherPages/basics/BasicServices";
import BasicServices1 from "@/components/otherPages/basics/BasicServices1";
import BasicServices2 from "@/components/otherPages/basics/BasicServices2";
import Services1 from "@/components/homes/home-5/Services1";
import Team from "@/components/homes/home-4/Team";
import Testimonials from "@/components/homes/home-4/Testimonials";
import React from "react";
import Projects1 from "@/components/homes//home-5/Projects1";

export const metadata = {
  title:
    "Instalaciones básicas",
  description: "Instalaciones básicas",
};
export default function page() {
  return (
    <>
      <Header1 />
      <BasicHero />
      <BasicCta/>
      {/* <About /> */}
      <BasicServices />
      <BasicProjects />
      {/* <Testimonials /> */}
      {/* <Process /> */}
      {/* <PromoSection /> */}
      
      <BasicServices1 />
      <BasicProjects1 />
      <BasicServices2 />
      <BasicProjects2 />
      {/* <Team />
      <Blogs /> */}
      <Cta />
      <Footer1 />
    </>
  );
}
