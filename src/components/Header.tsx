import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-center py-2 px-4 text-sm font-medium">
        25% Off on Every order! USE SWAD25 CODE
      </div>
      
      <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-orange-600 hover:text-red-600 transition-colors duration-200">
                SHUDDH
                <span className="text-red-500 text-xs align-top">®</span>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={`font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>Home</Link>
              <a href="/products" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">Products</a>
              <Link to="/core-values" className={`font-medium transition-colors duration-200 ${location.pathname === '/core-values' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>Core Values</Link>
              <Link to="/story" className={`font-medium transition-colors duration-200 ${location.pathname === '/story' ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}>Our Story</Link>
              <a href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">Contact Us</a>
              <Link to="/track-order" className="ml-4 text-orange-700 hover:underline">
                Track Order
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200">
                <Search size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200">
                <User size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200 relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === '/' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <a href="#orders" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200">Orders</a>
              <a href="#track" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200">Track your order</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200">Products</a>
              <a href="#return" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200">Return Policy</a>
              <Link to="/core-values" className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === '/core-values' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`} onClick={() => setIsMenuOpen(false)}>Core Values</Link>
              <Link to="/story" className={`block px-3 py-2 rounded-md transition-all duration-200 ${location.pathname === '/story' ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'}`} onClick={() => setIsMenuOpen(false)}>Our Story</Link>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200">Contact us</a>
              <Link to="/track-order" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                Track Order
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;