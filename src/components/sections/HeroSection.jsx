import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className=" mx-auto px-20 py-20 flex flex-col items-center md:flex-row gap-12">
        <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
                Découvrez l'univers Pokémon comme jamais auparavant
            </h2>
            <p className="text-lg mb-8">
                Notre Pokédex interactif vous donne accès à toutes les
                informations sur vos Pokémon préférés, avec une interface
                intuitive et moderne.
            </p>
            <Link to="/pokemon">
                <button

                    className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2 transition-colors"
                >
                    Explorer maintenant
                </button>
            </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png"
                alt="Pokemon"
                className="w-64 md:w-80 drop-shadow-2xl animate-bounce"
                style={{
                animationDuration: '3s',
                }}
            />
        </div>
    </section>
  );
};

export default HeroSection