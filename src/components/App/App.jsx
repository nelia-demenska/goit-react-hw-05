import { Route, Routes } from 'react-router';
import css from './App.module.css'
import Navigation from '../Navigation/Navigation'
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'))

export default function App () {
  return (
    <div className={css.container}>
      <Navigation />

      <Suspense fallback={<h2>Page is loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};