import { Button } from "@/components/ui/button";
import airekonLogo from "@/assets/airekon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src={airekonLogo} alt="aiRekon logo" className="h-8" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </a>
          <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">
            Why aiRekon
          </a>
          <a href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">
            Clients
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button className="gradient-navy text-white hover:opacity-90 transition-opacity">
          Request Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
