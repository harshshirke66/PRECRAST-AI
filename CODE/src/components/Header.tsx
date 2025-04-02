import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: 'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers') => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (section: 'home' | 'simplifier' | 'detector' | 'schemes' | 'lawyers') => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 
              onClick={() => handleNavigation('home')} 
              className="text-2xl font-bold text-white cursor-pointer hover:text-emerald-400 transition"
            >
              PrecrastAI
            </h1>
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}
                className={`transition ${activeSection === 'home' ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavigation('simplifier'); }}
                className={`transition ${activeSection === 'simplifier' ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
              >
                Simplifier
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavigation('detector'); }}
                className={`transition ${activeSection === 'detector' ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
              >
                Detector
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavigation('schemes'); }}
                className={`transition ${activeSection === 'schemes' ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
              >
                Schemes
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); handleNavigation('lawyers'); }}
                className={`transition ${activeSection === 'lawyers' ? 'text-emerald-400' : 'text-gray-300 hover:text-white'}`}
              >
                Find Lawyers
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button 
              onClick={() => handleNavigation('simplifier')}
              className="hidden md:flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 z-50">
          <nav className="flex flex-col p-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}
              className={`py-3 px-4 rounded-lg ${activeSection === 'home' ? 'bg-gray-700 text-emerald-400' : 'text-gray-300'}`}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('simplifier'); }}
              className={`py-3 px-4 rounded-lg ${activeSection === 'simplifier' ? 'bg-gray-700 text-emerald-400' : 'text-gray-300'}`}
            >
              Simplifier
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('detector'); }}
              className={`py-3 px-4 rounded-lg ${activeSection === 'detector' ? 'bg-gray-700 text-emerald-400' : 'text-gray-300'}`}
            >
              Detector
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('schemes'); }}
              className={`py-3 px-4 rounded-lg ${activeSection === 'schemes' ? 'bg-gray-700 text-emerald-400' : 'text-gray-300'}`}
            >
              Schemes
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigation('lawyers'); }}
              className={`py-3 px-4 rounded-lg ${activeSection === 'lawyers' ? 'bg-gray-700 text-emerald-400' : 'text-gray-300'}`}
            >
              Find Lawyers
            </a>
            <button 
              onClick={() => handleNavigation('simplifier')}
              className="mt-4 py-3 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition text-center"
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}