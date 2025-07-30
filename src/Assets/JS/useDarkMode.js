import { useEffect, useState } from 'react';

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setIsDark(isDarkNow);
    };

    // Vérification initiale
    checkDarkMode();

    // Observer les changements de classe sur <html>
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default useDarkMode;
