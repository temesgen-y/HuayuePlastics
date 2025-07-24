import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Award, Globe, Target, Eye, Heart } from "lucide-react";

export default function AboutPage() {
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

      {/* Certifications & Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Quality Certifications
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              We maintain the highest international standards to ensure quality,
              safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Award className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  ISO Certifications
                </h3>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• ISO 9001 - Quality Management</div>
                  <div>• ISO 14001 - Environmental Management</div>
                  <div>• ISO 13485 - Medical Devices</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Industry Standards
                </h3>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• GMP - Good Manufacturing Practice</div>
                  <div>• BRC - British Retail Consortium</div>
                  <div>• QS - Quality Standard</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Globe className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">
                  Security & Food Safety
                </h3>
                <div className="space-y-2 text-sm text-neutral-gray">
                  <div>• GSV/C-TPAT - Security Standards</div>
                  <div>• Global Food Standard Certification</div>
                  <div>• DIN Standards Compliance</div>
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

      {/* Key Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Trusted by Global Leaders
            </h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              We proudly serve major logistics companies and e-commerce
              platforms worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-primary-green">
                  SF Express
                </div>
              </div>
              <p className="text-sm text-neutral-gray">Logistics Partner</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-primary-green">
                  FedEx
                </div>
              </div>
              <p className="text-sm text-neutral-gray">Global Shipping</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-primary-green">UPS</div>
              </div>
              <p className="text-sm text-neutral-gray">Courier Services</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-primary-green">
                  Amazon
                </div>
              </div>
              <p className="text-sm text-neutral-gray">E-commerce Platform</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
