import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Truck, Utensils, Home, ShoppingCart, Leaf, ChevronDown } from "lucide-react";
import { useState } from "react";
// Import logo images
const huayueLogoImg = "/attached_assets/huayu%20logo_1753699932333.PNG";
const eiderLogoImg = "/attached_assets/Eider%20Logo_1753699951877.PNG";
const huayueNewLogoImg = "/attached_assets/huayu%20logo_1753700294403.PNG";

const productCategories = [
  {
    icon: Heart,
    title: "Medical Packaging",
    description: "Hospital-grade sterile packaging solutions",
    products: ["Commode liners", "Specimen bags", "Patient bags", "Medical waste bags"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "medical"
  },
  {
    icon: Truck,
    title: "E-commerce Packaging",
    description: "Reliable shipping and mailing solutions",
    products: ["Express bags", "Mailing bags", "Courier pouches", "Poly mailers"],
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "ecommerce"
  },
  {
    icon: Utensils,
    title: "Food Packaging",
    description: "Food-grade safe storage solutions",
    products: ["Food-grade bags", "Zipper bags", "Storage bags", "Fresh produce bags"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "food"
  },
  {
    icon: Home,
    title: "Household Products",
    description: "Everyday home storage and waste solutions",
    products: ["Trash bags", "Garbage bags", "Storage solutions", "Laundry bags"],
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "household"
  },
  {
    icon: ShoppingCart,
    title: "Retail Packaging",
    description: "Consumer-friendly shopping solutions",
    products: ["Shopping bags", "T-shirt bags", "Handle bags", "Drawstring bags"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "retail"
  },
  {
    icon: Leaf,
    title: "Biodegradable Solutions",
    description: "Eco-friendly sustainable packaging",
    products: ["PLA+PBAT materials", "Corn starch based", "Compostable bags", "Eco-friendly options"],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "biodegradable"
  }
];

const huayueProducts = [
  {
    name: "Zip Lock Bags",
    description: "Food-grade, resealable solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "T-Shirt Bags",
    description: "Retail shopping solutions",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Medical Bags",
    description: "Hospital-grade sterile packaging",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Express Bags",
    description: "E-commerce shipping solutions",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

const eiderProducts = [
  {
    name: "Biodegradable Bags",
    description: "Eco-friendly compostable solutions",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Sustainable Packaging",
    description: "PLA+PBAT material blend",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Green Solutions",
    description: "Corn starch based materials",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Earth-Friendly",
    description: "Certified compostable options",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ProductsPage() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (brand: string) => {
    setActiveDropdown(activeDropdown === brand ? null : brand);
  };

  return (
    <Layout 
      title="Products - Huayue Plastics Industry"
      description="Explore our comprehensive range of plastic packaging solutions including medical, e-commerce, food packaging, and biodegradable options. Quality assured by ISO certifications."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive plastic packaging solutions across multiple industries with focus on quality, sustainability, and innovation.
          </p>
        </div>
      </section>

      {/* Brand Logos with Dropdowns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Product Brands
            </h2>
            <p className="text-lg text-neutral-gray">
              Explore our specialized product lines designed for different applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* HUAYUE Brand */}
            <div className="relative">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleDropdown('huayue')}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src={huayueLogoImg}
                      alt="HUAYUE Brand Logo"
                      className="h-20 w-auto mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-neutral-dark mr-2">
                      HUAYUE Series
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-neutral-gray transition-transform duration-200 ${
                        activeDropdown === 'huayue' ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  <p className="text-neutral-gray mt-2">
                    High-performance industrial solutions
                  </p>
                </div>
              </div>

              {/* HUAYUE Dropdown */}
              {activeDropdown === 'huayue' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                  <div className="p-6">
                    <div className="grid gap-4">
                      {huayueProducts.map((product, index) => (
                        <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-12 object-cover rounded mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-neutral-dark">{product.name}</h4>
                            <p className="text-sm text-neutral-gray">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button 
                        asChild 
                        className="w-full bg-primary-green hover:bg-primary-green/90 text-white"
                      >
                        <Link href="/products?brand=huayue">View All HUAYUE Products</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EIDER Brand */}
            <div className="relative">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleDropdown('eider')}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <img
                      src={eiderLogoImg}
                      alt="EIDER Brand Logo"
                      className="h-20 w-auto mx-auto"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-neutral-dark mr-2">
                      EIDER Series
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-neutral-gray transition-transform duration-200 ${
                        activeDropdown === 'eider' ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  <p className="text-neutral-gray mt-2">
                    Eco-friendly sustainable solutions
                  </p>
                </div>
              </div>

              {/* EIDER Dropdown */}
              {activeDropdown === 'eider' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                  <div className="p-6">
                    <div className="grid gap-4">
                      {eiderProducts.map((product, index) => (
                        <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-12 object-cover rounded mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-neutral-dark">{product.name}</h4>
                            <p className="text-sm text-neutral-gray">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button 
                        asChild 
                        className="w-full bg-primary-green hover:bg-primary-green/90 text-white"
                      >
                        <Link href="/products?brand=eider">View All EIDER Products</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HUAYUE Brand Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src={huayueNewLogoImg}
                alt="HUAYUE Brand Logo"
                className="h-24 w-auto mx-auto"
              />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-gray leading-relaxed">
                Committed to quality and reliability, EIDER and HUAYUE PP-R products comply with ISO 15874 
                standards and are manufactured using high-quality Korean-origin PP-R resin, ensuring 
                superior strength, durability, and safety for both hot and cold water applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Industry Solutions</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Specialized packaging solutions designed for specific industry requirements and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-200">
                  <CardContent className="p-8">
                    <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">{category.title}</h3>
                    <p className="text-neutral-gray mb-4">{category.description}</p>
                    <ul className="text-neutral-gray space-y-2 mb-6 text-sm">
                      {category.products.map((product, idx) => (
                        <li key={idx}>• {product}</li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Huayue Brand Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Huayue Brand Products</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our flagship Huayue brand offers premium quality packaging solutions trusted by major global companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {huayueProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-neutral-dark mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-gray">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eider Brand Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Eider Brand Products</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our Eider brand focuses on sustainable, biodegradable packaging solutions for environmentally conscious businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eiderProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-neutral-dark mb-2">{product.name}</h4>
                  <p className="text-sm text-neutral-gray">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">Materials We Work With</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark"><strong>HDPE</strong> - High-density polyethylene for durability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark"><strong>LDPE</strong> - Low-density polyethylene for flexibility</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark"><strong>PP</strong> - Polypropylene for strength</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark"><strong>PLA</strong> - Biodegradable corn-based plastic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark"><strong>PBAT</strong> - Biodegradable synthetic polymer</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">Quality Certifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">ISO 9001</div>
                  <div className="text-sm text-neutral-gray">Quality Management</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">ISO 14001</div>
                  <div className="text-sm text-neutral-gray">Environmental Management</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">ISO 13485</div>
                  <div className="text-sm text-neutral-gray">Medical Devices</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">GMP</div>
                  <div className="text-sm text-neutral-gray">Good Manufacturing Practice</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">BRC</div>
                  <div className="text-sm text-neutral-gray">British Retail Consortium</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">GSV/C-TPAT</div>
                  <div className="text-sm text-neutral-gray">Security Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Custom Packaging Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our experienced team can develop custom packaging solutions tailored to your specific requirements. 
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-green hover:bg-gray-100 font-semibold">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green">
              <Link href="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
