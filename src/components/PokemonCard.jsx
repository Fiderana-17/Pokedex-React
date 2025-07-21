import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

function PokemonCard({ activeTypes }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300');
        setPokemons(res.data.results);

        const detailsData = {};
        await Promise.all(
          res.data.results.map(async (pokemon) => {
            const resDetail = await axios.get(pokemon.url);
            detailsData[pokemon.name] = resDetail.data;
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

  // Filtrage selon les types sélectionnés
  const filteredPokemons = pokemons.filter((p) => {
    const details = pokemonDetails[p.name];
    if (!details) return false;
    if (activeTypes.includes('all')) return true;

    const types = details.types.map((t) => t.type.name.toLowerCase());
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

            return (
              <div
                key={pokemon.name}
                className="p-4 bg-gradient-to-br from-sky-300 to-sky-500 text-slate-900 shadow-lg rounded-xl text-center flex flex-col-reverse items-center hover:scale-110 duration-200 gap-3 cursor-pointer"
                onClick={() => setSelectedPokemon(pokemon.name)}
              >
                <p className="text-sm italic capitalize">
                  {details.types.map(t => t.type.name).join(', ')}
                </p>
                <p className="font-bold capitalize">{pokemon.name}</p>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={pokemon.name}
                  className="mx-auto w-32 h-32 object-contain drop-shadow-md rounded-full p-2 mb-2 bg-sky-100"
                />
                <p className="text-xs">#{id}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal avec détails */}
      {selectedPokemon && pokemonDetails[selectedPokemon] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative z-10 bg-sky-900 text-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-auto flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-3 py-1 text-sm font-bold hover:bg-red-700"
              onClick={() => setSelectedPokemon(null)}
            >
              X
            </button>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetails[selectedPokemon].id}.png`}
              alt={selectedPokemon}
              className="w-40 h-40 object-contain drop-shadow-md rounded-full mb-4 bg-sky-100"
            />
            <h2 className="text-2xl font-bold mb-2 capitalize">{selectedPokemon}</h2>
            <p className="mb-2 italic text-sky-300">
              {pokemonDetails[selectedPokemon].types.map(t => t.type.name).join(', ')}
            </p>
            <div className="w-full">
              <p className="font-semibold mb-2">Statistiques de base</p>
              <ul className="space-y-2">
                {pokemonDetails[selectedPokemon].stats.map(stat => (
                  <li key={stat.stat.name} className="flex justify-between items-center">
                    <span className="capitalize">{stat.stat.name}</span>
                    <div className="flex-1 mx-2 h-3 bg-sky-700 rounded-full overflow-hidden">
                      <div
                        className="h-3 bg-pink-400"
                        style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                      />
                    </div>
                    <span className="font-bold">{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCard;
