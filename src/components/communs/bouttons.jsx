import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const RotatingButton = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    {
      key: 'light',
      icon: Sun,
      style: 'border-yellow-400 bg-yellow-50 text-yellow-600 focus:ring-yellow-400',
      rotation: 'rotate-0'
    },
    {
      key: 'dark',
      icon: Moon,
      style: 'border-gray-600 bg-gray-900 text-gray-300 focus:ring-gray-500',
      rotation: 'rotate-230'
    },
    {
      key: 'system',
      icon: Monitor,
      style: 'border-blue-400 bg-blue-50 text-blue-600 focus:ring-blue-400',
      rotation: 'rotate-360'
    }
  ];

  const currentTheme = themes[themeIndex];
  const IconComponent = currentTheme.icon;

  // ⬇️ Appliquer le thème au démarrage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    let index = 2; // par défaut : system

    if (saved === 'light') index = 0;
    else if (saved === 'dark') index = 1;

    setThemeIndex(index);

    const html = document.documentElement;
    if (saved === 'dark') html.classList.add('dark');
    else if (saved === 'light') html.classList.remove('dark');
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.classList.toggle('dark', prefersDark);
    }
  }, []);

  // ⬇️ Passer au thème suivant
  const nextTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    const nextThemeKey = themes[nextIndex].key;
    setThemeIndex(nextIndex);

    const html = document.documentElement;

    if (nextThemeKey === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (nextThemeKey === 'light') {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      html.classList.toggle('dark', prefersDark);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={nextTheme}
        className={`group relative h-8 w-8 rounded-full border-2 transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentTheme.style}`}
      >
        <div className={`transform transition-transform duration-500 ${currentTheme.rotation}`}>
          <IconComponent className="h-5 w-5 mx-auto" />
        </div>
      </button>
    </div>
  );
};

export default RotatingButton;
