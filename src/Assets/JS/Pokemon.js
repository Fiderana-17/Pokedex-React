const API_URL = "https://pokeapi.co/api/v2/pokemon";

const pokemon = async (name) => {
  try {
    // Requête principale
    const response = await fetch(`${API_URL}/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();

    // Requête pour la couleur officielle
    const speciesResponse = await fetch(data.species.url); // L’URL est déjà dans les données
    if (!speciesResponse.ok) {
      throw new Error("Species data not found");
    }

     // → requête pour species (pour la couleur)
    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();

    return {
      id: data.id,
      name: data.name,
      type: data.types.map((typeInfo) => typeInfo.type.name).join(", "),
      image: data.sprites.other["official-artwork"].front_default,
      shinyImage: data.sprites.other["official-artwork"].front_shiny,
      abilities: data.abilities.map((ability) => ability.ability.name),
      height: data.height,
      weight: data.weight,
      species: data.species.name,
      color: speciesData.color.name, 
      baseExperience: data.base_experience,
      types: data.types.map((typeInfo) => typeInfo.type.name),
      isLegendary: speciesData.is_legendary || false,
      gameIndices: data.game_indices.map((index) => ({
        game: index.version.name,
        level: index.level_learned_at,
      })),
      heldItems: data.held_items.map((item) => item.item.name),
      moves: data.moves.map((move) => move.move.name),
      locationAreaEncounters: data.location_area_encounters,
      stats: {
        hp: data.stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0,
        attack: data.stats.find((stat) => stat.stat.name === "attack")?.base_stat || 0,
        defense: data.stats.find((stat) => stat.stat.name === "defense")?.base_stat || 0,
        "sp. attack": data.stats.find((stat) => stat.stat.name === "special-attack")?.base_stat || 0,
        "sp. defense": data.stats.find((stat) => stat.stat.name === "special-defense")?.base_stat || 0,
        speed: data.stats.find((stat) => stat.stat.name === "speed")?.base_stat || 0,
      },
      habitat: speciesData.habitat?.name || null,
    };
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
  }
};

export default pokemon;
