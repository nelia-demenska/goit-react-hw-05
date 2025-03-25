import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../../api';
import css from './MovieCast.module.css'

const defaultImg =
    "https://dummyimage.com/200x300/cccccc/000000.jpg&text=No+poster";

export default function MovieCast () {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    const getData = async () => {
        const dataCast = await fetchMovieCast(movieId);
        setCast(dataCast);
    };
    getData();
    }, [movieId]);

    return (
    <div id='cast-section'>
        <ul className={css.castList}>
        {cast.map(actor => (
            <li key={actor.id}>
            <img src={actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : defaultImg} alt={actor.original_name} />
            <div className={css.castActor}>
                <h4>{actor.original_name}</h4>
                <p>Character: {actor.character}</p>
            </div>
            </li>
        ))}
        </ul>
    </div>
    );
};