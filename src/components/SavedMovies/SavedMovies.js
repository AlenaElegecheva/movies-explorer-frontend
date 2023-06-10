import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function SavedMovies(props) {
  const { menuOpen, closePopups, isLiked } = props;
  return (
    <section className="movies">
      <BurgerMenu
        menuOpen={menuOpen}
        closePopups={closePopups} />
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList isLiked={isLiked} />
      <Footer />
    </section>
  );
}

export default SavedMovies;