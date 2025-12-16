import MovieCard from "../components/MovieCard"

const Home = () => {
    const movies = [
        {id: 1, title: "First movie"},
        {id: 2, title: "Second movie"}

    ]
  return (
    <div className="">
       {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Home
