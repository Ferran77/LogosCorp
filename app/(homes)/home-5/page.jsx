import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import About from "@/components/homes/home-5/About";
import Banner from "@/components/homes/home-5/Banner";
import Blogs from "@/components/homes/home-5/Blogs";
import Facts from "@/components/homes/home-5/Facts";
import Hero from "@/components/homes/home-5/Hero";
import Process from "@/components/homes/home-5/Process";
import Projects from "@/components/homes/home-5/Projects";
import Testimonials from "@/components/homes/home-5/Testimonials";
import VideoSection from "@/components/homes/home-5/VideoSection";
import React from "react";

export const metadata = {
  title:
    "Home Textile || Factorix - Industrial & Factory React Nextjs Template",
  description: "Factorix - Industrial & Factory React Nextjs Template",
};
export default function page() {
  return (
    <>
      <Header2 />
      <Hero />
      <Banner />
      <About />
      <Process />
      <Facts />
      <div className="section-devider">
        <hr />
      </div>
      <Projects />
      <Testimonials />
      <VideoSection />
      <Blogs />
      <Footer1 />
    </>
  );
}
