
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BarChart3, Settings } from "lucide-react";

const WhyAiRekonSection = () => {
  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-navy-primary" />,
      title: "Proprietary Data Advantage",
      description: "Exclusive access to 20+ years of sensitive security incident data from industry leaders. Our data flywheel creates an intelligence moat that competitors cannot replicate.",
      highlight: "Unique datasets from Showsec & American Airlines"
    },
    {
      icon: <Users className="w-12 h-12 text-steel-blue" />,
      title: "World-Class Expertise",
      description: "Deep counter-terrorism, security operations, and AI expertise. Our team combines real-world security experience with cutting-edge technical capabilities.",
      highlight: "Counter-terrorism & AI specialists"
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
            Our Unfair Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            aiRekon isn't just another AI company. We're security professionals who've built 
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
                      {advantage.title}
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
