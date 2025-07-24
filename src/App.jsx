import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/LandingPage";
import Pokemon from "./pages/PokemonPage";
import TypesPokemonSection from "./components/sections/TypesPokemonSection"
import FonctionnalitésSections from './components/sections/FonctionnalitésSections';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/pokemon" element={<Pokemon />}/>
      </Routes>
    </Router>
  );
}


export default App;