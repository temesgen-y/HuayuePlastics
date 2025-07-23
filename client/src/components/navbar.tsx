import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/huayue-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "/products",
    children: [
      { name: "Huayue", href: "/products?brand=huayue" },
      { name: "Eider", href: "/products?brand=eider" },
    ]
  },
  { name: "About Us", href: "/about" },
  { name: "Agency Policy", href: "/agency-policy" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Huayue - Look forward to the future" 
                className="h-12 w-auto"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="text-neutral-dark hover:text-primary-green font-medium flex items-center"
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.name} asChild>
                            <Link 
                              href={child.href}
                              className="w-full text-neutral-dark hover:text-primary-green"
                            >
                              {child.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`font-medium transition-colors ${
                        location === item.href 
                          ? "text-primary-green" 
                          : "text-neutral-dark hover:text-primary-green"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <div className="font-medium text-neutral-dark mb-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {item.children.map((child) => (
                              <Link 
                                key={child.name}
                                href={child.href}
                                className="block text-neutral-dark hover:text-primary-green"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link 
                          href={item.href}
                          className={`block font-medium transition-colors ${
                            location === item.href 
                              ? "text-primary-green" 
                              : "text-neutral-dark hover:text-primary-green"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
