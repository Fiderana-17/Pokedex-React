import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Details from './sections/PokemonDetailsModal';


function PokemonCard({ activeTypes, searchQuery }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteList, setFavoriteList] = useState(() => {
    const stored = localStorage.getItem('favoritePokemons');
    return stored ? JSON.parse(stored) : [];
  });

  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const backgroundByColor = {
    red: 'from-red-300 to-red-500',
    blue: 'from-blue-300 to-blue-500',
    green: 'from-green-300 to-green-500',
    yellow: 'from-yellow-300 to-yellow-500',
    purple: 'from-purple-300 to-purple-500',
    brown: 'from-amber-300 to-amber-500',
    pink: 'from-pink-300 to-pink-500',
    black: 'from-gray-700 to-gray-900',
    white: 'from-slate-200 to-slate-400',
    gray: 'from-gray-400 to-gray-600',
    default: 'from-sky-300 to-sky-500',
  };

  const getFavorites = () => {
    const stored = localStorage.getItem('favoritePokemons');
    return stored ? JSON.parse(stored) : [];
  };

  const toggleFavorite = (name) => {
    const currentFavorites = getFavorites();
    let updated;
    if (currentFavorites.includes(name)) {
      updated = currentFavorites.filter(p => p !== name);
    } else {
      updated = [...currentFavorites, name];
    }
    localStorage.setItem('favoritePokemons', JSON.stringify(updated));
    setFavoriteList(updated);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1302');
        setPokemons(res.data.results);

        const detailsData = {};
        await Promise.all(
          res.data.results.map(async (pokemon) => {
            const resDetail = await axios.get(pokemon.url);
            const id = resDetail.data.id;
            const resSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);

            detailsData[pokemon.name] = {
              ...resDetail.data,
              color: resSpecies.data.color?.name || 'default',
              habitat: resSpecies.data.habitat?.name || 'Unknown',
              is_legendary: resSpecies.data.is_legendary || false,
            };
          })
        );
        setPokemonDetails(detailsData);
      } catch (error) {
        console.error('Erreur lors du chargement des pokémons', error);
      }
      setIsLoading(false);
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((p) => {
    const details = pokemonDetails[p.name];
    if (!details) return false;

    const name = p.name.toLowerCase();
    const types = details.types.map(t => t.type.name.toLowerCase());

    if (searchQuery.trim() !== '') {
      return (
        name.includes(searchQuery) ||
        types.some(type => type.includes(searchQuery))
      );
    }

    if (activeTypes.includes('all')) return true;
    return activeTypes.some(type => types.includes(type));
  });

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <FaSpinner className="animate-spin text-4xl text-sky-500" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
          {filteredPokemons.map((pokemon) => {
            const id = getIdFromUrl(pokemon.url);
            const details = pokemonDetails[pokemon.name];
            const bgColor = backgroundByColor[details.color] || backgroundByColor.default;
            const isFav = favoriteList.includes(pokemon.name);

            return (
              <div
                key={pokemon.name}
                className={`p-4 bg-gradient-to-br ${bgColor} text-slate-900 shadow-lg rounded-xl text-center flex flex-col-reverse items-center hover:scale-105 duration-200 gap-3 cursor-pointer relative`}
                onClick={() => setSelectedPokemon(pokemon.name)}
              >
                {/* Bouton coeur */}
                <button
                  className="absolute top-2 right-2 text-xl z-10"
                  onClick={(e) => {
                    e.stopPropagation(); // Ne pas ouvrir le modal
                    toggleFavorite(pokemon.name);
                  }}
                >
                  <span className={`text-2xl transition duration-200 ${isFav ? 'text-red-600' : 'text-white/70'}`}>
                    {isFav ? '❤️' : '🤍'}
                  </span>
                </button>

                <p className="text-sm italic capitalize">
                  {details.types.map(t => t.type.name).join(', ')}
                </p>
                <p className="font-bold capitalize">{pokemon.name}</p>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={pokemon.name}
                  className="mx-auto w-40 h-40 object-contain drop-shadow-md rounded-full p-2 mb-2 bg-white/30"
                />
              <p className="text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm bg-white/30 text-gray-800 shadow-sm">
                #{id.toString().padStart(3, '0')}
              </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selectedPokemon && pokemonDetails[selectedPokemon] && (
        <Details
          pokemon={{
            id: pokemonDetails[selectedPokemon].id,
            name: selectedPokemon,
            types: pokemonDetails[selectedPokemon].types.map(t => t.type.name),
            stats: Object.fromEntries(
              pokemonDetails[selectedPokemon].stats.map(stat => [stat.stat.name.toLowerCase(), stat.base_stat])
            ),
            abilities: pokemonDetails[selectedPokemon].abilities.map(a => a.ability.name),
            height: pokemonDetails[selectedPokemon].height,
            weight: pokemonDetails[selectedPokemon].weight,
            baseExperience: pokemonDetails[selectedPokemon].base_experience,
            image: pokemonDetails[selectedPokemon].sprites.other['official-artwork'].front_default,
            shinyImage: pokemonDetails[selectedPokemon].sprites.other['official-artwork'].front_shiny,
            color: pokemonDetails[selectedPokemon].color,
            habitat: pokemonDetails[selectedPokemon].habitat,
            isLegendary: pokemonDetails[selectedPokemon].is_legendary,
          }}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  );
}

export default PokemonCard;
