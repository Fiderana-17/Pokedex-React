function FilterPokemon({ activeTypes, setActiveTypes, searchQuery, setSearchQuery }) {
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
    <div className="sticky top-16 z-40 bg-white dark:bg-slate-900 shadow-md py-4 mb-6">
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {TYPES.map((type) => {
          const isActive = searchQuery.trim() === '' && activeTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`px-4 py-2 rounded-full font-semibold capitalize shadow transition-all duration-300
                ${isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600'}`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* Barre de recherche centrée */}
      <div className="flex justify-center mt-6 px-4 text-gray-300">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          placeholder="Rechercher un pokémon ou un type..........."
          className="max-w-96 sm:w-1/2 px-4 py-2 rounded-full border-2 border-sky-500 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm dark:bg-slate-800 dark:text-white placeholder-gray-500"
        />
      </div>
    </div>
  );
}


export default FilterPokemon;
