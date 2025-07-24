import { useState } from 'react';
import { Menu, X, Zap } from "lucide-react";
import RotatingButton from './bouttons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              PokéDex
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link 
              to="/pokemon" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
            >
              Pokémon
            </Link>
            <a 
              href="/#types" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
            >
              Types
            </a>
            <a 
              href="/#fonctionnalite" 
              className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
            >
              Fonctionnalités
            </a>
          </nav>

          {/* Right Section - Button and Menu */}
          <div className="flex items-center space-x-3">
            {/* Rotating Button - Hidden on small screens */}
            <div className="hidden sm:block">
              <RotatingButton />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/pokemon" 
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pokémon
              </Link>
              <a 
                href="/#types" 
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Types
              </a>
              <a 
                href="/#fonctionnalite" 
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              
              {/* Mobile Rotating Button */}
              <div className="pt-2 px-2 sm:hidden">
                <RotatingButton />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;