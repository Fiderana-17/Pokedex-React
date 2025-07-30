import { useState, useEffect } from 'react';
import { Menu, X, Zap } from "lucide-react";
import RotatingButton from './bouttons';
import { Link } from 'react-router-dom';
import useDarkMode from '../../Assets/JS/useDarkMode';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = useDarkMode();
  const navClasses = `font-medium transition-colors ${isDark ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-600'}`;


  return (
    <header
      className={`border-b sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        isDark ? 'bg-gray-900  border-b-white' : 'bg-white border-b-amber-400'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              PokéDex
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div></div>
            <Link to="/" className={navClasses} >
              Accueil
            </Link>
            <Link to="/pokemon" className={navClasses}>
              Pokémon
            </Link>
            <a href="/#types" className={navClasses}>
              Types
            </a>
            <a href="/#fonctionnalite" className={navClasses}>
              Fonctionnalités
            </a>
            <Link to="/favoris" className={navClasses}>
              Mes favoris
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <RotatingButton />
            </div>
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

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link to="/pokemon" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium" onClick={() => setIsMenuOpen(false)}>
                Pokémon
              </Link>
              <a href="/#types" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium" onClick={() => setIsMenuOpen(false)}>
                Types
              </a>
              <a href="/#fonctionnalite" className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2 px-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 font-medium" onClick={() => setIsMenuOpen(false)}>
                Fonctionnalités
              </a>
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
