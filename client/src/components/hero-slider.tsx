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
    image: "/attached_assets/Slide1_1753710378148.jpg",
    headline: "HUAYUE PLASTICS INDUSTRY",
    subtext: "Leading manufacturer of premium plastic pipes and industrial solutions",
    ctaText: "View Products",
    ctaLink: "/products"
  },
  {
    id: 2,
    image: "/attached_assets/slide 2_1753710378143.jpg",
    headline: "WAREHOUSE EXCELLENCE",
    subtext: "Organized inventory management ensuring quality and quick delivery",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  {
    id: 3,
    image: "/attached_assets/slide 3_1753710378143.jpg",
    headline: "PRECISION MANUFACTURING",
    subtext: "Advanced white PPR pipes manufactured to highest quality standards",
    ctaText: "Explore Products",
    ctaLink: "/products"
  },
  {
    id: 4,
    image: "/attached_assets/slide 4_1753710378144.jpg",
    headline: "PREMIUM EIDER PIPES",
    subtext: "High-performance green PPR piping systems for professional applications",
    ctaText: "View Catalog",
    ctaLink: "/products"
  },
  {
    id: 5,
    image: "/attached_assets/slide 5_1753710378144.jpg",
    headline: "SHOWROOM FACILITY",
    subtext: "Modern display center showcasing our complete product range",
    ctaText: "Visit Showroom",
    ctaLink: "/about"
  },
  {
    id: 6,
    image: "/attached_assets/slide 6_1753710378144.jpg",
    headline: "COMPREHENSIVE INVENTORY",
    subtext: "Extensive stock of pipes and fittings ready for immediate delivery",
    ctaText: "Check Stock",
    ctaLink: "/products"
  },
  {
    id: 7,
    image: "/attached_assets/slide 7_1753710378144.jpg",
    headline: "QUALITY CONTROL",
    subtext: "Every pipe marked with specifications ensuring consistent performance",
    ctaText: "Quality Standards",
    ctaLink: "/about"
  },
  {
    id: 8,
    image: "/attached_assets/slide 8_1753710378145.jpg",
    headline: "PROFESSIONAL DISPLAY",
    subtext: "Modern showroom featuring EIDER and HUAYUE branded products",
    ctaText: "Learn About Us",
    ctaLink: "/about"
  },
  {
    id: 9,
    image: "/attached_assets/slide 9_1753710378145.jpg",
    headline: "EIDER BRAND EXCELLENCE",
    subtext: "Premium branded PPR pipes with guaranteed quality certification",
    ctaText: "EIDER Products",
    ctaLink: "/products"
  },
  {
    id: 10,
    image: "/attached_assets/slide 10_1753710378145.jpg",
    headline: "DETAILED SPECIFICATIONS",
    subtext: "Every product clearly marked with technical details and standards",
    ctaText: "View Specs",
    ctaLink: "/products"
  },
  {
    id: 11,
    image: "/attached_assets/slide 11_1753710378146.jpg",
    headline: "INDUSTRIAL GRADE PIPES",
    subtext: "Heavy-duty piping solutions for demanding industrial applications",
    ctaText: "Industrial Solutions",
    ctaLink: "/products"
  },
  {
    id: 12,
    image: "/attached_assets/slide 12_1753710378146.jpg",
    headline: "GLOBAL REACH",
    subtext: "Serving customers worldwide with reliable plastic piping solutions",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  }
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
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
      role="region"
      aria-label="Hero image carousel"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.headline}
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {slide.headline}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                {slide.subtext}
              </p>
              <Link href={slide.ctaLink}>
                <Button 
                  size="lg" 
                  className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {slide.ctaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary-green scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 right-6 z-20 bg-black/30 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}