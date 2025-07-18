import React from 'react'

function PokemonPopulairesSection() {
  return (
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
  )
}

export default PokemonPopulairesSection