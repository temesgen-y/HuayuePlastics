import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Handshake, TrendingUp, Truck, CheckCircle, Users, Award } from "lucide-react";

export default function AgencyPolicyPage() {
  return (
    <Layout 
      title="Agency Policy - Huayue Plastics Industry Partnership Program"
      description="Join Huayue Group's global partnership program. Explore exclusive territory rights, marketing support, and flexible logistics for authorized distributors and agencies."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partnership Program
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join our global network of distributors and agencies. Build a successful business with Asia's leading plastic packaging manufacturer.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Partnership Benefits</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Our commitment to partners, distributors, and global agencies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Handshake className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Exclusive Territory Rights</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Protected market territories for authorized distributors and agencies with exclusive selling rights in designated regions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Marketing Support</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Comprehensive marketing materials, training programs, and promotional support to help you succeed in your market.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Truck className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Flexible Logistics</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Global shipping solutions with competitive pricing, reliable delivery, and flexible payment terms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-primary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Technical Support</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Dedicated technical team provides product training, application guidance, and ongoing support.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Award className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Quality Assurance</h3>
                <p className="text-neutral-gray leading-relaxed">
                  All products backed by ISO certifications and comprehensive quality control processes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="bg-accent-green rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Competitive Pricing</h3>
                <p className="text-neutral-gray leading-relaxed">
                  Volume-based pricing structure with attractive margins for partners and bulk order discounts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements & Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-8">Partnership Requirements</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="text-accent-green text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Minimum Annual Purchase Commitment</h4>
                    <p className="text-neutral-gray">
                      Established minimum order quantities to ensure mutual business growth and market development.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-accent-green text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Established Distribution Network</h4>
                    <p className="text-neutral-gray">
                      Proven distribution channels and customer base in the target market with logistics capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-accent-green text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Local Market Expertise</h4>
                    <p className="text-neutral-gray">
                      Deep understanding of local market conditions, regulations, and customer preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-accent-green text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Financial Stability</h4>
                    <p className="text-neutral-gray">
                      Demonstrated financial stability and creditworthiness to support ongoing business operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-accent-green text-xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Brand Standards Commitment</h4>
                    <p className="text-neutral-gray">
                      Commitment to maintaining Huayue brand standards and quality reputation in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-8">Application Process</h2>
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                      <h4 className="font-semibold text-neutral-dark">Initial Application</h4>
                    </div>
                    <p className="text-neutral-gray text-sm ml-11">
                      Submit partnership application with company information and market analysis.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-secondary-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                      <h4 className="font-semibold text-neutral-dark">Qualification Review</h4>
                    </div>
                    <p className="text-neutral-gray text-sm ml-11">
                      Our team reviews your application and conducts financial and market assessment.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-accent-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                      <h4 className="font-semibold text-neutral-dark">Partnership Meeting</h4>
                    </div>
                    <p className="text-neutral-gray text-sm ml-11">
                      Face-to-face or virtual meeting to discuss terms, territory, and expectations.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                      <h4 className="font-semibold text-neutral-dark">Agreement Signing</h4>
                    </div>
                    <p className="text-neutral-gray text-sm ml-11">
                      Finalize partnership agreement and begin onboarding process.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button asChild className="w-full bg-primary-green hover:bg-secondary-green text-white font-semibold">
                    <Link href="/contact">Apply for Partnership</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Partnership Levels</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Choose the partnership level that best fits your business goals and market presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-primary-green transition-colors duration-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">Regional Distributor</h3>
                <div className="text-3xl font-bold text-primary-green mb-6">$50K+</div>
                <div className="text-sm text-neutral-gray mb-6">Annual commitment</div>
                <ul className="space-y-3 text-left text-neutral-gray">
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Exclusive regional territory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>10-15% volume discount</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Marketing support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Technical training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary-green bg-primary-green text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">National Partner</h3>
                <div className="text-3xl font-bold mb-6">$200K+</div>
                <div className="text-sm text-gray-200 mb-6">Annual commitment</div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Exclusive country territory</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>15-25% volume discount</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Co-marketing programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Custom product development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-primary-green transition-colors duration-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">Strategic Alliance</h3>
                <div className="text-3xl font-bold text-primary-green mb-6">$500K+</div>
                <div className="text-sm text-neutral-gray mb-6">Annual commitment</div>
                <ul className="space-y-3 text-left text-neutral-gray">
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Multi-country territories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>25%+ volume discount</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Joint venture opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Priority production scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-accent-green w-4 h-4 mr-2" />
                    <span>Strategic planning support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Ready to Join Our Global Network?
          </h2>
          <p className="text-xl text-neutral-gray mb-8 max-w-3xl mx-auto">
            Take the first step towards a profitable partnership with Asia's leading plastic packaging manufacturer. 
            Our team is ready to discuss opportunities in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-green hover:bg-secondary-green text-white font-semibold">
              <Link href="/contact">Start Partnership Application</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
              <Link href="/products">View Product Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
