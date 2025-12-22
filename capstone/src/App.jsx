import Navbar from './components/Navbar'
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div className='app-container'>
      <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourite />}/>
      </Routes>
    </main>
    </div>
  )
}

export default App