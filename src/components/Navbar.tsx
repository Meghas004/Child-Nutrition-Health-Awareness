import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Apple } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Apple className="h-8 w-8" />
            <span className="font-bold text-xl">KidsNutrition</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-green-200 transition">Home</Link>
            <Link to="/about" className="hover:text-green-200 transition">About</Link>
            <Link to="/nutrition-calculator" className="hover:text-green-200 transition">Nutrition Calculator</Link>
            <Link to="/bmi-calculator" className="hover:text-green-200 transition">BMI Calculator</Link>
            <Link to="/child-health" className="hover:text-green-200 transition">Child Health</Link>
            <Link to="/resources" className="hover:text-green-200 transition">Resources</Link>
            <Link to="/guide" className="hover:text-green-200 transition">Guide</Link>
            <Link to="/faq" className="hover:text-green-200 transition">FAQ</Link>
            <Link to="/contact" className="hover:text-green-200 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 hover:bg-green-700 rounded">Home</Link>
              <Link to="/about" className="block px-3 py-2 hover:bg-green-700 rounded">About</Link>
              <Link to="/nutrition-calculator" className="block px-3 py-2 hover:bg-green-700 rounded">Nutrition Calculator</Link>
              <Link to="/bmi-calculator" className="block px-3 py-2 hover:bg-green-700 rounded">BMI Calculator</Link>
              <Link to="/child-health" className="block px-3 py-2 hover:bg-green-700 rounded">Child Health</Link>
              <Link to="/resources" className="block px-3 py-2 hover:bg-green-700 rounded">Resources</Link>
              <Link to="/guide" className="block px-3 py-2 hover:bg-green-700 rounded">Guide</Link>
              <Link to="/faq" className="block px-3 py-2 hover:bg-green-700 rounded">FAQ</Link>
              <Link to="/contact" className="block px-3 py-2 hover:bg-green-700 rounded">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;