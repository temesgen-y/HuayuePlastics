import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Award, Globe, Leaf } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Huayue Launches New Biodegradable Packaging Line",
    excerpt: "Our latest innovation in sustainable packaging solutions features advanced PLA+PBAT materials, setting new industry standards for environmental responsibility.",
    date: "December 15, 2024",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Leaf
  },
  {
    id: 2,
    title: "Expanding Operations to Southeast Asia",
    excerpt: "Cambodia facility expansion increases production capacity by 40%, strengthening our position in the ASEAN market and enhancing global supply chain resilience.",
    date: "November 28, 2024",
    category: "Business Expansion",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Globe
  },
  {
    id: 3,
    title: "ISO 13485 Certification Renewed",
    excerpt: "Huayue Group successfully renews ISO 13485 certification, reinforcing our commitment to medical device packaging quality and safety standards.",
    date: "October 12, 2024",
    category: "Quality Assurance",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Award
  },
  {
    id: 4,
    title: "Partnership with Major E-commerce Platforms",
    excerpt: "New strategic partnerships with leading e-commerce platforms drive significant growth in our express packaging segment, serving millions of online orders.",
    date: "September 18, 2024",
    category: "Partnerships",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Globe
  },
  {
    id: 5,
    title: "Research & Development Center Opens in Shanghai",
    excerpt: "New R&D facility focuses on developing next-generation sustainable packaging materials and advanced manufacturing technologies.",
    date: "August 22, 2024",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Award
  },
  {
    id: 6,
    title: "Environmental Impact Reduction Initiative",
    excerpt: "Comprehensive sustainability program reduces manufacturing carbon footprint by 30% while maintaining production efficiency and quality standards.",
    date: "July 15, 2024",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    icon: Leaf
  }
];

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <Layout 
      title="News & Updates - Huayue Plastics Industry"
      description="Stay informed about Huayue Group's latest developments, industry insights, sustainability initiatives, and company milestones in plastic packaging manufacturing."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay informed about our latest developments, industry insights, and company milestones.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <span className="bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center">
                      <featuredArticle.icon className="text-white text-xl" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-neutral-gray w-4 h-4 mr-2" />
                    <span className="text-sm text-neutral-gray">{featuredArticle.date}</span>
                    <span className="mx-2 text-neutral-gray">•</span>
                    <span className="text-sm text-primary-green font-medium">{featuredArticle.category}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-neutral-dark mb-4">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-lg text-neutral-gray leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <Button className="bg-primary-green hover:bg-secondary-green text-white self-start">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Recent Articles</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Explore our latest updates on business developments, sustainability initiatives, and industry innovations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Card key={article.id} className="hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-primary-green rounded-full w-10 h-10 flex items-center justify-center">
                        <IconComponent className="text-white text-lg" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-neutral-gray w-4 h-4 mr-2" />
                      <span className="text-sm text-neutral-gray">{article.date}</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="bg-gray-100 text-primary-green px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-gray text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Explore by Category</h2>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Find news and updates that matter most to your business interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Leaf className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2">Sustainability</h3>
                <p className="text-sm text-neutral-gray">Environmental initiatives and green solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-secondary-green rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Globe className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2">Global Expansion</h3>
                <p className="text-sm text-neutral-gray">New markets and facility developments</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-accent-green rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2">Awards & Recognition</h3>
                <p className="text-sm text-neutral-gray">Industry accolades and certifications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="bg-primary-green rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <ArrowRight className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-2">Product Innovation</h3>
                <p className="text-sm text-neutral-gray">New products and technology advances</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news, product updates, and industry insights directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-dark focus:outline-none focus:ring-2 focus:ring-accent-green"
            />
            <Button className="bg-accent-green hover:bg-green-500 text-white font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
