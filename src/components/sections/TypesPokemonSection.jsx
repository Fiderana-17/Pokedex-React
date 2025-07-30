import { Card, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import {Flame, Droplets, Leaf,BellElectricIcon as Electric, Snowflake, Shield, Skull, Mountain} from "lucide-react"
import useDarkMode from '../../Assets/JS/useDarkMode';

function TypesPokemonSection() {
    const isDark = useDarkMode();
    const pokemonTypes = [
        { name: "Feu", icon: Flame, color: "from-red-500 to-orange-500", count: 89 },
        { name: "Eau", icon: Droplets, color: "from-blue-500 to-cyan-500", count: 144 },
        { name: "Plante", icon: Leaf, color: "from-green-500 to-emerald-500", count: 112 },
        { name: "Électrik", icon: Electric, color: "from-yellow-500 to-amber-500", count: 71 },
        { name: "Glace", icon: Snowflake, color: "from-cyan-400 to-blue-400", count: 51 },
        { name: "Combat", icon: Shield, color: "from-red-600 to-red-700", count: 67 },
        { name: "Poison", icon: Skull, color: "from-purple-500 to-violet-500", count: 54 },
        { name: "Sol", icon: Mountain, color: "from-yellow-600 to-orange-600", count: 68 },
    ]

    return (
        <section className={`py-16 transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white text-gray-' } `} >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300${isDark ? 'text-white' : ' text-gray-900' } `}>Explorer par Type</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    Chaque type a ses propres caractéristiques et stratégies uniques
                    </p>
                </div>
        
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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