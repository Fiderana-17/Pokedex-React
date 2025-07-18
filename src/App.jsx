import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./compenents/LandingPage"
import PokemonCard from "./compenents/PokemonCard"

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/pokemon' element={<PokemonCard/>}/>
        <Route></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
