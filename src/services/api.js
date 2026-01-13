const API_KEY = '4783bbe9'
const BASE_URL = 'https://www.omdbapi.com/'

export const fetchMovies = async () => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=movie&type=movie`);
    const data = await response.json();
    return data.Search;
}
export const fetchMovie = async (searchTerm) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
    const data = await response.json();
    return data.Search;
};

export const fetchMovieDetails = async (omdbID) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${omdbID}&plot=full`);
    const data = await response.json();
    return data;
};
