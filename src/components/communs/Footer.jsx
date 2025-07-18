import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img
                src="logo.jpg"
                alt="Pokéball"
                className="w-6 h-6"
              />
              <span className="font-bold">PokéDex</span>
            </div>
            <div className="text-sm text-red-200">
              <p>
                Données Pokémon fournies par{' '}
                <a
                  href="https://pokeapi.co/"
                  className="underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PokéAPI
                </a>
              </p>
              <p>© 2023 PokéDex - Tous droits réservés</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer