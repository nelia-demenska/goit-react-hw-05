import axios from "axios"


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers = {
    common: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWNiYjlmMjU1NjIyZWI5YzM3ODkyNWNlNDk2N2UyZSIsIm5iZiI6MTc0MjY1MTAxNy4xODU5OTk5LCJzdWIiOiI2N2RlYmU4OTRhYTk2NmNlOGM2OWM1ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DB-GpxwGbqdvtAK1c8m9x_3PmjQD89DHsOYrRgvU_Zs'
    }
}

export const fetchTrendingMovies = async () => {
    const {data} = await axios.get('/trending/movie/week') 
    return data.results
}

export const fetchMoviesById = async (id) => {
    const {data} = await axios.get(`/movie/${id}`)
    return data
}

export const fetchMoviesByQuery = async (query) => {
    const {data} = await axios.get('/search/movie', {
        params: {
            query: query
        }
    })
    return data.results
}

export const fetchMovieImage = async (poster_path) => {
    const defaultImg = "https://placehold.co/400x600?text=No+Poster&font=roboto";
    
    if(!poster_path) return defaultImg;
    return `https://image.tmdb.org/t/p/w400${poster_path}`;
}

export const fetchMovieReviews = async (id) => {
    const {data} = await axios.get(`/movie/${id}/reviews`)
    return data.results
}

export const fetchMovieCast = async (id) => {
    const {data} = await axios.get(`/movie/${id}/credits`)
    return data.cast
}