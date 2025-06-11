import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyAiRekonSection from "@/components/WhyAiRekonSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

const Index = () => {
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
      <Footer />
    </div>
  );
};

export default Index;
