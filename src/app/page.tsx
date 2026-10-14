import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WorkGallery from "@/components/WorkGallery";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WorkGallery />
        <Process />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
