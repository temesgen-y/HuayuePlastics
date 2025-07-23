import Layout from "@/components/layout";
import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock, Building, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout 
      title="Contact Us - Huayue Plastics Industry"
      description="Get in touch with Huayue Group for inquiries, quotes, or partnership opportunities. Contact our Shanghai headquarters or global offices for plastic packaging solutions."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, quotes, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Get in touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-green rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-1">Shanghai Headquarters</h4>
                      <p className="text-neutral-gray">
                        No.228 ZhaiXing Rd, XinSheng Industrial zone,<br />
                        ZheLin Town, FengXian District, Shanghai, China
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary-green rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-1">Phone</h4>
                      <p className="text-neutral-gray">+86 21 5741 2345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent-green rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-1">Email</h4>
                      <p className="text-neutral-gray">info@huayueplastics.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-green rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      <Clock className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark mb-1">Business Hours</h4>
                      <p className="text-neutral-gray">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div>
                <h4 className="text-lg font-semibold text-neutral-dark mb-4">Global Presence</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Building className="text-primary-green h-4 w-4 mr-2" />
                    <div>
                      <div className="font-medium text-neutral-dark">Jiaxing Factory</div>
                      <div className="text-neutral-gray">China Manufacturing</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="text-primary-green h-4 w-4 mr-2" />
                    <div>
                      <div className="font-medium text-neutral-dark">Cambodia Facility</div>
                      <div className="text-neutral-gray">Southeast Asia Operations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-neutral-dark mb-3">What to Expect</h4>
                <div className="space-y-3 text-sm text-neutral-gray">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                    <span>Dedicated account manager assignment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                    <span>Custom quote preparation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                    <span>Technical consultation available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Find Our Shanghai Headquarters</h2>
            <p className="text-lg text-neutral-gray">
              Located in the heart of Shanghai's manufacturing district
            </p>
          </div>
          
          {/* Map placeholder - would typically integrate with Google Maps or similar */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">Interactive Map</h3>
                <p className="text-neutral-gray">
                  No.228 ZhaiXing Rd, XinSheng Industrial zone,<br />
                  ZheLin Town, FengXian District, Shanghai, China
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our experienced team is ready to help you find the perfect packaging solution. 
            Contact us today for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+862157412345"
              className="bg-white text-primary-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: +86 21 5741 2345
            </a>
            <a 
              href="mailto:info@huayueplastics.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-green font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
