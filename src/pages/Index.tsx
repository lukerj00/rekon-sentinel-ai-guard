
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyAiRekonSection from "@/components/WhyAiRekonSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

const Index = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <ScrollAnimatedSection>
        <HeroSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <ProblemSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <SolutionsSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <WhyAiRekonSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <ClientsSection />
      </ScrollAnimatedSection>
      <ScrollAnimatedSection>
        <ContactSection />
      </ScrollAnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
