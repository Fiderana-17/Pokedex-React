import { useState } from 'react';
import Header from '../components/communs/Header';
import Footer from '../components/communs/Footer';
import PokemonCard from '../components/PokemonCard';
import FilterPokemon from '../components/ui/FilterPokemon';

function PokemonPage() {
  const [activeTypes, setActiveTypes] = useState(['tout']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-white">
      <Header />
      <main className='px-5 pt-10 pb-20'>
        <FilterPokemon activeTypes={activeTypes} setActiveTypes={setActiveTypes} />
        <PokemonCard activeTypes={activeTypes} />
      </main>
      <Footer />
    </div>
  );
}

export default PokemonPage;