import { useMovieContext } from "../contexts/Context"
import MovieCard from "../components/MovieCard"

const Favourite = () => {
  const { favourites } = useMovieContext();
  if (favourites.length > 0)
    return (
      <div className="movies-grid">
        {favourites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    )

  return (
    <div className="favourite-container">
      <div className="favourite-empty-state">
        <h2 className="favourite-title">You have not added a favourite yet</h2>
        <p className="favourite-text">Start adding movies</p>
      </div>
    </div>
  )
}

export default Favourite
