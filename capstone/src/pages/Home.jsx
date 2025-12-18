import MovieCard from "../components/MovieCard"
import { useState } from "react"

const Home = () => {
    const [search, setSearch] = useState("")
    const movies = [
        {id: 1, title: "First movie"},
        {id: 2, title: "Second movie"}

    ]
    const handleSearch = () => {};
  return (
    <div className="">
        <form onSubmit={handleSearch} className="">
          <input type="text" 
          placeholder="Search for your favourite movie"
          className=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <button type="submit" className="">
            Search
          </button>
        </form>
       <div>
        {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
        </div>
    </div>
  )
}

export default Home
