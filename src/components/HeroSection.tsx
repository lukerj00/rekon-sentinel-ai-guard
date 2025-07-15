import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, Activity, Search, Lock, Eye, AlertTriangle, ArrowRight, Plane, Train, TrendingUp } from "lucide-react";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

const HeroSection = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleRequestDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = 'contact-demo';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Security-themed background pattern */}
      <div className="absolute inset-0 security-pattern"></div>
      <div className="absolute inset-0 circuit-pattern animate-network-pulse"></div>
      <div className="absolute inset-0 gradient-navy opacity-5"></div>
      
      {/* Security-themed floating elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-navy-primary/20 rounded-lg flex items-center justify-center animate-float opacity-60">
        <Shield className="w-4 h-4 text-navy-primary" />
      </div>
      <div className="absolute top-40 right-20 w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center animate-float opacity-40" style={{animationDelay: '2s'}}>
        <Lock className="w-5 h-5 text-accent-blue" />
      </div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-steel-blue/30 rounded-lg flex items-center justify-center animate-float opacity-50" style={{animationDelay: '4s'}}>
        <Eye className="w-3 h-3 text-steel-blue" />
      </div>
      <div className="absolute top-60 left-1/4 w-7 h-7 bg-success-green/20 rounded-full flex items-center justify-center animate-float opacity-45" style={{animationDelay: '1s'}}>
        <AlertTriangle className="w-4 h-4 text-success-green" />
      </div>
      <div className="absolute bottom-60 right-1/4 w-9 h-9 bg-navy-secondary/25 rounded-lg flex items-center justify-center animate-float opacity-55" style={{animationDelay: '3s'}}>
        <Search className="w-4 h-4 text-navy-secondary" />
      </div>
      
      <motion.div className="container mx-auto px-4 py-20 text-center relative z-10" variants={container}>
        <motion.div className="max-w-4xl mx-auto" variants={container}>
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center space-x-2 bg-navy-light/20 text-navy-secondary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            <span>AI-Augmented Security Intelligence</span>
          </motion.div>
          
          {/* Main headline */}
          <motion.div variants={item}>
            <TypewriterText 
              text="Transform Security With AI-Augmented Intelligence"
              className="text-5xl md:text-7xl font-bold text-navy-primary mb-6 leading-tight justify-center"
            />
          </motion.div>
          
          {/* Sub-headline */}
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Automate 95% of security workflows with AI-augmented, human-in-the-loop solutions. 
            From event compliance to aviation security - we turn decades of data into actionable intelligence.
          </motion.p>
          
          {/* Key benefits */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-6 mb-12">
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
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" onClick={handleRequestDemo} className={buttonVariants({ size: "lg" })}>
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#solutions" 
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Learn More
            </a>
          </motion.div>
          
          {/* Trusted by section */}
          <motion.div variants={item} className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
            <div className="flex justify-center items-center space-x-10 opacity-80">
              <div className="text-center min-w-32">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md mb-3 mx-auto">
                  <Shield className="w-10 h-10 text-success-green" />
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">Leading Event Security</p>
              </div>
              <div className="w-px h-24 bg-border"></div>
              <div className="text-center min-w-32">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md mb-3 mx-auto">
                  <Plane className="w-10 h-10 text-accent-blue" />
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">Leading Global Airline</p>
              </div>
              <div className="w-px h-24 bg-border"></div>
              <div className="text-center min-w-32">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md mb-3 mx-auto">
                  <Train className="w-10 h-10 text-steel-blue" />
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">Leading Public Transport</p>
              </div>
              <div className="w-px h-24 bg-border"></div>
              <div className="text-center min-w-32">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-md mb-3 mx-auto">
                  <TrendingUp className="w-10 h-10 text-navy-primary" />
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">Leading Security Consultancy</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
