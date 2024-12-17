import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Clients from "@/components/homes/home-1/Clients";
import Cta from "@/components/homes/home-1/Cta";
import Faq from "@/components/common/Faq";
import FeatureLine from "@/components/homes/home-1/FeatureLine";
import FeatureLineIframe from "@/components/homes/home-1/FeatureLineIframe";
import Hero from "@/components/homes/home-1/Hero";
import Projects from "@/components/homes/home-1/Projects";
import Services from "@/components/homes/home-1/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";

export const metadata = {
  title: "LOGOS-CORP MÉXICO",
  description: "LOGOS CORP MÉXICO",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <FeatureLine />
      <Services />
      <FeatureLineIframe />
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
