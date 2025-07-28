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
    image: "/attached_assets/PPR 1_1753709644846.jpg",
    headline: "INNOVATIVE SOLUTIONS",
    subtext: "Delivering advanced plastic manufacturing technology for the future",
    ctaText: "View Products",
    ctaLink: "/products"
  },
  {
    id: 2,
    image: "/attached_assets/PPR 2_1753709644846.jpg",
    headline: "SUSTAINABLE PACKAGING",
    subtext: "Eco-friendly solutions that protect your products and our planet",
    ctaText: "Learn More",
    ctaLink: "/products"
  },
  {
    id: 3,
    image: "/attached_assets/slide_5_1753709644847.jpg",
    headline: "PRECISION MANUFACTURING",
    subtext: "State-of-the-art facilities ensuring consistent quality and reliability",
    ctaText: "Explore Factory",
    ctaLink: "/about"
  },
  {
    id: 4,
    image: "/attached_assets/slide1_1753709644847.PNG",
    headline: "PREMIUM PRODUCT LINE",
    subtext: "Comprehensive range of plastic solutions for diverse industries",
    ctaText: "View Catalog",
    ctaLink: "/products"
  },
  {
    id: 5,
    image: "/attached_assets/new1_1753709644845.png",
    headline: "SMART PACKAGING",
    subtext: "Advanced packaging solutions for e-commerce and retail applications",
    ctaText: "Discover More",
    ctaLink: "/products"
  },
  {
    id: 6,
    image: "/attached_assets/new2_1753709644846.png",
    headline: "ECO-FRIENDLY MATERIALS",
    subtext: "Biodegradable and recyclable plastic alternatives for a greener future",
    ctaText: "Go Green",
    ctaLink: "/products"
  },
  {
    id: 7,
    image: "/attached_assets/PPR_1753709644847.jpg",
    headline: "ADVANCED MACHINERY",
    subtext: "Cutting-edge equipment delivering precision and efficiency at scale",
    ctaText: "Learn About Us",
    ctaLink: "/about"
  },
  {
    id: 8,
    image: "/attached_assets/slide_5_1753709644847.jpg",
    headline: "GLOBAL REACH",
    subtext: "Serving 50+ countries with reliable plastic packaging solutions worldwide",
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