import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Apple className="h-8 w-8" />
              <span className="font-bold text-xl">KidsNutrition</span>
            </div>
            <p className="mt-2 text-sm">
              Empowering families with knowledge for healthier children through proper nutrition and wellness education.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-200">About Us</Link></li>
              <li><Link to="/child-health" className="hover:text-green-200">Child Health</Link></li>
              <li><Link to="/resources" className="hover:text-green-200">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link to="/nutrition-calculator" className="hover:text-green-200">Nutrition Calculator</Link></li>
              <li><Link to="/bmi-calculator" className="hover:text-green-200">BMI Calculator</Link></li>
              <li><Link to="/guide" className="hover:text-green-200">Nutrition Guide</Link></li>
              <li><Link to="/faq" className="hover:text-green-200">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-200"><Facebook /></a>
              <a href="#" className="hover:text-green-200"><Twitter /></a>
              <a href="#" className="hover:text-green-200"><Instagram /></a>
              <a href="#" className="hover:text-green-200"><Mail /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-500">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} KidsNutrition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;