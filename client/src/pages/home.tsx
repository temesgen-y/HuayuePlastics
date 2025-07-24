import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Heart, Truck, Utensils, Home, ShoppingCart, Leaf, Users, Headphones, MapPin, Settings } from "lucide-react";
import HeroSlider from "@/components/hero-slider";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-neutral-dark mb-8">HUAYUE PLASTICS INDUSTRY</h2>
              
              <div className="space-y-6 text-neutral-gray leading-relaxed">
                <p>
                  HUAYUE PLASTICS INDUSTRY P.L.C. produces two major product brands: 
                  EIDER and HUAYUE PP-R pipes and fittings. The factory has the 
                  capability to manufacture PP-R pipes and fittings ranging from 20mm to 
                  50mm in diameter, with pressure ratings of PN20 and PN16.
                </p>
                
                <p>
                  Committed to quality and reliability, EIDER and HUAYUE PP-R products 
                  comply with ISO 15874 standards and are manufactured using high-
                  quality Korean-origin PP-R resin, ensuring superior strength, durability, 
                  and safety for both hot and cold water applications. HUAYUE PLASTICS 
                  INDUSTRY P.L.C. operates alongside its sister company, HUAYU Textile 
                  Industry, within the same industrial compound, reinforcing its 
                  commitment to excellence across multiple sectors.
                </p>
                
                <p>
                  HUAYUE PLASTICS INDUSTRY P.L.C. operates alongside its sister 
                  company, HUAYU Textile Industry, within the same industrial compound, 
                  reinforcing its commitment to excellence across multiple sectors.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">ISO 15874 standards</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">24/7 Support</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">Regional delivery available across selected areas</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">Custom Solutions</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Button asChild className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Huayue Plastics Manufacturing Facility" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">25+</div>
              <div className="text-neutral-gray font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">4</div>
              <div className="text-neutral-gray font-medium">Manufacturing Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">50+</div>
              <div className="text-neutral-gray font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-green mb-2">300+</div>
              <div className="text-neutral-gray font-medium">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-dark mb-6">About Huayue Group</h2>
              <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                Founded in 1998, Huayue Group has grown to become a leading Asian plastic packaging manufacturer, specializing in innovative packaging solutions for multiple industries worldwide.
              </p>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                With 4 self-owned factories across China and Cambodia, we serve over 50 countries and maintain strong partnerships with global logistics companies including SF Express, FedEx, UPS, and Amazon sellers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-accent-green text-xl mr-3" />
                  <span className="text-neutral-dark font-medium">ISO9001, ISO14001, ISO13485 Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent-green text-xl mr-3" />
                  <span className="text-neutral-dark font-medium">GMP, BRC, GSV/C-TPAT Compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent-green text-xl mr-3" />
                  <span className="text-neutral-dark font-medium">Global Food Standard Certification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-accent-green text-xl mr-3" />
                  <span className="text-neutral-dark font-medium">Biodegradable Packaging Solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern plastic manufacturing facility" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-green text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">70%</div>
                <div className="text-sm">Export Overseas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Comprehensive plastic packaging solutions across multiple industries with focus on quality, sustainability, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Medical Packaging</h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• Commode liners</li>
                  <li>• Specimen bags</li>
                  <li>• Patient bags</li>
                  <li>• Medical waste bags</li>
                </ul>
                <Button asChild variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
                  <Link href="/products?category=medical">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Truck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">E-commerce Packaging</h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• Express bags</li>
                  <li>• Mailing bags</li>
                  <li>• Courier pouches</li>
                  <li>• Poly mailers</li>
                </ul>
                <Button asChild variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
                  <Link href="/products?category=ecommerce">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Leaf className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Biodegradable Solutions</h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• PLA+PBAT materials</li>
                  <li>• Corn starch based</li>
                  <li>• Compostable bags</li>
                  <li>• Eco-friendly options</li>
                </ul>
                <Button asChild variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
                  <Link href="/products?brand=eider">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-8">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Asia's Leading Packaging Manufacturer?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join over 50 countries worldwide that trust Huayue Group for their packaging needs. 
            Get a custom quote for your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-green hover:bg-gray-100 font-semibold">
              <Link href="/contact">Get Quote Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green">
              <Link href="/agency-policy">Partnership Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
