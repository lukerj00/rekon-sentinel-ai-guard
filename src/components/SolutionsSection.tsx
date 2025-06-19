import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Search, CheckCircle2, Zap, BarChart3, MapPin } from "lucide-react";
import TypewriterText from "./TypewriterText";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "SecureEvent Pro",
      subtitle: "Martyn's Law Compliance",
      icon: <Shield className="w-8 h-8 text-success-green" />,
      description: "Automated risk assessments and compliance checks for public events. Transform complex regulatory requirements into clear, actionable security plans.",
      features: [
        "Automated compliance checking",
        "Custom risk grading system",
        "Mitigation strategy generation",
        "Real-time threat modeling"
      ],
      gradient: "from-success-green/20 to-navy-light/20"
    },
    {
      title: "SecureFlight Pro",
      subtitle: "Aviation Security Intelligence",
      icon: <Activity className="w-8 h-8 text-accent-blue" />,
      description: "Near real-time classification of aviation security incidents. Reduce delays, lower costs, and enhance passenger safety through intelligent automation.",
      features: [
        "Real-time incident classification",
        "Predictive threat analysis",
        "Operational cost reduction",
        "Enhanced passenger safety"
      ],
      gradient: "from-accent-blue/20 to-navy-light/20"
    },
    {
      title: "SecureTransit Pro",
      subtitle: "Transport Operations Intelligence (TfL)",
      icon: <MapPin className="w-8 h-8 text-steel-blue" />,
      description: "Live data integration for Transport for London enabling real-time security monitoring across the network.",
      features: [
        "Live CCTV & IoT feed integration",
        "Automated incident triage",
        "Crowd flow analytics",
        "Custom dashboards for TfL"
      ],
      gradient: "from-steel-blue/20 to-navy-light/20"
    }
  ];

  const coreFeatures = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Rekon Intelligence",
      description: "AI models trained on 20+ years of proprietary security data"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Human-in-the-Loop",
      description: "Expert oversight ensures accuracy while maintaining speed"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Identify trends and forecast risks before they materialize"
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <TypewriterText
            text="AI-Augmented Security Solutions"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your security operations with intelligent automation that learns, adapts, and evolves with your organization's needs.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className={`relative overflow-hidden border-2 hover:border-navy-primary/30 transition-all duration-300 hover:shadow-xl group flex flex-col`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-50`}></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3 mb-2">
                  {solution.icon}
                  <div>
                    <CardTitle className="text-2xl text-navy-primary">
                      <TypewriterText text={solution.title} />
                    </CardTitle>
                    <p className="text-steel-blue font-medium">{solution.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-success-green flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white transition-all group-hover:scale-105">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core AI Features */}
        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <TypewriterText text="Powered by Advanced AI" />
            </h3>
            <p className="text-navy-light text-lg max-w-2xl mx-auto">
              Our proprietary AI models are trained on exclusive datasets and continuously learn from real-world security operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  <TypewriterText text={feature.title} />
                </h4>
                <p className="text-navy-light">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-navy-primary hover:bg-navy-light transition-colors px-8 py-3">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
