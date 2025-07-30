// Card.jsx
import { Star } from "lucide-react";

const colorValues = {
  black: '#303030',
  blue: '#4299E1',
  brown: '#B7791F',
  gray: '#A0AEC0',
  green: '#48BB78',
  pink: '#F687B3',
  purple: '#9F7AEA',
  red: '#F56565',
  white: '#F7FAFC',
  yellow: '#ECC94B'
};

export default function Card({ pokemon, onClick }) {
  const bgColor = colorValues[pokemon.color] || colorValues.brown;
  const textColor = ['white', 'yellow'].includes(pokemon.color) ? 'text-gray-800' : 'text-white';

  return (
    <div
      className="rounded-2xl flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition duration-200 relative"
      style={{ backgroundColor: bgColor }}
      onClick={() => onClick(pokemon)}
    >
      {pokemon.isLegendary && (
        <Star className="w-5 h-5 text-yellow-300 absolute top-2 right-2" fill="yellow" />
      )}
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-32 h-32 object-contain drop-shadow-lg"
      />
      <h1 className={`font-bold text-2xl capitalize ${textColor}`}>
        {pokemon.name}
      </h1>
      <p className={`opacity-80 capitalize ${textColor}`}>
        {pokemon.type}
      </p>
    </div>
  );
}