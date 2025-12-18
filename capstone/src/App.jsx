import MovieCard from './components/MovieCard'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourite />}/>
      </Routes>
    </main>
  )
}

export default App
