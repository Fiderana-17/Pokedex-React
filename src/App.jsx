import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import PokemonPage from './pages/PokemonPage';

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/pokemon' element={<PokemonPage/>}/>
        <Route></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
