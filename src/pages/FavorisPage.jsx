import Header from '../components/communs/Header';
import Footer from '../components/communs/Footer';
import FavoritePokemonList from '../components/FavoritePokemonList';
import { Link } from 'react-router-dom';

function FavorisPages() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-white">
      <Header />
      <main className='px-5 pt-10 pb-20'>
        <FavoritePokemonList />
        <div className="flex justify-center mt-10">
            <Link to="/pokemon">
                <button
                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2 transition-colors"
                >
                    Explorer maintenant
                </button>
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default FavorisPages;