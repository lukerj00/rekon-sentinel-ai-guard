import { Button, buttonVariants } from "@/components/ui/button";
import airekonLogo from "@/assets/airekon.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const handleRequestDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = 'contact-demo';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src={airekonLogo} alt="aiRekon logo" className="h-6" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
          <a href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">Why AI Rekon</a>
          <a href="#clients" className="text-sm font-medium hover:text-primary transition-colors">Clients</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="#contact" onClick={handleRequestDemo} className={`${buttonVariants({ variant: "default" })} hidden md:inline-flex`}>
            Request Demo
          </a>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-2 mt-6">
                <a href="#solutions" className="block w-full text-left p-2 rounded-md hover:bg-muted">Solutions</a>
                <a href="#why-us" className="block w-full text-left p-2 rounded-md hover:bg-muted">Why AI Rekon</a>
                <a href="#clients" className="block w-full text-left p-2 rounded-md hover:bg-muted">Clients</a>
                <a href="#contact" className="block w-full text-left p-2 rounded-md hover:bg-muted">Contact</a>
              </div>
              <div className="mt-4 pt-4 border-t">
                <a href="#contact" onClick={handleRequestDemo} className={buttonVariants({ variant: "default", className: "w-full" })}>
                  Request Demo
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
