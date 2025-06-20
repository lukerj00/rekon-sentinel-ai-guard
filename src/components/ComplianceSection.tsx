import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Lock, CheckCircle2 } from "lucide-react";
import TypewriterText from "./TypewriterText";

const ComplianceSection = () => {
  const complianceStandards = [
    {
      title: "ISO 27001",
      subtitle: "Information Security Management",
      icon: <Shield className="w-8 h-8 text-success-green" />,
      description: "We adhere to the leading international standard for Information Security Management Systems (ISMS), ensuring your data is protected with enterprise-grade security controls.",
      features: [
        "Continuous risk assessment",
        "Data encryption at rest and in transit",
        "Regular security audits",
        "Incident response procedures"
      ],
      gradient: "from-success-green/20 to-navy-light/20"
    },
    {
      title: "Martyn's Law",
      subtitle: "Terrorism (Protection of Premises) Act 2025",
      icon: <FileCheck className="w-8 h-8 text-accent-blue" />,
      description: "Our SecureEvent Pro solution is specifically designed to help organisations comply with Martyn's Law requirements for terrorism risk assessment and mitigation.",
      features: [
        "Automated compliance checking",
        "Risk assessment documentation",
        "Mitigation strategy planning",
        "Regulatory reporting tools"
      ],
      gradient: "from-accent-blue/20 to-navy-light/20"
    },
    {
      title: "GDPR",
      subtitle: "General Data Protection Regulation",
      icon: <Lock className="w-8 h-8 text-steel-blue" />,
      description: "Full compliance with European data protection regulations, ensuring personal data is processed lawfully, transparently, and securely.",
      features: [
        "Data minimisation principles",
        "Right to erasure support",
        "Consent management",
        "Data breach notification"
      ],
      gradient: "from-steel-blue/20 to-navy-light/20"
    }
  ];

  return (
    <section id="compliance" className="py-20 bg-gradient-to-br from-navy-light/10 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <TypewriterText
            text="Compliance & Security Standards"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6 justify-center"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our solutions are built with compliance at their core, meeting the highest international standards for security, data protection, and regulatory requirements.
          </p>
        </div>

        {/* Compliance Standards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {complianceStandards.map((standard, index) => (
            <Card key={index} className={`relative overflow-hidden border-2 hover:border-navy-primary/30 transition-all duration-300 hover:shadow-xl group flex flex-col`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${standard.gradient} opacity-50`}></div>
              <CardHeader className="relative z-10">
                <div className="flex items-start space-x-3 mb-2">
                  <div className="flex-shrink-0 pt-1">{standard.icon}</div>
                  <div className="text-left">
                    <CardTitle className="text-2xl text-navy-primary">
                      <TypewriterText 
                        text={standard.title} 
                        className="text-2xl text-navy-primary font-semibold justify-start" 
                      />
                    </CardTitle>
                    <p className="text-steel-blue font-medium text-sm">{standard.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {standard.description}
                </p>
                <ul className="space-y-2">
                  {standard.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-success-green flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;