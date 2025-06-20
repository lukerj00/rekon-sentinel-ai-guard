import { Card, CardContent } from "@/components/ui/card";
import { Quote, Shield, Activity, MapPin } from "lucide-react";
import showsecLogo from "@/assets/showsec.png";
import americanAirlinesLogo from "@/assets/american_airlines.png";
import tflLogo from "@/assets/tfl.png";
import morpheusLogo from "@/assets/morpheus.png";
import TypewriterText from "./TypewriterText";

const ClientsSection = () => {
  const clients = [
    {
      name: "Showsec",
      industry: "Event Security",
      logo: showsecLogo,
      investment: "SecureEvent Pro",
      commitment: "Event security management",
      description: "Leading event security company supporting our events security platform",
      gradient: "from-success-green/20 to-navy-light/20"
    },
    {
      name: "American Airlines",
      industry: "Aviation",
      logo: americanAirlinesLogo,
      investment: "SecureFlight Pro",
      commitment: "Aviation risk classification",
      description: "Major airline supporting our aviation security intelligence platform",
      gradient: "from-accent-blue/20 to-navy-light/20"
    },
    {
      name: "Transport for London",
      industry: "Transport",
      logo: tflLogo,
      investment: "SecureTransit Pro",
      commitment: "Live Data Integration",
      description: "Developing a real-time security intelligence platform across London's transport network",
      gradient: "from-steel-blue/20 to-navy-light/20"
    },
    {
      name: "Morpheus Risk",
      industry: "Risk Management",
      logo: morpheusLogo,
      investment: "Strategic Partner",
      commitment: "Technology Integration",
      description: "Risk management specialists enhancing our compliance capabilities",
      gradient: "from-steel-blue/20 to-navy-light/20"
    }
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TypewriterText
            text="Trusted by Industry Leaders"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6 justify-center"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading organizations are investing in AI Rekon to transform their security operations. 
            Our partnerships provide exclusive data access and real-world validation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <Card key={index} className={`relative overflow-hidden border-2 hover:border-navy-primary/30 transition-all duration-300 hover:shadow-xl group`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-50`}></div>
              <CardContent className="relative z-10 p-8 text-center">
                <div className="inline-flex items-center justify-center w-48 h-32 bg-white rounded-xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 p-2">
                  <img src={client.logo} alt={`${client.name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-steel-blue font-medium mb-4">{client.industry}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{client.description}</p>
                
                <div className="space-y-2">
                  <div className="bg-navy-primary/10 rounded-lg p-3">
                    <div className="text-lg font-bold text-navy-primary">{client.investment}</div>
                    <div className="text-sm text-muted-foreground">{client.commitment}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-8 md:p-12 text-center">
          <Quote className="w-12 h-12 text-white/60 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
            "AI Rekon's AI-augmented approach has transformed how we think about security risk management. 
            The combination of cutting-edge technology and deep domain expertise is unmatched."
          </blockquote>
          <div className="text-navy-light">
            <div className="font-semibold">Industry Partner</div>
            <div className="text-sm opacity-80">Security Operations Leader</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
