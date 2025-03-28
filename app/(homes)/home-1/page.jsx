import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Faq from "@/components/common/Faq";
import FeatureLine from "@/components/homes/home-1/FeatureLine";
import Hero from "@/components/homes/home-1/Hero";
import Projects from "@/components/homes/home-1/Projects";
import Services from "@/components/homes/home-1/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";

export const metadata = {
  title: "Home Main || Logos Corp - Ingeniería y construcción",
  description: "Logos Corp - Ingeniería y construcción",
};
export default function Home() {
  console.log("Home component renderizado");
  return (
    <>
      <Header1 />
      <Hero />
      
      <Services />
      
      <FeatureLine />
      <About />
      <Testimonials />
      <Projects />
      <Clients />
      <Cta />
      <Faq />
      <Blogs />
      <Footer1 />
    </>
  );
}
