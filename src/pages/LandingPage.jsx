import Header from '../components/communs/Header';
import Footer from '../components/communs/Footer';
import HeroSection from '../components/sections/HeroSection';
import PokemonPopulairesSection from '../components/sections/PokemonPopulairesSection';
import TypesPokemonSection from '../components/sections/TypesPokemonSection';
import FonctionnalitésSections from '../components/sections/FonctionnalitésSections';
import AppelActions from '../components/sections/AppelActions';

function LandingPage(){

    return(
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white">
          <Header />          
          <main>
            <HeroSection />
            <PokemonPopulairesSection />
            <TypesPokemonSection />
            <FonctionnalitésSections />
            <AppelActions />
          </main>
          <Footer />
        </div>
      </>
    )
}

export default LandingPage