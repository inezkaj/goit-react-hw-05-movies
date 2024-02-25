import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('components/Home/Home.jsx'));
const MoviesPage = lazy(() => import('components/Movies/MoviesPage.jsx'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('components/MovieDetails/Cast'));
const Reviews = lazy(() => import('components/MovieDetails/Reviews'));

const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.navApp}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
