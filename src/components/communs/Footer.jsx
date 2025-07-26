// components/Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background avec image Pokéball */}
      <div className="absolute inset-0">
        {/* Votre image de pokeball comme arrière-plan */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('/path/to/your/pokeball-image.jpg')", // Remplacez par le chemin de votre image
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Overlay sombre avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-gray-900/95 to-black/90"></div>
        {/* Pattern de points pour effet moderne */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      {/* Contenu du footer */}
      <div className="relative z-10 text-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + réseaux */}
      {/* Logo + réseaux */}
<div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
  <div className="flex items-center mb-4 space-x-2">
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 via-red-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/25">
      <span className="w-4 h-4 sm:w-6 sm:h-6 text-white">⚡</span>
    </div>
    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
      PokéDex
    </h1>
  </div>
  <p className="text-sm text-gray-300 mb-6 font-medium">
    Gotta catch 'em all!
  </p>
  <div className="flex space-x-3">
    {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => {
      const hoverColors = [
        'hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/25', // Facebook
        'hover:from-sky-400 hover:to-sky-500 hover:shadow-sky-500/25',     // Twitter
        'hover:from-pink-500 hover:to-purple-600 hover:shadow-pink-500/25', // Instagram
        'hover:from-red-500 hover:to-red-600 hover:shadow-red-500/25'       // YouTube
      ];
      
      return (
        <a key={i} href="#" className={`p-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl ${hoverColors[i]} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10`}>
          <Icon className="text-white w-4 h-4" />
        </a>
      );
    })}
  </div>
</div>

         {/* Mon compte */}
<div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
 <h2 className="font-bold text-lg mb-6 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">My Account</h2>
 <ul className="space-y-3 text-sm">
   {['My Orders', 'My Wishlist', 'My Addresses', 'My Personal Info'].map((item, i) => (
     <li key={i} className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 cursor-pointer relative pl-4 before:content-[''] before:absolute before:left-0 before:text-red-400 before:text-xs before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200">
       {item}
     </li>
   ))}
 </ul>
</div>

          {/* Contact */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h2 className="font-bold text-lg mb-6 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">Contact</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Email : contact@pokedex.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Tél : +261 34 00 000 00</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>

          {/* Github */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            <a
              href="https://github.com/Fiderana-17/Pokedex-React.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group"
            >
              <div className="p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/25 border border-white/10">
                <FaGithub className="text-3xl" />
              </div>
              <span className="text-sm font-medium text-center">Voir sur GitHub</span>
            </a>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
              <p className="text-gray-300 text-center md:text-left">
                Design by <span className="text-red-400 font-medium">David| Tsilavina|Fiderana| Mandrindra</span> © 2025 All rights reserved
              </p>
              <div className="flex space-x-4">
                {[
                  { src: "/images/visa.png", alt: "visa" },
                  { src: "/images/mastercard.png", alt: "mastercard" },
                  { src: "/images/paypal.png", alt: "paypal" }
                ].map((payment, i) => (
                  <div key={i} className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10">
                    <img src={payment.src} alt={payment.alt} className="w-8 h-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
}