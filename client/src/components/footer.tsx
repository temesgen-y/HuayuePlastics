import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Send } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImage from "@assets/huayue-logo.png";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Logo Section (Left Column) */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Huayue Plastics Industry - Look forward to the future" 
                className="h-16 w-auto"
              />
            </div>
            <div className="text-lg font-semibold text-white mb-4">PLASTICS INDUSTRY</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading manufacturer of high-quality industrial pipes and fittings serving global infrastructure projects. Your trusted partner for reliable, innovative pipe solutions across oil, gas, water, and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="TikTok">
                <SiTiktok className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors" title="Telegram">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=medical" className="text-gray-300 hover:text-accent-green transition-colors">Medical Packaging</Link></li>
              <li><Link href="/products?category=ecommerce" className="text-gray-300 hover:text-accent-green transition-colors">E-commerce Bags</Link></li>
              <li><Link href="/products?category=food" className="text-gray-300 hover:text-accent-green transition-colors">Food Packaging</Link></li>
              <li><Link href="/products?brand=eider" className="text-gray-300 hover:text-accent-green transition-colors">Biodegradable Solutions</Link></li>
              <li><Link href="/products?category=retail" className="text-gray-300 hover:text-accent-green transition-colors">Retail Packaging</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-accent-green transition-colors">About Us</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-accent-green transition-colors">News</Link></li>
              <li><Link href="/agency-policy" className="text-gray-300 hover:text-accent-green transition-colors">Agency Policy</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-accent-green transition-colors">Careers</a></li>
              <li><Link href="/admin/auth" className="text-gray-300 hover:text-accent-green transition-colors">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-gray-300">Shanghai, China</div>
                <div className="text-gray-400">No.228 ZhaiXing Rd</div>
              </div>
              <div>
                <div className="text-gray-300">+86 21 5741 2345</div>
              </div>
              <div>
                <div className="text-gray-300">info@huayueplastics.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Huayue Plastics Industry. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-accent-green transition-colors">Quality Certificates</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
