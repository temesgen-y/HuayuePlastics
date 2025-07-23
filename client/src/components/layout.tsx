import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function Layout({ 
  children, 
  title = "Huayue Plastics Industry - Leading Asian Plastic Packaging Manufacturer",
  description = "Huayue Group - Leading Asian plastic packaging manufacturer since 1998. Specializing in medical, e-commerce, food packaging solutions with 25+ years experience and global reach to 50+ countries.",
  keywords = "plastic packaging, medical bags, e-commerce packaging, biodegradable bags, plastic manufacturing, Asia",
  ogImage = "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
}: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
