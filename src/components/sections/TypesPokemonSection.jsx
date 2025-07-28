import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import {Flame, Droplets, Leaf,BellElectricIcon as Electric, Snowflake, Shield, Skull, Mountain} from "lucide-react"
import {
  Bug,
  LandmarkIcon as Rock,
  Ghost,
  MountainSnow as Dragon,
  MoonStar as Dark,
  Settings as Steel,
  Sparkles as Fairy,
  Circle,
  Bird,
  Eye
} from "lucide-react";

function TypesPokemonSection() {
    const pokemonTypes = [
  { name: "Feu", icon: Flame, color: "from-red-500 to-orange-500", count: 89 },
  { name: "Eau", icon: Droplets, color: "from-blue-500 to-cyan-500", count: 144 },
  { name: "Plante", icon: Leaf, color: "from-green-500 to-emerald-500", count: 112 },
  { name: "Électrik", icon: Electric, color: "from-yellow-500 to-amber-500", count: 71 },
  { name: "Glace", icon: Snowflake, color: "from-cyan-400 to-blue-400", count: 51 },
  { name: "Combat", icon: Shield, color: "from-red-600 to-red-700", count: 67 },
  { name: "Poison", icon: Skull, color: "from-purple-500 to-violet-500", count: 54 },
  { name: "Sol", icon: Mountain, color: "from-yellow-600 to-orange-600", count: 68 },
  { name: "Insecte", icon: Bug, color: "from-lime-500 to-green-600", count: 72 },
  { name: "Roche", icon: Rock, color: "from-yellow-800 to-stone-500", count: 58 },
  { name: "Spectre", icon: Ghost, color: "from-purple-700 to-indigo-700", count: 45 },
  { name: "Dragon", icon: Dragon, color: "from-indigo-600 to-purple-600", count: 61 },
  { name: "Ténèbres", icon: Dark, color: "from-gray-700 to-black", count: 51 },
  { name: "Acier", icon: Steel, color: "from-zinc-400 to-slate-500", count: 54 },
  { name: "Fée", icon: Fairy, color: "from-pink-400 to-fuchsia-400", count: 47 },
  { name: "Normal", icon: Circle, color: "from-gray-400 to-gray-500", count: 95 },
  { name: "Vol", icon: Bird, color: "from-sky-400 to-blue-500", count: 79 },
  { name: "Psy", icon: Eye, color: "from-pink-500 to-rose-500", count: 60 },
];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Explorer par Type</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Chaque type a ses propres caractéristiques et stratégies uniques
                    </p>
                </div>
        
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {pokemonTypes.map((type, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <CardHeader className="text-center p-4">
                            <div
                                className={`w-16 h-16 mx-auto bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                            >
                                <type.icon className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-lg">{type.name}</CardTitle>
                            <CardDescription>{type.count} Pokémon</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TypesPokemonSection