import { X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Mapping des couleurs pour des dégradés plus jolis
const colorGradients = {
  black: 'from-gray-800 to-gray-900',
  blue: 'from-blue-500 to-blue-700',
  brown: 'from-amber-600 to-amber-800',
  gray: 'from-gray-400 to-gray-600',
  green: 'from-green-500 to-green-700',
  pink: 'from-pink-400 to-pink-600',
  purple: 'from-purple-500 to-purple-700',
  red: 'from-red-500 to-red-700',
  white: 'from-gray-100 to-gray-300',
  yellow: 'from-yellow-400 to-yellow-600',
  default: 'from-amber-600 to-amber-800'
};


function Details({ pokemon, onClose }) {
  const [isShiny, setIsShiny] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(false);
    const timeout = setTimeout(() => {
      setAnimateStats(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [pokemon]);

  if (!pokemon) return null;

  const fullStats = {
    hp: pokemon.stats?.hp || 0,
    attack: pokemon.stats?.attack || 0,
    defense: pokemon.stats?.defense || 0,
    "sp. attack": pokemon.stats?.["sp. attack"] || 0,
    "sp. defense": pokemon.stats?.["sp. defense"] || 0,
    speed: pokemon.stats?.speed || 0,
  };

  const totalStats = Object.values(fullStats).reduce((sum, val) => sum + val, 0);
  const displayedImage = isShiny && pokemon.shinyImage ? pokemon.shinyImage : pokemon.image;
 
  const textColor = ['white', 'yellow'].includes(pokemon.color) ? 'text-gray-800' : 'text-white';
  const bgColors = colorGradients[pokemon.color] || colorGradients.default;
  

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-49">
      <div
  className={`p-6 rounded-xl shadow-lg w-[90%] max-w-2xl relative bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ${textColor}`}>

        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${textColor} hover:bg-white/20 rounded-full p-1 duration-200`}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex flex-col items-center">
              <img
                src={displayedImage}
                alt={pokemon.name}
                className="w-44 h-44 object-contain mb-2 transition duration-300"
              />
              {pokemon.shinyImage && (
                <button
                  onClick={() => setIsShiny(prev => !prev)}
                  className={`mt-2 px-4 py-1 text-sm rounded-full border ${
                    isShiny ? "bg-yellow-300 text-black" : "bg-white/90 text-black"
                  } hover:scale-105 transition-all flex items-center gap-1`}
                >
                  <Sparkles className="w-4 h-4" />
                  {isShiny ? "Shiny" : "Normal"}
                </button>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm opacity-70">#{pokemon.id.toString().padStart(3, '0')}</span>
              <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
              <div className="flex gap-2">
                {pokemon.types?.map((type, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Base Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(fullStats).map(([stat, value]) => (
                <div key={stat} className="flex items-center">
                  <span className="w-24 capitalize">{stat}:</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{value}</span>
                      <span>/138</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-br ${bgColors}`}
                        style={{
                          width: animateStats ? `${(value / 138) * 100}%` : "0%",
                          transition: "width 1s ease-in-out",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm"><span className="opacity-70">Height:</span> {(pokemon.height / 10).toFixed(1)} m</p>
                  <p className="text-sm"><span className="opacity-70">Weight:</span> {(pokemon.weight / 10).toFixed(1)} kg</p>
                </div>
                <div>
                  <p className="text-sm"><span className="opacity-70">Abilities:</span> {pokemon.abilities?.join(', ') || 'Unknown'}</p>
                  {pokemon.isLegendary && (
                    <p className="text-sm text-yellow-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Legendary Pokémon
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="text-sm"><span className="opacity-70">Base Exp:</span> {pokemon.baseExperience || '?'}</p>
                <p className="text-sm"><span className="opacity-70">Habitat:</span> {pokemon.habitat || 'Unknown'}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">Total: {totalStats}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;