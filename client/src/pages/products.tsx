import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Truck, Utensils, Home, ShoppingCart, Leaf } from "lucide-react";
// Import logo images
const huayueLogoImg = "/attached_assets/huayu%20logo_1753699932333.PNG";
const eiderLogoImg = "/attached_assets/Eider%20Logo_1753699951877.PNG";
const huayueNewLogoImg = "/attached_assets/huayu%20logo_1753700294403.PNG";
const eiderNewLogoImg = "/attached_assets/Eider%20Logo_1753700658123.PNG";
const huayueLatestLogoImg = "/attached_assets/huayu%20logo_1753700785451.PNG";
const eiderLatestLogoImg = "/attached_assets/Eider%20Logo_1753700793948.PNG";
const huayueFinalLogoImg = "/attached_assets/huayu%20logo_1753701062451.PNG";
const huayueNewestLogoImg = "/attached_assets/huayu%20logo_1753701398007.PNG";

const productCategories = [
  {
    icon: Heart,
    title: "Medical Packaging",
    description: "Hospital-grade sterile packaging solutions",
    products: [
      "Commode liners",
      "Specimen bags",
      "Patient bags",
      "Medical waste bags",
    ],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "medical",
  },
  {
    icon: Truck,
    title: "E-commerce Packaging",
    description: "Reliable shipping and mailing solutions",
    products: [
      "Express bags",
      "Mailing bags",
      "Courier pouches",
      "Poly mailers",
    ],
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "ecommerce",
  },
  {
    icon: Utensils,
    title: "Food Packaging",
    description: "Food-grade safe storage solutions",
    products: [
      "Food-grade bags",
      "Zipper bags",
      "Storage bags",
      "Fresh produce bags",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "food",
  },
  {
    icon: Home,
    title: "Household Products",
    description: "Everyday home storage and waste solutions",
    products: [
      "Trash bags",
      "Garbage bags",
      "Storage solutions",
      "Laundry bags",
    ],
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "household",
  },
  {
    icon: ShoppingCart,
    title: "Retail Packaging",
    description: "Consumer-friendly shopping solutions",
    products: [
      "Shopping bags",
      "T-shirt bags",
      "Handle bags",
      "Drawstring bags",
    ],
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "retail",
  },
  {
    icon: Leaf,
    title: "Biodegradable Solutions",
    description: "Eco-friendly sustainable packaging",
    products: [
      "PLA+PBAT materials",
      "Corn starch based",
      "Compostable bags",
      "Eco-friendly options",
    ],
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "biodegradable",
  },
];

const huayueProducts = [
  {
    name: "Zip Lock Bags",
    description: "Food-grade, resealable solutions",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "T-Shirt Bags",
    description: "Retail shopping solutions",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Medical Bags",
    description: "Hospital-grade sterile packaging",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Express Bags",
    description: "E-commerce shipping solutions",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
];

const eiderProducts = [
  {
    name: "Biodegradable Bags",
    description: "Eco-friendly compostable solutions",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Sustainable Packaging",
    description: "PLA+PBAT material blend",
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Green Solutions",
    description: "Corn starch based materials",
    image:
      "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
  {
    name: "Earth-Friendly",
    description: "Certified compostable options",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
  },
];

export default function ProductsPage() {
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
        </div>
      </section>

      {/* HUAYUE Brand Section */}
      <section className="pt-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Quality Statement */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <img
                src={huayueNewestLogoImg}
                alt="HUAYUE Brand Logo"
                className="h-20 w-auto mx-auto"
              />
            </div>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-gray-600 leading-relaxed">
                Committed to quality and reliability, EIDER and HUAYUE PP-R
                products comply with ISO 15874 standards and are manufactured
                using high-quality Korean-origin PP-R resin, ensuring superior
                strength, durability, and safety for both hot and cold water
                applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EIDER Brand Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src={eiderLatestLogoImg}
                alt="EIDER Brand Logo"
                className="h-24 w-auto mx-auto"
              />
            </div>
            
            {/* Enhanced EIDER Description Section */}
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-12 mb-12">
              <div className="flex flex-col items-center">
                {/* Bird Icon SVG */}
                <div className="mb-8">
                  <svg 
                    width="60" 
                    height="40" 
                    viewBox="0 0 60 40" 
                    fill="none" 
                    className="text-primary-green"
                  >
                    <path 
                      d="M45 15c-2-8-8-12-15-12-7 0-13 4-15 12-5 2-8 6-8 11s3 9 8 11c2 8 8 12 15 12 7 0 13-4 15-12 5-2 8-6 8-11s-3-9-8-11z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <circle cx="35" cy="20" r="2" fill="currentColor"/>
                    <path d="M25 25c2 2 5 2 7 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Sustainable Packaging Solutions
                </h3>
                
                <p className="text-lg text-neutral-gray leading-relaxed text-center">
                  EIDER specializes in biodegradable and environmentally sustainable packaging solutions. 
                  Our products are made from PLA+PBAT+corn starch materials that are fully compostable, 
                  providing eco-friendly alternatives without compromising on strength and durability.
                </p>
                
                <div className="mt-8 grid md:grid-cols-3 gap-6 w-full">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-secondary-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="text-white w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-neutral-dark mb-2">100% Compostable</h4>
                    <p className="text-sm text-neutral-gray">Fully biodegradable materials</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="text-white w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Eco-Friendly</h4>
                    <p className="text-sm text-neutral-gray">Sustainable production process</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShoppingCart className="text-white w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Durable</h4>
                    <p className="text-sm text-neutral-gray">Strong and reliable packaging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Specialized packaging solutions designed for specific industry
              requirements and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-200"
                >
                  <CardContent className="p-8">
                    <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                      {category.title}
                    </h3>
                    <p className="text-neutral-gray mb-4">
                      {category.description}
                    </p>
                    <ul className="text-neutral-gray space-y-2 mb-6 text-sm">
                      {category.products.map((product, idx) => (
                        <li key={idx}>• {product}</li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                    >
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
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Huayue Brand Products
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our flagship Huayue brand offers premium quality packaging
              solutions trusted by major global companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {huayueProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-neutral-dark mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    {product.description}
                  </p>
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
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Eider Brand Products
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our Eider brand focuses on sustainable, biodegradable packaging
              solutions for environmentally conscious businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eiderProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-neutral-dark mb-2">
                    {product.name}
                  </h4>
                  <p className="text-sm text-neutral-gray">
                    {product.description}
                  </p>
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
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Materials We Work With
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark">
                    <strong>HDPE</strong> - High-density polyethylene for
                    durability
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark">
                    <strong>LDPE</strong> - Low-density polyethylene for
                    flexibility
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark">
                    <strong>PP</strong> - Polypropylene for strength
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark">
                    <strong>PLA</strong> - Biodegradable corn-based plastic
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-green rounded-full mr-4"></div>
                  <span className="text-neutral-dark">
                    <strong>PBAT</strong> - Biodegradable synthetic polymer
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Quality Certifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">
                    ISO 9001
                  </div>
                  <div className="text-sm text-neutral-gray">
                    Quality Management
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">
                    ISO 14001
                  </div>
                  <div className="text-sm text-neutral-gray">
                    Environmental Management
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">
                    ISO 13485
                  </div>
                  <div className="text-sm text-neutral-gray">
                    Medical Devices
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">GMP</div>
                  <div className="text-sm text-neutral-gray">
                    Good Manufacturing Practice
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">BRC</div>
                  <div className="text-sm text-neutral-gray">
                    British Retail Consortium
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="font-semibold text-primary-green">
                    GSV/C-TPAT
                  </div>
                  <div className="text-sm text-neutral-gray">
                    Security Standards
                  </div>
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
            Our experienced team can develop custom packaging solutions tailored
            to your specific requirements. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-green hover:bg-gray-100 font-semibold"
            >
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-green"
            >
              <Link href="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
