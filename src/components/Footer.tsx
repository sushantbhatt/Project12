import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200 inline-block mb-4">Shuddh Swad</Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Authentic and pure products delivered to your doorstep. Experience the true taste of tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Track Order
                </a>
              </li>
              <li>
                <Link to="/return-policy" className="hover:underline text-gray-300">
                  Return &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/story" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/core-values" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Core Values
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Building No./Flat No.: Math Garib, Road/Street: Panchayat - Madhurapur, Nearby Landmark: High School, Locality/Sub Locality: Chakia, City/Town/Village: Math Garib, District: Purbi Champaran, State: Bihar, PIN Code: 845412, India.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">+91 8016380734</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <p className="text-gray-300">contact@shuddhswad.shop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2023 Shuddh Swad. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;