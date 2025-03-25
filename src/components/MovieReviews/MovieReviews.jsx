import { useEffect, useState } from "react"
import { fetchMovieReviews } from "../../../api"
import { useParams } from "react-router-dom"
import css from './MovieReviews.module.css'

export default function MovieReviews () {
    const [reviews, setReviews] = useState([])
    const {movieId} = useParams()

    useEffect(() => {
    if (!movieId) return
    const getData = async () => {
        const dataReviews = await fetchMovieReviews(movieId);
        setReviews(dataReviews);
    }
    getData();
    }, [movieId])

    if(!reviews.length) return `This movie has no reviews yet`

    return (
        <div id='review-section'>
            {reviews.map(review => (
                <div className={css.reviewContainer} key={review.id}>
                    <h3 className={css.reviewTitle}>Author: {review.author}</h3>
                    <p className={css.reviewText}>{review.content}</p>
                </div>
            ))}
        </div>
    );
};