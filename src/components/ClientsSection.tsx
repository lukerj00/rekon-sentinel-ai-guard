
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Shield, Activity, MapPin } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    {
      name: "Showsec",
      industry: "Event Security",
      logo: <Shield className="w-8 h-8" />,
      investment: "£150,000",
      commitment: "3-year partnership",
      description: "Leading event security company supporting our SecureEvent Pro development",
      gradient: "from-success-green/20 to-navy-light/20"
    },
    {
      name: "American Airlines",
      industry: "Aviation",
      logo: <Activity className="w-8 h-8" />,
      investment: "$100,000",
      commitment: "AI Classification Tool",
      description: "Major airline funding our aviation security intelligence platform",
      gradient: "from-accent-blue/20 to-navy-light/20"
    },
    {
      name: "Morpheus Risk",
      industry: "Risk Management",
      logo: <MapPin className="w-8 h-8" />,
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
          <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading organizations are investing in aiRekon to transform their security operations. 
            Our partnerships provide exclusive data access and real-world validation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <Card key={index} className={`relative overflow-hidden border-2 hover:border-navy-primary/30 transition-all duration-300 hover:shadow-xl group`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${client.gradient} opacity-50`}></div>
              <CardContent className="relative z-10 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-2">{client.name}</h3>
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
            "aiRekon's AI-augmented approach has transformed how we think about security risk management. 
            The combination of cutting-edge technology and deep domain expertise is unmatched."
          </blockquote>
          <div className="text-navy-light">
            <div className="font-semibold">Industry Partner</div>
            <div className="text-sm opacity-80">Security Operations Leader</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <Shield className="w-8 h-8 text-success-green mx-auto mb-2" />
              <div className="text-sm font-medium text-navy-primary">ISO 27001</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <Activity className="w-8 h-8 text-accent-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-navy-primary">SOC 2</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-steel-blue mx-auto mb-2" />
              <div className="text-sm font-medium text-navy-primary">GDPR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
