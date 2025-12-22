const MovieCard = ({movie}) => {
   function onFavClick(){
    
   }
  return (
    <div className='movie-card'>
      <div className='movie-image-container'>
        <img src="" alt="" className='movie-image' />
        <div className='movie-overlay'>
            <button className='favorite-button' onClick={onFavClick}>
                🤍
            </button>
            
        </div>
      </div>
      <div className='movie-info'>
        <h3 className='movie-title'>{movie.title}</h3>
        <p className='movie-date'>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard