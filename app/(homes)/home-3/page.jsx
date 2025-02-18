import Clients from "@/components/common/Clients";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-3/About";
import Blogs from "@/components/homes/home-3/Blogs";
import Facts from "@/components/homes/home-3/Facts";
import Features from "@/components/homes/home-3/Features";
import Hero from "@/components/homes/home-3/Hero";
import Process from "@/components/homes/home-3/Process";
import Projects from "@/components/homes/home-3/Projects";
import Services from "@/components/homes/home-3/Services";
import Testimonials from "@/components/homes/home-3/Testimonials";
import VideoSection from "@/components/homes/home-3/VideoSection";
import Cta from "@/components/homes/home-1/Cta";
import React from "react";

export const metadata = {
  title:
    "Construcción y remodelación || LOGOS-CORP MÉXICO",
  description: "Construcción y remodelación",
};
export default function page() {
  return (
    <>
      <Header2 />
      <Hero />
      {/* <Clients /> */}
      <About />
      <Services />
      {/* <Projects /> */}
      <Features />
      {/* <VideoSection /> */}
      {/* <Process />
      <Testimonials />
      <Blogs /> */}
      <Cta/>
      <Facts />
      <Footer1 />
    </>
  );
}
