import MovieCard from "../components/MovieCard"
import { useState } from "react"

const Home = () => {
    const [search, setSearch] = useState("")
    const movies = [
        {id: 1, title: "First movie"},
        {id: 2, title: "Second movie"}

    ]
    const handleSearch = (e) => {
      e.preventDefault()
      setSearch('')
    };

  return (
    <div className="home-wrapper">
        <div className="home-container">
          <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for your favourite movie"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
          <div className="movies-grid">
            {movies
              .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
              .map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
          </div>
          {movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())).length === 0 && (
            <div className="empty-state">
              No movies found
            </div>
          )}
        </div>
    </div>
  )
}

export default Home