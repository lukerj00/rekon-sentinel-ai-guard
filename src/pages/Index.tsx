
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyAiRekonSection from "@/components/WhyAiRekonSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <WhyAiRekonSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
