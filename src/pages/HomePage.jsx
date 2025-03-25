import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api';
import MovieList from '../components/MovieList/MovieList';
import css from './HomePage.module.css'

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
    const getMovies = async () => {
        const data = await fetchTrendingMovies();
        setMovies(data);
    };
    getMovies();
    }, []);

    return (
    <div className={css.wrapper}>
        <h2 className={css.title}>Trending today</h2>
        <MovieList movies={movies} className={css.movieList} />
    </div>
    );
}