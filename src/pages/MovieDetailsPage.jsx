import { Suspense, useEffect, useRef, useState } from "react"
import { fetchMoviesById } from "../../api"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import css from './MovieDetailsPage.module.css'
import { buildLinkClass } from "../../helpers/buildLinkClass"

const defaultImg =
    "https://dummyimage.com/200x300/cccccc/000000.jpg&text=No+poster";

export default function MovieDetailsPage () {

    const {movieId} = useParams()
    const location = useLocation()
    const goBackLink = useRef(location.state ?? '/movies')
    const [movieDetails, setMovieDetails] = useState(null)
    
    useEffect(() => {
    const getData = async () => {
        const movieDetails = await fetchMoviesById(movieId)
        setMovieDetails(movieDetails)
    }
    getData()
    }, [movieId])

    if (!movieDetails) {
    return null
    }
    return (
    <div className={css.container}>
        <Link to={goBackLink.current} className={css.goBack}>← Go back</Link>

        <div className={css.movieInfo}>
            <img  src={movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`
        : defaultImg
    } alt={movieDetails.title} />

    
            <div className={css.movieWrapper}>
            <h1 className={css.title}>
                {`${movieDetails.title}`} {`(${new Date(movieDetails.release_date).getFullYear()})`}
            </h1>
            <p className={css.detail}>User Score: {(movieDetails.vote_average * 10).toFixed(0)}%</p>
            <h2>Overview</h2>
            <p className={css.description}>{`${movieDetails.overview}`}</p>
            <p className={css.detail}>Genres</p>
            <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
        </div>

        <hr />
        <div>
                <p className={css.additional}>Additional information</p>
                <nav className={css.navAddInfo}>
                    <NavLink className={buildLinkClass} to='reviews' >Reviews</NavLink>
                    <NavLink className={buildLinkClass} to='cast' >Cast</NavLink>
                </nav>
        </div>
        <hr />
        <Suspense fallback={<h2>Page is loading...</h2>}>
            <Outlet/>
        </Suspense>

    </div>
    )
}