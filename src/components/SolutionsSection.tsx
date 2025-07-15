import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
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
      gradient: "from-success-green/20 to-navy-light/20",
      contactInquiryType: "SecureEvent Pro" // Added inquiry type
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
      gradient: "from-accent-blue/20 to-navy-light/20",
      contactInquiryType: "SecureFlight Pro" // Added inquiry type
    },
    {
      title: "SecureTransit Pro",
      subtitle: "Public Transport Operations Intelligence",
      icon: <MapPin className="w-8 h-8 text-steel-blue" />,
      description: "Live data integration for major public transport networks enabling real-time security monitoring across the system.",
      features: [
        "Live data feed integration",
        "Automated incident triage",
        "Crowd flow analytics",
        "Custom dashboards for operators"
      ],
      gradient: "from-steel-blue/20 to-navy-light/20",
      contactInquiryType: "SecureTransit Pro" // Added inquiry type
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
      description: "Expert oversight ensures accuracy while rapidly speeding up workflows"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Identify trends and forecast risks before they materialize"
    }
  ];

  // This handles the "See How It Works" button at the bottom of Core AI Features
  const handleSeeHowItWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = 'contact-demo'; // This hash is specifically for "Request a Demo"
    }
  };

  // New handler for individual solution card "Learn More" buttons
  const handleLearnMoreClick = (inquiryType: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Encode the inquiry type to be safe for URL hash
      window.location.hash = `contact-${encodeURIComponent(inquiryType)}`;
    }
  };

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <TypewriterText
            text="AI-Augmented Security Solutions"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6 justify-center"
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
                <div className="flex items-start space-x-3 mb-2">
                  <div className="flex-shrink-0 pt-1">{solution.icon}</div>
                  <div className="text-left">
                    <CardTitle className="text-2xl text-navy-primary">
                      <TypewriterText
                        text={solution.title}
                        className="text-2xl text-navy-primary font-semibold justify-start"
                      />
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
                {/* Changed Button to a tag with buttonVariants */}
                <a
                  href={`/#contact-${encodeURIComponent(solution.contactInquiryType)}`} // Dynamic hash link
                  onClick={(e) => handleLearnMoreClick(solution.contactInquiryType, e)}
                  className={buttonVariants({
                    variant: "outline",
                    className: "border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white transition-all group-hover:scale-105"
                  })}
                >
                  Learn More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div className="bg-navy-light/10 rounded-2xl p-8 md:p-10 text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-primary mb-4">
            <TypewriterText text="Need a Custom Solution?" className="justify-center" />
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Beyond our off-the-shelf products, we partner with clients to design and deploy bespoke AI security solutions tailored to unique operational challenges and specific regulatory environments. Let's build something together.
          </p>
          <a
            href="/#contact-Custom%20Solutions" // Explicitly set for Custom Solutions
            onClick={(e) => handleLearnMoreClick("Custom Solutions", e)} // Pass the specific inquiry type
            className={buttonVariants({ variant: "default", className: "bg-navy-primary hover:bg-navy-secondary text-white" })}
          >
            Discuss Your Needs
          </a>
        </div>


        {/* Core AI Features */}
        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <TypewriterText text="Powered by Advanced AI" className="justify-center" />
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
                  <TypewriterText text={feature.title} className="justify-center" />
                </h4>
                <p className="text-navy-light">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/#contact-demo" // This remains for "Request a Demo"
              onClick={handleSeeHowItWorksClick} // Keep the existing handler for this specific button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-white text-navy-primary hover:bg-white/90"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;