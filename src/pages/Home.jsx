import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react"
import { fetchMovies } from "../services/api" 

const Home = () => {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getMovies = async () => {
            try {
                const moviesData = await fetchMovies();
                const moviesWithId = moviesData.map((movie, index) => ({
                    id: index,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster,
                    imdbID: movie.imdbID
                }));
                setMovies(moviesWithId);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getMovies();
    }, []); 

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch('')
    };

    
    if (loading) {
        return <div className="loading">Loading movies...</div>
    }

   
    if (error) {
        return <div className="error">Error: {error}</div>
    }

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-wrapper">
            <div className="home-container">
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        placeholder="Search for your favourite movie"
                        className="search-input"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>
                <div className="movies-grid">
                    {filteredMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
                {filteredMovies.length === 0 && (
                    <div className="empty-state">
                        No movies found
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home