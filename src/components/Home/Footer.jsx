import React from "react";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm/CallbackForm";

const Footer = () => {
  return (
    <div className="bg-black relative">
      {/* Floating Join Us Button (Desktop) */}
      <div className="hidden sm:block absolute top-6 right-6 lg:right-24">
       <CallbackForm/>
      </div>

      <div className="grid grid-cols-1 px-6 lg:px-24 pt-6 sm:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-white space-y-8">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Compass className="h-16 w-16 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">CareerGuide</h1>
            </div>
          </Link>

          <p className="text-gray-400 text-lg">
            Making education accessible, affordable and credible to anyone and
            everyone. © 2024 TeachEdison Solutions Private Limited
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl">
            <FaFacebook className="hover:text-primary transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-primary transition-colors cursor-pointer" />
            <FaYoutube className="hover:text-primary transition-colors cursor-pointer" />
            <FaStackOverflow className="hover:text-primary transition-colors cursor-pointer" />
            <FaLinkedin className="hover:text-primary transition-colors cursor-pointer" />
          </div>

          {/* Mobile Join Us Button */}
          <div className="sm:hidden">
            <CallbackForm/>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-white grid grid-cols-2 md:grid-cols-4 gap-8 py-8 sm:py-0">
          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-800 mt-8 py-6">
        <div className="container mx-auto text-center text-gray-400">
          All rights reserved • Made with ♥ by CareerGuide
        </div>
      </div>
    </div>
  );
};

export default Footer;
