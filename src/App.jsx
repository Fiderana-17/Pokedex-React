import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

import Header from "./components/communs/Header";
import Accueil from "./pages/LandingPage";
import Pokemon from "./pages/PokemonPage";
import FavorisPages from "./pages/FavorisPage";

// Ordre des pages
const pageOrder = {
  "/": 0,
  "/pokemon": 1,
  "/favoris": 2,
};

// Fonction qui renvoie les variants selon la direction
// Ici on inverse le sens par rapport à l'exemple précédent
const getVariants = (direction) => ({
  initial: { opacity: 0, x: direction > 0 ? -100 : 100 },  // si direction positive, slide vient de la droite → x = -100 (slide vers la gauche)
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: direction > 0 ? 100 : -100 },    // sort vers la droite si direction positive, inverse sinon
});

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

function AnimatedRoutes() {
  const location = useLocation();

  const [prevIndex, setPrevIndex] = useState(pageOrder[location.pathname]);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const currIndex = pageOrder[location.pathname];
    setDirection(currIndex - prevIndex);
    setPrevIndex(currIndex);
  }, [location.pathname, prevIndex]);

  const variants = getVariants(direction);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={pageTransition}
            >
              <Accueil />
            </motion.div>
          }
        />
        <Route
          path="/pokemon"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={pageTransition}
            >
              <Pokemon />
            </motion.div>
          }
        />
        <Route
          path="/favoris"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={pageTransition}
            >
              <FavorisPages />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
