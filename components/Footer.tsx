import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "FRM Part I Live", href: "#" },
  {
    label: "Investment Banking Intensive (IBI) Certification Program",
    href: "#",
  },
  { label: "Deep Quant Finance", href: "#" },
  { label: "Market Risk Modeling Certificate (Excel and Python)", href: "#" },
  { label: "Credit Risk Modeling Certificate (Excel and Python)", href: "#" },
  { label: "Resources/Blog", href: "#" },
  { label: "About Us", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-teal-600 mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div className="w-full md:w-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Stay Updated with Risk Inn
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                Get the latest insights, job opportunities, and exam tips
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-full sm:min-w-[280px]"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 text-white whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 shadow-md w-full sm:w-auto">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-400 uppercase tracking-wide">
              Contact Us
            </h4>
            <p className="text-white font-medium mb-4">Risk Inn Pvt. Ltd.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+91 885 970 2673</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+1 415 960 7534</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>ripul.dutt@riskinn.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-400 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-400 uppercase tracking-wide">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Risk Inn. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Cookies
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Made by Credit */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-gray-600 text-xs text-center">
            Made by Chayan Mondal
          </p>
        </div>
      </div>
    </footer>
  );
}
