import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import airekonLogo from "@/assets/airekon.png";

const Footer = () => {
  return (
    <footer className="bg-navy-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <img src={airekonLogo} alt="aiRekon logo" className="h-8" />
            </a>
            <p className="text-navy-light mb-2 leading-relaxed">
              AI-augmented security intelligence platform transforming how organizations manage 
              terrorism, security, and safety risks. Built by security professionals for security professionals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-navy-light">
                <Mail className="w-4 h-4" />
                <span>info@airekon.com</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-light">
                <Phone className="w-4 h-4" />
                <span>+44 (0) 7752 226 445</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-light">
                <MapPin className="w-4 h-4" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-navy-light">
              <li><a href="#" className="hover:text-white transition-colors">SecureEvent Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SecureFlight Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SecureTransit Pro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-navy-light">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-light text-sm">
            © 2025 AI Rekon. All rights reserved. <strong>A UCL spinout company.</strong>
          </p>
          <div className="flex space-x-6 text-sm text-navy-light mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;