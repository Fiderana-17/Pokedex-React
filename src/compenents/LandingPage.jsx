import { FaInfoCircle, FaSearch } from 'react-icons/fa';
import { IoGameController, IoStatsChart } from 'react-icons/io5';
import { MdDarkMode, MdFavorite } from 'react-icons/md';
import { RiUserCommunityFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';

"use client"

import {Zap, Menu, Flame, Droplets, Leaf,BellElectricIcon as Electric, Snowflake, Shield, Skull, Mountain} from "lucide-react"
import { useState } from "react"



function LandingPage(){

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pokemonTypes = [
    { name: "Feu", icon: Flame, color: "from-red-500 to-orange-500", count: 89 },
    { name: "Eau", icon: Droplets, color: "from-blue-500 to-cyan-500", count: 144 },
    { name: "Plante", icon: Leaf, color: "from-green-500 to-emerald-500", count: 112 },
    { name: "Électrik", icon: Electric, color: "from-yellow-500 to-amber-500", count: 71 },
    { name: "Glace", icon: Snowflake, color: "from-cyan-400 to-blue-400", count: 51 },
    { name: "Combat", icon: Shield, color: "from-red-600 to-red-700", count: 67 },
    { name: "Poison", icon: Skull, color: "from-purple-500 to-violet-500", count: 54 },
    { name: "Sol", icon: Mountain, color: "from-yellow-600 to-orange-600", count: 68 },
  ]

    return(
        <>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white">
             <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                PokéDex
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Pokémon
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Types
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Fonctionnalités
              </a>
              
            </nav>

            <div className="flex items-center space-x-2">
              <button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2"
                >
                  Pokémon
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors py-2"
                >
                  Types
                </a>

                   <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Fonctionnalités
              </a>
              </div>
            </nav>
          )}
        </div>
      </header>

          
      <main>
        {/*Hero Section*/}
        <section className=" mx-auto px-20 py-20 flex flex-col items-center md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Découvrez l'univers Pokémon comme jamais auparavant
            </h2>
            <p className="text-lg mb-8">
              Notre Pokédex interactif vous donne accès à toutes les
              informations sur vos Pokémon préférés, avec une interface
              intuitive et moderne.
            </p>
            <Link to="/pokemon">
            <button
    
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2 transition-colors"
            >
              Explorer maintenant
            </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png"
              alt="Pokemon"
              className="w-64 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
        </section>

        <section className="bg-white text-gray-900 py-20">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center mb-12">
              Pokémon populaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 dark:from-yellow-500 dark:via-yellow-600 dark:to-yellow-500 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              alt="Pikachu"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Pikachu</h2>
            <p className="font-extralight text-gray-900">Eléctrique</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-orange-200 via-orange-50 to-orange-300 dark:from-orange-600 dark:via-orange-800 dark:to-orange-600 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
              alt="Pikachu"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Charizard</h2>
            <p className="font-extralight text-gray-900">Fire, Flying</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-green-200 via-green-50 to-green-300 dark:from-green-500 dark:via-green-700 dark:to-green-500 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="Pikachu"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Bulbasaur</h2>
            <p className="font-extralight text-gray-900">grass, poison</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 dark:from-orange-900 dark:via-orange-800 dark:to-orange-900 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
              alt="Pikachu"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Charmander</h2>
            <p className="font-extralight text-gray-900">fire</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-blue-200 via-blue-50 to-blue-300 dark:from-blue-300 dark:via-blue-500 dark:to-blue-300 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
              alt="Squirtle"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Squirtle</h2>
            <p className="font-extralight text-gray-900">water</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-pink-200 via-pink-50 to-pink-300 dark:from-pink-500 dark:via-pink-700 dark:to-pink-500 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png"
              alt="Moltres"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Moltres-Galar</h2>
            <p className="font-extralight text-gray-900">dark, Flying</p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-blue-300 via-blue-100 to-blue-400 dark:from-blue-500 dark:via-blue-700 dark:to-blue-500 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
              alt="Lucario"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Lucario</h2>
            <p className="font-extralight text-gray-900">fighting, steel </p>
          </div>
                </div>

                <div className="bg-gradient-to-br from-purple-200 via-purple-50 to-purple-300 dark:from-purple-300 dark:via-purple-500 dark:to-purple-400 p-6 rounded-xl shadow-md w-2xs flex flex-col items-center">
                     <div className="md:w-1/2 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
              alt="Mew"
              className="w-34 md:w-80 drop-shadow-2xl animate-bounce"
              style={{
                animationDuration: '3s',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-2xl">Mew</h2>
            <p className="font-extralight text-gray-900">psychic</p>
          </div>
                </div>

            </div>
            </div>
        </section>
        

                {/* Type de pokemon */}
                <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Explorer par Type</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Chaque type a ses propres caractéristiques et stratégies uniques
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pokemonTypes.map((type, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader className="text-center p-4">
                  <div
                    className={`w-16 h-16 mx-auto bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>{type.count} Pokémon</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


        <section className="bg-white text-gray-900 py-20">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-12">
              Fonctionnalités principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">  

            {/* Fonctionnalités */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MdFavorite/>
                </div>
                <h3 className="text-xl font-bold mb-2">Liste de favoris</h3>
                <p>
                  Sauvegardez vos Pokémon préférés et creez votre équipe de rêve
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IoStatsChart />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Statistiques détaillées
                </h3>
                <p>
                  Consultez toutes les stats, capacités et évolutions de chaque Pokémon
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-500 to-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MdDarkMode/>
                </div>
                <h3 className="text-xl font-bold mb-2">Mode sombre</h3>
                <p>
                  Profitez d'une expérience visuelle optimisée avec notre thème
                  clair, sombre ou automatique selon vos préférences.
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaInfoCircle />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Informations détaillées
                </h3>
                <p>
                  Accédez aux statistiques, types, évolutions et autres
                  informations essentielles sur chaque Pokémon.
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <RiUserCommunityFill/>
                </div>
                
                
                <h3 className="text-xl font-bold mb-2">
                  Communauté
                </h3>
                <p>
                  Partagés vos équipes et découvrez celles des autres dresseurs
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IoGameController />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Mode hors ligne
                </h3>
                <p>
                  Accédez à vos données mmême sans connexion internet
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                    alt="Recherche"
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Recherche avancée</h3>
                <p>
                  Trouvez instantanément n'importe quel Pokémon par son nom ou
                  son numéro dans le Pokédex.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaSearch/>
                </div>
                <h3 className="text-xl font-bold mb-2">Recherche avancée</h3>
                <p>
                  Trouvez instantanément n'importe quel Pokémon par son nom ou
                  son numéro dans le Pokédex.
                </p>
              </div>

            </div>
          </div>
        </section>



        {/* Call to Action */}
        <section className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à commencer votre aventure ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Notre Pokédex est constamment mis à jour avec les dernières
            informations. Rejoignez des milliers de dresseurs qui utilisent déjà
            notre outil !
          </p>
          <Link to="/pokemon">
          <button
        
            className="bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white hover:bg-gradient-to-r duration-300 transition-normal px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Accéder au Pokédex
          </button>
          </Link>
        </section>
      </main>


      {/* Footer */}
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
        </div>
        </>
    )
}

export default LandingPage