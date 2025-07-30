import useDarkMode from "../../Assets/JS/useDarkMode";
function FilterPokemon({ activeTypes, setActiveTypes, searchQuery, setSearchQuery }) {
  const isDark = useDarkMode()
  const TYPES = [
    'all', 'normal', 'fire', 'water', 'grass', 'electric', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  const toggleType = (type) => {
    if (type === 'all') {
      setActiveTypes(['all']);
    } else {
      const newTypes = activeTypes.includes(type)
        ? activeTypes.filter(t => t !== type)
        : [...activeTypes.filter(t => t !== 'all'), type];
      setActiveTypes(newTypes.length === 0 ? ['all'] : newTypes);
    }

    // Nettoyer la recherche si on clique sur un filtre
    setSearchQuery('');
  };

  return (
    <div className={`sticky top-16 z-40   shadow-md py-4 mb-6 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {TYPES.map((type) => {
          const isActive = searchQuery.trim() === '' && activeTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-4 py-2 rounded-full font-semibold capitalize shadow transition-all  duration-300 ${isDark ? 'bg-slate-700 hover:bg-slate-600':'bg-gray-300 text-gray-700'}
                ${isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white scale-105'
                  : ' hover:bg-gray-100'}`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* Barre de recherche centrée */}
      <div className="flex justify-center mt-6 px-4 ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          placeholder="Rechercher un pokémon ou un type..........."
          className={`max-w-96 sm:w-1/2 px-4 py-2 rounded-full border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm ${isDark ? 'bg-slate-800 text-white placeholder-gray-500' :'bg-gray-300 text-gray-900 placeholder-gray-800'}`}
        />
      </div>
    </div>
  );
}


export default FilterPokemon;
