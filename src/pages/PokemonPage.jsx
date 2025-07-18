import Header from '../components/communs/Header';
import Footer from '../components/communs/Footer';
import PokemonCard from '../components/PokemonCard';

function PokemonPage(){

    return(
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white">
          <Header />          
          <main>
            <PokemonCard />
          </main>
          <Footer />
        </div>
      </>
    )
}

export default PokemonPage