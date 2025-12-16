const MovieCard = ({movie}) => {
   function onFavClick(){
    
   }
  return (
    <div className=''>
      <div className=''>
        <img src="" alt="" />
        <div className=''>
            <button className='' onClick={onFavClick}>
                🤍
            </button>
            
        </div>
      </div>
      <div className=''>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
