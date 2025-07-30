import { useState } from 'react';
import Header from '../components/communs/Header';
import Footer from '../components/communs/Footer';
import PokemonCard from '../components/PokemonCard';
import FilterPokemon from '../components/ui/FilterPokemon';
import useDarkMode from '../Assets/JS/useDarkMode';
import { use } from 'react';

function PokemonPage() {
  const [activeTypes, setActiveTypes] = useState(['all']);
  const [searchQuery, setSearchQuery] = useState('');
  const isDark = useDarkMode();

  return (
    <div className={`min-h-screen  from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-white transition-colors duration-300 d ${isDark ? 'bg-gradient-to-br':'bg-gray-300'}`}>
      <main className='px-5 pt-10 pb-20'>
        <FilterPokemon
          activeTypes={activeTypes}
          setActiveTypes={setActiveTypes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <PokemonCard activeTypes={activeTypes} searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}


export default PokemonPage;