import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 via-red-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-200 py-10 mt-16 shadow-inner transition-all duration-300">
      
      <div className="container mx-auto px-4">
        {/* Bloc principal, en colonne sur mobile et ligne sur desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Bloc logo */}
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center gap-3">
              <img
                src="logo.jpg"
                alt="Pokéball"
                className="w-10 h-10 rounded-full shadow-lg animate-pulse"
              />
              <span className="text-2xl font-bold tracking-wide">PokéDex</span>
            </div>
            <p className="text-sm max-w-xs">
              Explorez le monde des Pokémon avec un Pokédex moderne, rapide et interactif.
            </p>
          </div>

          {/* Liens internes */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg underline underline-offset-4 mb-1">Navigation</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-red-500 transition">Accueil</Link></li>
              <li><Link to="/pokemon" className="hover:text-red-500 transition">Tous les Pokémons</Link></li>
              <li><Link to="/#types" className="hover:text-red-500 transition">Types</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition">À propos</Link></li>
            </ul>
          </div>

          {/* Liens externes */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg underline underline-offset-4 mb-1">Ressources</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://pokeapi.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  PokéAPI (Données)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  GitHub du projet
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 PokéDex — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default Footer
