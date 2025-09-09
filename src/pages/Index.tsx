import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CaseStudy />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
