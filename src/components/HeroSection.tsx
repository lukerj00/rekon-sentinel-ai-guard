import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Activity, Search } from "lucide-react";
import showsecLogo from "@/assets/showsec.png";
import americanAirlinesLogo from "@/assets/american_airlines.png";
import morpheusLogo from "@/assets/morpheus.png";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-navy opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-success-green rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-steel-blue rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-navy-light/20 text-navy-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            <span>AI-Augmented Security Intelligence</span>
          </div>
          
          {/* Main headline */}
          <TypewriterText 
            text="Transform Security With AI Intelligence"
            className="text-5xl md:text-7xl font-bold text-navy-primary mb-6 leading-tight"
          />
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Automate 95% of security workflows with AI-augmented, human-in-the-loop solutions. 
            From event compliance to aviation security - we turn decades of data into actionable intelligence.
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-navy-secondary">
              <Activity className="w-5 h-5" />
              <span className="font-medium">95% Faster Assessments</span>
            </div>
            <div className="flex items-center space-x-2 text-navy-secondary">
              <Search className="w-5 h-5" />
              <span className="font-medium">Predictive Intelligence</span>
            </div>
            <div className="flex items-center space-x-2 text-navy-secondary">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Regulatory Compliance</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-navy text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity animate-pulse-glow">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white px-8 py-3 text-lg transition-all">
              View Case Studies
            </Button>
          </div>
          
          {/* Trusted by section */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-12 opacity-80">
              <img src={showsecLogo} alt="Showsec logo" className="h-12 object-contain" />
              <div className="w-px h-14 bg-border"></div>
              <img src={americanAirlinesLogo} alt="American Airlines logo" className="h-14 object-contain" />
              <div className="w-px h-14 bg-border"></div>
              <img src={morpheusLogo} alt="Morpheus Risk logo" className="h-12 object-contain" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
