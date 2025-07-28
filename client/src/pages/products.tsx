import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Truck, Utensils, Home, ShoppingCart, Leaf } from "lucide-react";
// Import logo images
const huayueLogoImg = "/attached_assets/huayu%20logo_1753699932333.PNG";
const eiderLogoImg = "/attached_assets/Eider_Logo.PNG";
const huayueNewLogoImg = "/attached_assets/huayu%20logo_1753700294403.PNG";
const eiderNewLogoImg = "/attached_assets/Eider%20Logo_1753700658123.PNG";
const huayueLatestLogoImg = "/attached_assets/huayu%20logo_1753700785451.PNG";
const eiderLatestLogoImg = "/attached_assets/Eider%20Logo_1753700793948.PNG";
const huayueFinalLogoImg = "/attached_assets/huayu%20logo_1753701062451.PNG";
const huayueNewestLogoImg = "/attached_assets/Eider_ Logo.PNG";

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
      "/attached_assets/new1_1753709644845.png",
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
      "/attached_assets/new2_1753709644846.png",
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
      "/attached_assets/slide1_1753709644847.PNG",
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
      "/attached_assets/PPR 1_1753709644846.jpg",
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
      "/attached_assets/PPR 2_1753709644846.jpg",
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
      "/attached_assets/PPR_1753709644847.jpg",
    category: "biodegradable",
  },
];

const huayueProducts = [
  {
    name: "Zip Lock Bags",
    description: "Food-grade, resealable solutions",
    image:
      "/attached_assets/new1_1753709644845.png",
  },
  {
    name: "T-Shirt Bags",
    description: "Retail shopping solutions",
    image:
      "/attached_assets/new2_1753709644846.png",
  },
  {
    name: "Medical Bags",
    description: "Hospital-grade sterile packaging",
    image:
      "/attached_assets/slide1_1753709644847.PNG",
  },
  {
    name: "Express Bags",
    description: "E-commerce shipping solutions",
    image:
      "/attached_assets/PPR 1_1753709644846.jpg",
  },
];

const eiderProducts = [
  {
    name: "Biodegradable Bags",
    description: "Eco-friendly compostable solutions",
    image:
      "/attached_assets/PPR 2_1753709644846.jpg",
  },
  {
    name: "Sustainable Packaging",
    description: "PLA+PBAT material blend",
    image:
      "/attached_assets/PPR_1753709644847.jpg",
  },
  {
    name: "Green Solutions",
    description: "Corn starch based materials",
    image:
      "/attached_assets/slide_5_1753709644847.jpg",
  },
  {
    name: "Earth-Friendly",
    description: "Certified compostable options",
    image:
      "/attached_assets/slide1_1753709644847.PNG",
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

          {/* Our Product Range */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of industrial piping solutions
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Industrial Plastic Pipes */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/new1_1753709644845.png"
                  alt="Industrial Plastic Pipes"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                Industrial Plastic Pipes
              </h3>
              <p className="text-gray-600">
                High-grade HUAYUE PP-R pipes and fittings for industrial
                applications
              </p>
            </div>

            {/* Specialized Fittings */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/new2_1753709644846.png"
                  alt="Specialized Fittings"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                Specialized Fittings
              </h3>
              <p className="text-gray-600">
                Custom fittings for complex industrial systems
              </p>
            </div>

            {/* High-Pressure Systems */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/PPR 1_1753709644846.jpg"
                  alt="High-Pressure Systems"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                High-Pressure Systems
              </h3>
              <p className="text-gray-600">
                Pipes designed for extreme pressure environments
              </p>
            </div>

            {/* Heavy-Duty Flanges */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/PPR 2_1753709644846.jpg"
                  alt="Heavy-Duty Flanges"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                Heavy-Duty Flanges
              </h3>
              <p className="text-gray-600">
                Industrial flanges for critical connections
              </p>
            </div>

            {/* Welded Plastic Tubes */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/slide_5_1753709644847.jpg"
                  alt="Welded Plastic Tubes"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                Welded Plastic Tubes
              </h3>
              <p className="text-gray-600">
                ERW and LSAW tubes for structural applications
              </p>
            </div>

            {/* Carbon Plastic Assemblies */}
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/attached_assets/PPR_1753709644847.jpg"
                  alt="Carbon Plastic Assemblies"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-3">
                Carbon Plastic Assemblies
              </h3>
              <p className="text-gray-600">
                Complete piping assemblies for industrial plants
              </p>
            </div>
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
