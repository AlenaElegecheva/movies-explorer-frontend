import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isLiked }) {
  return (
    <section className="movies">
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList onClick={isLiked} />
      <Footer />
    </section>
  );
}

export default SavedMovies;