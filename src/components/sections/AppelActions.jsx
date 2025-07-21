import { Link } from 'react-router-dom';

function AppelActions() {
  return (
    <section className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
            Prêt à commencer votre aventure ?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
            Notre Pokédex est constamment mis à jour avec les dernières
            informations. Rejoignez des milliers de dresseurs qui utilisent déjà
            notre outil !
        </p>
        <Link to="/pokemon">
            <button
        
            className="bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white hover:bg-gradient-to-r duration-300 transition-normal px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
                Accéder au Pokédex
            </button>
        </Link>
    </section>
  )
}

export default AppelActions