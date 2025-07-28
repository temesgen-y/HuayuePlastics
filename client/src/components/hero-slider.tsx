import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface HeroSlide {
  id: number;
  image: string;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/attached_assets/slide%202.jpg",
    headline: "HUAYUE PLASTICS INDUSTRY",
    subtext: "Leading manufacturer of premium plastic pipes and industrial solutions",
    ctaText: "View Products",
    ctaLink: "/products",
  },
  {
    id: 2,
    image: "/attached_assets/slide%203.jpg",
    headline: "WAREHOUSE EXCELLENCE",
    subtext: "Organized inventory management ensuring quality and quick delivery",
    ctaText: "Learn More",
    ctaLink: "/about",
  },
  {
    id: 3,
    image: "/attached_assets/slide%204.jpg",
    headline: "PRECISION MANUFACTURING",
    subtext: "Advanced white PPR pipes manufactured to highest quality standards",
    ctaText: "Explore Products",
    ctaLink: "/products",
  },
  {
    id: 4,
    image: "/attached_assets/slide%20-5.jpg",
    headline: "PREMIUM EIDER PIPES",
    subtext: "High-performance green PPR piping systems for professional applications",
    ctaText: "View Catalog",
    ctaLink: "/products",
  },
  {
    id: 5,
    image: "/attached_assets/slide%20-6.jpg",
    headline: "SHOWROOM FACILITY",
    subtext: "Modern display center showcasing our complete product range",
    ctaText: "Visit Showroom",
    ctaLink: "/about",
  },
  {
    id: 6,
    image: "/attached_assets/slide%20-7.jpg",
    headline: "COMPREHENSIVE INVENTORY",
    subtext: "Extensive stock of pipes and fittings ready for immediate delivery",
    ctaText: "Check Stock",
    ctaLink: "/products",
  },
  {
    id: 7,
    image: "/attached_assets/slide%20-8.jpg",
    headline: "QUALITY CONTROL",
    subtext: "Every pipe marked with specifications ensuring consistent performance",
    ctaText: "Quality Standards",
    ctaLink: "/about",
  },
  {
    id: 8,
    image: "/attached_assets/slide%20-9.jpg",
    headline: "PROFESSIONAL DISPLAY",
    subtext: "Modern showroom featuring EIDER and HUAYUE branded products",
    ctaText: "Learn About Us",
    ctaLink: "/about",
  },
  {
    id: 9,
    image: "/attached_assets/slide%20-10.jpg",
    headline: "EIDER BRAND EXCELLENCE",
    subtext: "Premium branded PPR pipes with guaranteed quality certification",
    ctaText: "EIDER Products",
    ctaLink: "/products",
  },
  {
    id: 10,
    image: "/attached_assets/slide%20-11.jpg",
    headline: "DETAILED SPECIFICATIONS",
    subtext: "Every product clearly marked with technical details and standards",
    ctaText: "View Specs",
    ctaLink: "/products",
  },
  {
    id: 11,
    image: "/attached_assets/slide%20-12.jpg",
    headline: "INDUSTRIAL GRADE PIPES",
    subtext: "Heavy-duty piping solutions for demanding industrial applications",
    ctaText: "Industrial Solutions",
    ctaLink: "/products",
  },
  {
    id: 12,
    image: "/attached_assets/slide%20-13.jpg",
    headline: "ADVANCED TECHNOLOGY",
    subtext: "State-of-the-art manufacturing processes ensuring superior quality",
    ctaText: "Technology",
    ctaLink: "/about",
  },
  {
    id: 13,
    image: "/attached_assets/slide%20-14.jpg",
    headline: "QUALITY ASSURANCE",
    subtext: "Rigorous testing and quality control at every stage of production",
    ctaText: "Quality Control",
    ctaLink: "/about",
  },
  {
    id: 14,
    image: "/attached_assets/slide%20-15.jpg",
    headline: "PRODUCT EXCELLENCE",
    subtext: "Premium materials and precision engineering in every product",
    ctaText: "View Products",
    ctaLink: "/products",
  },
  {
    id: 15,
    image: "/attached_assets/slide%20-16.jpg",
    headline: "INNOVATION FOCUS",
    subtext: "Continuous development of new solutions for evolving market needs",
    ctaText: "Innovation",
    ctaLink: "/about",
  },
  {
    id: 16,
    image: "/attached_assets/slide-%2017.jpg",
    headline: "MARKET LEADERSHIP",
    subtext: "Setting industry standards with reliable and durable products",
    ctaText: "Leadership",
    ctaLink: "/about",
  },
  {
    id: 17,
    image: "/attached_assets/slide%20-18.jpg",
    headline: "GLOBAL REACH",
    subtext: "Serving customers worldwide with reliable plastic piping solutions",
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.headline}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.subtext}
                </p>
                <Link href={slide.ctaLink}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                    {slide.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}