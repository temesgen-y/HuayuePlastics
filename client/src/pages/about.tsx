import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Award, Globe, Target, Eye, Heart, ArrowRight, Star, Lightbulb, Shield, Leaf, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalImage(null);
      }
    };

    if (modalImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [modalImage]);

  const certifications = [
    {
      id: 1,
      title: "50 Year Warranty",
      description: "PP-R Built to Last, Guaranteed!",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 2,
      title: "Sole Authorized Distributor",
      description: "WHEM Trading PLC Certificate",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 3,
      title: "ECAE Test Report - 63mm",
      description: "PPR Pipe Testing Results",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 4,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 5,
      title: "ISO 14001",
      description: "Environmental Management",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 6,
      title: "ISO 13485",
      description: "Medical Devices Quality",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 7,
      title: "CE Marking",
      description: "European Conformity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 8,
      title: "FDA Approval",
      description: "Food Grade Materials",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    },
    {
      id: 9,
      title: "GMP Certificate",
      description: "Good Manufacturing Practice",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=80"
    }
  ];

  return (
    <Layout
      title="About Us - Huayue Plastics Industry"
      description="Learn about Huayue Group's 25+ year journey as a leading Asian plastic packaging manufacturer. Discover our facilities, certifications, and commitment to sustainability."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Huayue Group
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            25+ years of excellence in plastic packaging manufacturing, serving
            over 50 countries worldwide with innovative and sustainable
            solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-dark mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                Established in 2015, HUAYUE PLASTICS INDUSTRY P.L.C. was founded
                with a vision to support Ethiopia’s con struction sector,
                particularly in water transportation solutions. Specializing in
                the manufacturing of PP-R pipes and fittings, the company is
                strategically located in Kombolcha, Ethiopia
              </p>
              <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                Our commitment to innovation, quality, and customer satisfaction
                has driven our expansion into specialized pipe manufacturing
                including HUAYUE heavy-duty series and EIDER precision systems
                for critical applications.
              </p>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                HUAYUE PLASTICS INDUSTRY P.L.C. produces two major product
                brands: EIDER and HUAYUE PP-R pipes and fittings. The factory
                has the capability to manufacture PP-R pipes and fittings
                ranging from 20mm to 50mm in diameter, with pressure ratings of
                PN20 and PN16.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-1">2015 - Company Founded</h4>
                    <p className="text-neutral-gray">HUAYUE PLASTICS INDUSTRY P.L.C. established in Kombolcha, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-1">2017 - EIDER Brand Launch</h4>
                    <p className="text-neutral-gray">Introduced EIDER precision pipe systems for critical applications</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-1">2020 - Capacity Expansion</h4>
                    <p className="text-neutral-gray">Expanded manufacturing capabilities to include 20mm-50mm diameter range</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-dark mb-1">2023 - Quality Certifications</h4>
                    <p className="text-neutral-gray">Achieved ISO 9001:2015 and multiple international quality standards</p>
                  </div>
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
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Target className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Mission
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  To deliver innovative, high-quality industrial pipe solutions that enable our customers to build safe, efficient, and sustainable infrastructure for global markets.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Eye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Vision
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  To be the leading industrial pipe manufacturer globally, recognized for innovation, sustainability, and unwavering commitment to customer success. Look forward to the future.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">
                  Values
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  Quality, integrity, innovation, and customer-centricity guide everything we do. We believe in building lasting partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Product Lines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Product Lines
            </h2>
            <p className="text-lg text-neutral-gray max-w-4xl mx-auto">
              Discover our comprehensive range of industrial piping solutions designed for various applications and industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* HUAYUE Product */}
            <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="p-8">
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
                    alt="HUAYUE Heavy-duty Steel Pipes"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-green mr-3" />
                    <h3 className="text-2xl font-bold text-neutral-dark">HUAYUE</h3>
                  </div>
                  <p className="text-neutral-gray mb-6">
                    Heavy-duty steel pipes and fittings designed for extreme industrial conditions.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">High-pressure applications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">Corrosion resistant coating</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">20-50mm diameter range</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">PN16 & PN20 pressure ratings</span>
                  </div>
                </div>

                <button className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                  View HUAYUE Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </Card>

            {/* EIDER Product */}
            <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="p-8">
                <div className="mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80"
                    alt="EIDER Precision Piping Systems"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-green mr-3" />
                    <h3 className="text-2xl font-bold text-neutral-dark">EIDER</h3>
                  </div>
                  <p className="text-neutral-gray mb-6">
                    Precision-engineered piping systems for pharmaceutical and clean energy industries.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">Pharmaceutical-grade materials</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">Food-safe coatings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">FDA approved components</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                    <span className="text-neutral-dark">Clean room certified</span>
                  </div>
                </div>

                <button className="bg-primary-green hover:bg-primary-green/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center">
                  View EIDER Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Statement */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-neutral-gray max-w-4xl mx-auto">
              Both product lines meet international quality standards and are manufactured in our state-of-the-art facility in Kombolcha, Ethiopia
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              The principles that guide our operations and decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Star className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Excellence
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                We strive for excellence in everything we do, from product quality to customer service.
              </p>
            </div>

            {/* Innovation */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Innovation
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                We continuously seek new ways to improve our products and processes.
              </p>
            </div>

            {/* Integrity */}
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Integrity
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                We conduct business ethically and transparently, building trust with all stakeholders.
              </p>
            </div>

            {/* Sustainability */}
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Leaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-4">
                Sustainability
              </h3>
              <p className="text-neutral-gray leading-relaxed">
                We are committed to environmentally responsible manufacturing and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Trusted quality, proven performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card 
                key={cert.id} 
                className="hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                onClick={() => setModalImage(cert.image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-gray">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Leadership Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Alemayehu Tadesse */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Alemayehu Tadesse - Chief Executive Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">
                Alemayehu Tadesse
              </h3>
              <p className="text-primary-green font-medium mb-4">
                Chief Executive Officer
              </p>
              <p className="text-neutral-gray leading-relaxed">
                25+ years in industrial manufacturing and global business development.
              </p>
            </div>

            {/* Meron Habtamu */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Meron Habtamu - Chief Technology Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">
                Meron Habtamu
              </h3>
              <p className="text-primary-green font-medium mb-4">
                Chief Technology Officer
              </p>
              <p className="text-neutral-gray leading-relaxed">
                Expert in materials engineering and product innovation with 20+ years experience.
              </p>
            </div>

            {/* Dawit Kebede */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                    alt="Dawit Kebede - Chief Operations Officer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-dark mb-2">
                Dawit Kebede
              </h3>
              <p className="text-primary-green font-medium mb-4">
                Chief Operations Officer
              </p>
              <p className="text-neutral-gray leading-relaxed">
                Operations excellence and supply chain optimization specialist with global expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Global Operations
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our strategic locations across Asia enable us to serve global
              markets efficiently while maintaining competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Shanghai Headquarters
                </h3>
                <p className="text-neutral-gray mb-4">
                  No.228 ZhaiXing Rd, XinSheng Industrial zone, ZheLin Town,
                  FengXian District, Shanghai, China
                </p>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• Main operations center</div>
                  <div>• 300+ employees</div>
                  <div>• R&D department</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Jiaxing Factory
                </h3>
                <p className="text-neutral-gray mb-4">
                  Jiaxing Huayue Packaging Products Co., Ltd.
                </p>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• High-volume production</div>
                  <div>• Advanced machinery</div>
                  <div>• Quality control center</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Globe className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Cambodia Facility
                </h3>
                <p className="text-neutral-gray mb-4">
                  Cambodia Huakang Packaging Technology Co., Ltd.
                </p>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• Southeast Asia operations</div>
                  <div>• Tariff mitigation strategy</div>
                  <div>• Regional distribution hub</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Sustainability Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Sustainability Commitment
              </h2>
              <p className="text-lg text-neutral-gray mb-6 leading-relaxed">
                Environmental responsibility is central to our business
                philosophy. We are committed to developing sustainable packaging
                solutions that minimize environmental impact while maintaining
                the highest quality standards.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-neutral-dark mb-2">
                    Biodegradable Materials
                  </h4>
                  <p className="text-neutral-gray">
                    Our Eider brand specializes in PLA+PBAT+corn starch/calcium
                    powder materials that are fully compostable and
                    environmentally friendly.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-dark mb-2">
                    Waste Reduction
                  </h4>
                  <p className="text-neutral-gray">
                    Advanced manufacturing processes minimize waste and maximize
                    material efficiency throughout our production cycle.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-dark mb-2">
                    Green Manufacturing
                  </h4>
                  <p className="text-neutral-gray">
                    Energy-efficient facilities and sustainable practices reduce
                    our carbon footprint while maintaining production
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Sustainable packaging and environmental responsibility"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={modalImage}
              alt="Certification"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}
