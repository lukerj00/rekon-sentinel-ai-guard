import { AlertTriangle, Clock, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "./TypewriterText";

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      title: "Reactive Security Posture",
      description: "Organizations rely on outdated, manual risk assessments that fail to predict emerging threats or adapt to changing conditions."
    },
    {
      icon: <Clock className="w-8 h-8 text-steel-blue" />,
      title: "Inefficient Processes",
      description: "Security teams waste hundreds of hours on manual incident classification, compliance checks, and report generation."
    },
    {
      icon: <FileText className="w-8 h-8 text-navy-secondary" />,
      title: "Siloed Data",
      description: "Decades of security incident reports sit unused in static systems, preventing organizations from learning from historical patterns."
    },
    {
      icon: <Users className="w-8 h-8 text-accent-blue" />,
      title: "Regulatory Pressure",
      description: "New regulations like Martyn's Law create urgent compliance requirements that overwhelm traditional security workflows."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TypewriterText
            text="Security Teams Are Overwhelmed"
            className="text-4xl md:text-5xl font-bold text-navy-primary mb-6"
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional security risk management is failing organizations. Manual processes, 
            subjective assessments, and reactive approaches leave critical vulnerabilities unaddressed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 hover:border-navy-primary/20 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <TypewriterText 
                  text={problem.title} 
                  className="text-lg font-semibold text-navy-primary mb-3"
                />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-destructive/10 text-destructive px-6 py-3 rounded-lg font-semibold">
            <AlertTriangle className="w-5 h-5 inline mr-2" />
            The cost of security failures is skyrocketing while resources remain constrained
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
