import Navbar from './components/Navbar'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contexts/Context'

function App() {
  

  return (
    <MovieProvider className='app-container'>
      <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movie/:imdbID' element={<MovieDetails />}/>
        <Route path='/favourites' element={<Favourite />}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App