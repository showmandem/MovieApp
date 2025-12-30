import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { useMovieContext } from '../contexts/Context';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(imdbID);
        if (data.Response === 'False') {
          setError('Movie not found');
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [imdbID]);

  const handleFavourite = () => {
    if (!movie) return;
    const movieObj = {
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      release_date: movie.Year,
      imdbID: movie.imdbID,
    };
    if (isFavourite(movie.imdbID)) {
      removeFromFavourites(movie.imdbID);
    } else {
      addToFavourites(movieObj);
    }
  };

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!movie) {
    return <div className="error">Movie not found</div>;
  }

  return (
    <div className="movie-details-wrapper">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="movie-details-container">
        <div className="movie-details-poster">
          <img src={movie.Poster} alt={movie.Title} />
          <button
            className={`detail-favorite-button ${isFavourite(movie.imdbID) ? 'is-favourite' : ''}`}
            onClick={handleFavourite}
            aria-pressed={isFavourite(movie.imdbID)}
            aria-label={isFavourite(movie.imdbID) ? 'Remove from favourites' : 'Add to favourites'}
          >
            {isFavourite(movie.imdbID) ? '❤️' : '🤍'}
          </button>
        </div>

        <div className="movie-details-info">
          <h1 className="movie-details-title">{movie.Title}</h1>

          <div className="movie-details-meta">
            <span className="movie-year">{movie.Year}</span>
            <span className="movie-runtime">{movie.Runtime}</span>
            <span className="movie-rated">{movie.Rated}</span>
          </div>

          <div className="movie-genre">
            <strong>Genre:</strong>
            <p>{movie.Genre}</p>
          </div>

          <div className="movie-plot">
            <strong>Plot:</strong>
            <p>{movie.Plot}</p>
          </div>

          <div className="movie-cast">
            <strong>Cast:</strong>
            <p>{movie.Actors}</p>
          </div>

          <div className="movie-director">
            <strong>Director:</strong>
            <p>{movie.Director}</p>
          </div>

          <div className="movie-ratings">
            <strong>Ratings:</strong>
            <div className="ratings-container">
              {movie.Ratings && movie.Ratings.map((rating, index) => (
                <div key={index} className="rating-item">
                  <span className="rating-source">{rating.Source}</span>
                  <span className="rating-value">{rating.Value}</span>
                </div>
              ))}
              <div className="rating-item">
                <span className="rating-source">IMDB</span>
                <span className="rating-value">{movie.imdbRating}/10</span>
              </div>
            </div>
          </div>

          {movie.Production && (
            <div className="movie-production">
              <strong>Production:</strong>
              <p>{movie.Production}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
