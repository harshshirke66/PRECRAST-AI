import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PrecrastAI</h3>
            <p className="mb-4">Making law simple and accessible for everyone through the power of artificial intelligence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition">Legal Simplifier</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Hidden Clause Detector</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Scheme Finder</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Find Lawyers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-emerald-400 transition">Legal Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Document Templates</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400" />
                <span>support@Precrastai.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-emerald-400" />
                <span>123 Legal Street, Tech City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PrecrastAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}