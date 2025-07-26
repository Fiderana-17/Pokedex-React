import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from "./pages/LandingPage";
import Pokemon from "./pages/PokemonPage";
import FavorisPages from './pages/FavorisPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/pokemon" element={<Pokemon />}/>
        <Route path="/favoris" element={<FavorisPages />}/>
      </Routes>
    </Router>
  );
}


export default App;