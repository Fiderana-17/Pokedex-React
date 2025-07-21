 import React, { useState } from 'react';
import { Sun, Moon, Monitor, Palette, Eye, Contrast } from 'lucide-react';


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

    const nextTheme = () => {
      setThemeIndex((prev) => (prev + 1) % themes.length);
    };

    const IconComponent = currentTheme.icon;

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