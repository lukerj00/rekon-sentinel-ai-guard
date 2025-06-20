import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    inquiry_type: "General Inquiry" // Default value
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Define your inquiry types in a consistent array for easier management
  const inquiryTypes = [
    "General Inquiry",
    "Request a Demo",
    "SecureEvent Pro",
    "SecureFlight Pro",
    "SecureTransit Pro",
    "Custom Solutions",
    "Support Question",
    "Other"
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const contactPrefix = '#contact-';

      let newInquiryType = "General Inquiry"; // Default if no matching hash

      if (hash === '#contact-demo') {
        newInquiryType = 'Request a Demo';
      } else if (hash.startsWith(contactPrefix)) {
        const decodedInquiryType = decodeURIComponent(hash.replace(contactPrefix, ''));
        // Ensure the decoded type is one of our valid inquiry types
        if (inquiryTypes.includes(decodedInquiryType)) {
          newInquiryType = decodedInquiryType;
        } else {
          // Fallback if an unknown inquiry type is in the hash
          console.warn(`Unknown inquiry type in hash: ${decodedInquiryType}. Falling back to 'General Inquiry'.`);
          newInquiryType = "General Inquiry";
        }
      }

      setFormData(prev => ({
        ...prev,
        inquiry_type: newInquiryType
      }));

      // Scroll to contact section after state update (important for visual consistency)
      const section = document.getElementById('contact');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange, false);

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []); // Empty dependency array means this runs once on mount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    // This value directly comes from the Select component and should match an Item's value
    setFormData(prev => ({
      ...prev,
      inquiry_type: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
          inquiry_type: formData.inquiry_type
        }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        inquiry_type: "General Inquiry" // Reset to default after successful submission
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your security operations? Contact our team to learn more about
            AI Rekon's solutions and schedule a personalised demo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@airekon.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+44 (0) 7752 226 445</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                Weekend: Emergency support available
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Response Time</h4>
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry_type" className="block text-sm font-medium mb-2">
                    Inquiry Type *
                  </label>
                  {/* Key is crucial for re-rendering the Select component when its value might not be updating as expected */}
                  <Select
                    value={formData.inquiry_type}
                    onValueChange={handleSelectChange}
                    key={formData.inquiry_type} // Add key here
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your security needs and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-navy text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;