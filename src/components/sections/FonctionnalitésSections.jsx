import { FaInfoCircle, FaSearch } from 'react-icons/fa';
import { IoGameController, IoStatsChart } from 'react-icons/io5';
import { MdDarkMode, MdFavorite } from 'react-icons/md';
import { RiUserCommunityFill } from 'react-icons/ri';
import useDarkMode from '../../Assets/JS/useDarkMode';

function FonctionnalitésSections() {
  const isDark = useDarkMode();
  return (
    <section id="section" className={`  py-20 transition-colors duration-300  text-gray-900 ${isDark ? 'bg-white ' : 'bg-gray-900 '}`}>
          <div className="flex flex-col items-center">
            <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${isDark ? 'text-gray-900' : ' text-white'}`}>
              Fonctionnalités principales
            </h2>
            <div className="grid grid-cols-1 md:flex gap-10">  

            {/* Fonctionnalités */}
              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MdFavorite/>
                </div>
                <h3 className="text-xl font-bold mb-2">Liste de favoris</h3>
                <p>
                  Sauvegardez vos Pokémon préférés et creez votre équipe de rêve
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <IoStatsChart />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Statistiques détaillées
                </h3>
                <p>
                  Consultez toutes les stats, capacités et évolutions de chaque Pokémon
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-red-500 to-black w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MdDarkMode/>
                </div>
                <h3 className="text-xl font-bold mb-2">Mode sombre</h3>
                <p>
                  Profitez d'une expérience visuelle optimisée avec notre thème
                  clair, sombre ou automatique selon vos préférences.
                </p>
              </div>


              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaInfoCircle />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Informations détaillées
                </h3>
                <p>
                  Accédez aux statistiques, types, évolutions et autres
                  informations essentielles sur chaque Pokémon.
                </p>
              </div>
            

              <div className="bg-gray-100 p-6 rounded-xl shadow-md w-2xs transform hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <FaSearch/>
                </div>
                <h3 className="text-xl font-bold mb-2">Recherche avancée</h3>
                <p>
                  Trouvez instantanément n'importe quel Pokémon par son nom ou
                  son numéro dans le Pokédex.
                </p>
              </div>

            </div>
          </div>
        </section>
  )
}

export default FonctionnalitésSections