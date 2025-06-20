
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BarChart3, Settings } from "lucide-react";
import showsecLogo from "@/assets/showsec.png";
import americanAirlinesLogo from "@/assets/american_airlines.png";
import TypewriterText from "./TypewriterText";

const WhyAiRekonSection = () => {
  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-navy-primary" />,
      title: "Proprietary Data Advantage",
      description: "Exclusive access to 20+ years of sensitive security incident data from industry leaders. Our data flywheel creates an intelligence moat that competitors cannot replicate.",
      highlight: (
        <div className="flex items-center space-x-2">
          <span>Unique datasets from</span>
          <img src={showsecLogo} alt="Showsec logo" className="h-8" />
          <span>&</span>
          <img src={americanAirlinesLogo} alt="American Airlines logo" className="h-10" />
        </div>
      )
    },
    {
      icon: <Users className="w-12 h-12 text-steel-blue" />,
      title: "World-Class Expertise",
      description: "Our team combines UCL Professors of Crime Science with ex Oxford/Cambridge Machine Learning researchers. This unique blend of real-world security expertise and cutting-edge AI capabilities is unmatched in the industry.",
      highlight: "UCL Crime Science + Oxbridge ML researchers"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-accent-blue" />,
      title: "Proven Efficiency Gains",
      description: "95% reduction in risk assessment time and automation of ancillary security tasks. Transform manual, subjective processes into data-driven workflows.",
      highlight: "95% faster security assessments"
    },
    {
      icon: <Settings className="w-12 h-12 text-success-green" />,
      title: "Vendor-Agnostic Architecture",
      description: "Flexible, future-proof platform designed for adaptability. Focus on data quality and specificity rather than dependency on expensive, overpowered models.",
      highlight: "Future-proof & adaptable"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TypewriterText
            text="Our Unfair Advantage"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6 justify-center"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI Rekon isn't just another AI company. We're UCL Professors of Crime Science and ex Oxford/Cambridge Machine Learning researchers who've built 
            the world's most sophisticated AI-augmented security intelligence platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-navy-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-primary mb-3">
                      <TypewriterText text={advantage.title} />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {advantage.description}
                    </p>
                    <div className="inline-block bg-navy-light/30 text-navy-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {advantage.highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-navy-primary mb-2">95%</div>
              <div className="text-muted-foreground">Faster Risk Assessment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-steel-blue mb-2">20+</div>
              <div className="text-muted-foreground">Years of Data</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-blue mb-2">£250K</div>
              <div className="text-muted-foreground">Client Investment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success-green mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAiRekonSection;
