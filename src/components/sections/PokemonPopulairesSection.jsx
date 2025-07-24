import { useEffect, useState } from "react";
import Details from "./PokemonDetailsModal";
import Card from "./Card";
import pokemon from "./Pokemon";

const populaires = ["latios", "charizard", "mewtwo", "greninja", "lucario", "gengar", "dragonite", "latias"];

export default function PokemonPopulairesSection() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const results = await Promise.all(populaires.map(name => pokemon(name)));
      setPokemons(results.filter(Boolean)); // pour enlever les erreurs null
    };
    fetchPokemons();
  }, []);

  return (
    <section className="p-6 flex flex-col bg-white">
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-800 ">
        Pokémon Populaires
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pokemons.map(p => (
          <Card key={p.id} pokemon={p} onClick={setSelectedPokemon} />
        ))}
      </div>

      {selectedPokemon && (
        <Details
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </section>
  );
}
