import { useMovieContext } from "../contexts/Context"
import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {
  const {addToFavourites, removeFromFavourites, isFavourite} = useMovieContext();
  const favoured = isFavourite(movie.id);
  function onFavClick(e){
    e.preventDefault();
    if(favoured){
      removeFromFavourites(movie.id);
    } else {
      addToFavourites(movie);
    }
  }
  return (
    <Link to={`/movie/${movie.imdbID}`} className='movie-card-link'>
      <div className='movie-card'>
        <div className='movie-image-container'>
          <img src={movie.poster} alt={movie.title} className='movie-image' />
          <div className='movie-overlay'>
              <button
                className={`favorite-button ${favoured ? 'is-favourite' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onFavClick(e);
                }}
                aria-pressed={favoured}
                aria-label={favoured ? 'Remove from favourites' : 'Add to favourites'}
              >
                {favoured ? '❤️' : '🤍'}
              </button>
              
          </div>
        </div>
        <div className='movie-info'>
          <h3 className='movie-title'>{movie.title}</h3>
        <p className='movie-date'>{movie.release_date}</p>
      </div>
      </div>
    </Link>
  )
}

export default MovieCard