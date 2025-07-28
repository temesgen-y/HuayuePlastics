import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  CheckCircle,
  ArrowRight,
  Heart,
  Truck,
  Utensils,
  Home,
  ShoppingCart,
  Leaf,
  Users,
  Headphones,
  MapPin,
  Settings,
  Shield,
  Zap,
  Package,
  DollarSign,
  Globe,
  Wrench,
  Search,
  Cog,
  TestTube,
  FileText,
} from "lucide-react";
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
              <h2 className="text-4xl font-bold text-neutral-dark mb-8">
                HUAYUE PLASTICS INDUSTRY
              </h2>

              <div className="space-y-6 text-neutral-gray leading-relaxed">
                <p>
                  HUAYUE PLASTICS INDUSTRY P.L.C. produces two major product
                  brands: EIDER and HUAYUE PP-R pipes and fittings. The factory
                  has the capability to manufacture PP-R pipes and fittings
                  ranging from 20mm to 50mm in diameter, with pressure ratings
                  of PN20 and PN16.
                </p>

                <p>
                  Committed to quality and reliability, EIDER and HUAYUE PP-R
                  products comply with ISO 15874 standards and are manufactured
                  using high- quality Korean-origin PP-R resin, ensuring
                  superior strength, durability, and safety for both hot and
                  cold water applications. HUAYUE PLASTICS INDUSTRY P.L.C.
                  operates alongside its sister company, HUAYU Textile Industry,
                  within the same industrial compound, reinforcing its
                  commitment to excellence across multiple sectors.
                </p>

                <p>
                  HUAYUE PLASTICS INDUSTRY P.L.C. operates alongside its sister
                  company, HUAYU Textile Industry, within the same industrial
                  compound, reinforcing its commitment to excellence across
                  multiple sectors.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">
                    ISO 15874 standards
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">
                    24/7 Support
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">
                    Regional delivery available across selected areas
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-neutral-dark font-medium">
                    Custom Solutions
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <Button
                  asChild
                  className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <div className="relative">
                <img
                  src="/attached_assets/slide_5_1753709644847.jpg"
                  alt="Huayue Plastics Manufacturing Facility"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose HUAYUE Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Why Choose HUAYUE PLASTICS INDUSTRY
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Key advantages that set us apart from the competition
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Premium Quality */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <Shield className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Premium Quality:
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                Manufactured using state-of-the-art technology with strict
                quality control.
              </p>
            </div>

            {/* Reliable Performance */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Reliable Performance
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                High durability and resistance against wear and tear.
              </p>
            </div>

            {/* Comprehensive Product Range */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <Package className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Comprehensive Product Range:
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                Covering all plumbing needs from piping to fittings and valves.
              </p>
            </div>

            {/* Cost-Effective Solutions */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <DollarSign className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Cost-Effective Solutions:
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                Long-lasting materials reduce maintenance and replacement costs.
              </p>
            </div>

            {/* Eco-Friendly Materials */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <Globe className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Eco-Friendly Materials:
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                Safe for potable water and environmentally sustainable.
              </p>
            </div>

            {/* Excellent Customer Support */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green/20 transition-colors duration-300">
                <Wrench className="w-8 h-8 text-primary-green" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                Excellent Customer Support
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                A dedicated team for technical assistance and sales inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Lines Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-6">
              Our Product Lines
            </h2>
            <p className="text-lg text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              HUAYUE PLASTICS INDUSTRY P.L.C. specializes in producing
              high-quality PPR pipes and fittings designed for long-lasting and
              efficient plumbing solutions. Our products are suitable for a wide
              range of applications, including residential, commercial, and
              industrial water supply systems. Manufactured with the highest
              standards, our pipes and fittings ensure superior performance,
              ease of installation, and environmental safety.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* HUAYUE Product */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-64 h-48 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/attached_assets/10_1753709644845.jpg"
                    alt="HUAYUE PPR Pipes and Fittings"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary-green mr-2" />
                  <h3 className="text-2xl font-bold text-neutral-dark">
                    HUAYUE
                  </h3>
                </div>
              </div>

              <p className="text-neutral-gray mb-6 leading-relaxed">
                HUAYUE PP-R pipes and fittings designed for extreme industrial
                conditions. Built to withstand high pressure and corrosive
                environments with exceptional durability.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">
                    High Durability: Resistant to corrosion, chemicals, and
                    scaling ensuring longevity in various applications
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">Heat Resistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">Pressure Resistance</span>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-primary-green hover:bg-primary-green/90 text-white"
              >
                <Link href="/products?brand=huayue">
                  Explore HUAYUE Products
                </Link>
              </Button>
            </div>

            {/* EIDER Product */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-64 h-48 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src="/attached_assets/14_1753709644845.jpg"
                    alt="EIDER PPR Piping Systems"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src="/attached_assets/Eider%20Logo_1753706618853.PNG"
                    alt="EIDER Brand Logo"
                    className="h-16 w-auto"
                  />
                </div>
              </div>

              <p className="text-neutral-gray mb-6 leading-relaxed">
                Precision-engineered piping systems for pharmaceutical, food
                processing, and clean energy applications. Designed for absolute
                purity and reliability.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">
                    Lightweight & Easy Installation
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">Pressure Resistance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-green mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">
                    Low Thermal Conductivity-Reduces heat loss in hot water
                    systems, improving energy efficiency
                  </span>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-primary-green hover:bg-primary-green/90 text-white"
              >
                <Link href="/products?brand=eider">Explore EIDER Systems</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Quality Assurance Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Our Quality Assurance Process
            </h2>
            <p className="text-lg text-neutral-gray">
              Rigorous testing and validation at every step
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Process Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
                    <Search className="w-5 h-5 text-primary-green mr-2" />
                    Raw Material Inspection
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    Every batch of raw materials undergoes comprehensive testing
                    before production begins.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
                    <Cog className="w-5 h-5 text-primary-green mr-2" />
                    In-Process Quality Control
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    Continuous monitoring and testing throughout the
                    manufacturing process.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
                    <TestTube className="w-5 h-5 text-primary-green mr-2" />
                    Final Product Testing
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    Complete quality verification before products leave our
                    facility.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2 flex items-center">
                    <FileText className="w-5 h-5 text-primary-green mr-2" />
                    Documentation & Traceability
                  </h3>
                  <p className="text-neutral-gray leading-relaxed">
                    Full documentation trail for complete product traceability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img
                  src="/attached_assets/slide_5_1753709644847.jpg"
                  alt="Quality Assurance Manufacturing Process"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>

                {/* Quality Badge */}
                <div className="absolute top-4 right-4 bg-primary-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ISO Certified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Trusted Clients Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-neutral-gray">
              Partnering with industry leaders worldwide
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="flex space-x-16 animate-marquee">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600 mb-1">
                    TECH
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Solutions
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ● WATER
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Works
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ≡ INFRASTRUCTURE
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Group
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    ⬛ MANUFACTURING
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Corp
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    ▲ ENERGY
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Solutions
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    — PIPELINE
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Engineering
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ◉ GLOBAL
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Trades
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600 mb-1">
                    TECH
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Solutions
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    ● WATER
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Works
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ≡ INFRASTRUCTURE
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Group
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    ⬛ MANUFACTURING
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Corp
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    ▲ ENERGY
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Solutions
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    — PIPELINE
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Engineering
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center min-w-[200px] h-24 bg-white rounded-lg shadow-sm px-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    ◉ GLOBAL
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    Trades
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-gray">
              Real experiences from industry leaders who trust our piping
              solutions
            </p>
          </div>

          {/* Testimonials Marquee */}
          <div className="relative">
            <div className="flex space-x-8 animate-marquee">
              {/* First set of testimonials */}
              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "HUAYUE pipes exceeded our expectations in both durability and
                  delivery time. A reliable partner for industrial
                  infrastructure projects."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AG
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Amanuel Getachew
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Senior Engineer, Ethioinfra Solutions
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "The EIDER fittings were critical for maintaining clean
                  standards in our pharmaceutical pipeline. Precision and
                  reliability at its best."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MT
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Dr. Meseret Taye
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Director of Operations, Medpharm Manufacturing
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "Excellent quality and on-time delivery. We've used HUAYUE
                  products in several major construction projects across
                  Africa—always with great results."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Mulugeta Kebede
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Construction Manager, Pan-African Projects Group
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "Outstanding technical support and product consistency. HUAYUE
                  has been our trusted supplier for water infrastructure
                  projects nationwide."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SA
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Solomon Assefa
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Project Director, National Water Works
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "HUAYUE pipes exceeded our expectations in both durability and
                  delivery time. A reliable partner for industrial
                  infrastructure projects."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AG
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Amanuel Getachew
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Senior Engineer, Ethioinfra Solutions
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "The EIDER fittings were critical for maintaining clean
                  standards in our pharmaceutical pipeline. Precision and
                  reliability at its best."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MT
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Dr. Meseret Taye
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Director of Operations, Medpharm Manufacturing
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "Excellent quality and on-time delivery. We've used HUAYUE
                  products in several major construction projects across
                  Africa—always with great results."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MK
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Mulugeta Kebede
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Construction Manager, Pan-African Projects Group
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 min-w-[400px] shadow-sm">
                <div className="text-6xl text-primary-green mb-4 font-serif">
                  "
                </div>
                <p className="text-neutral-gray mb-6 leading-relaxed text-lg">
                  "Outstanding technical support and product consistency. HUAYUE
                  has been our trusted supplier for water infrastructure
                  projects nationwide."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SA
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-dark">
                      Solomon Assefa
                    </div>
                    <div className="text-sm text-neutral-gray">
                      Project Director, National Water Works
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
              Comprehensive plastic packaging solutions across multiple
              industries with focus on quality, sustainability, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Cold Water PPR Pipes
                </h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• Ideal for residential and commercial plumbin</li>
                  <li>• High pressure resistance</li>
                  <li>• Smooth inner surface to reduce friction</li>
                  <li>• Corrosion and scale resistant</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                >
                  <Link href="/products?category=medical">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Truck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Hot Water PPR Pipes
                </h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• Designed to withstand high temperatures</li>
                  <li>• Perfect for central heating systems</li>
                  <li>• UV and chemical resistant</li>
                  <li>• Long service life</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                >
                  <Link href="/products?category=ecommerce">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Leaf className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Green Building Solutions
                </h3>
                <ul className="text-neutral-gray space-y-2 mb-6">
                  <li>• Energy-efficient piping systems</li>
                  <li>• Lead-free and recyclable material</li>
                  <li>• </li>
                  <li>• Eco-friendly options</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
                >
                  <Link href="/products?brand=eider">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-3 px-8"
            >
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
            Join over 50 countries worldwide that trust Huayue Group for their
            packaging needs. Get a custom quote for your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-green hover:bg-gray-100 font-semibold"
            >
              <Link href="/contact">Get Quote Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-green"
            >
              <Link href="/agency-policy">Partnership Program</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
