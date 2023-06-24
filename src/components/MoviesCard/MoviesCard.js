import React from "react";
import './MoviesCard.css';
import { durationConverter } from "../../utils/constants";

function MoviesCard({ card, isSavedFilms, handleLikeClick, handleCardDelete, saved, savedMovies }) {

  function onCardClick() {
    if (saved) {
      handleCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
    } else {
      handleLikeClick(card);
    }
  }

  function onDelete() {
    handleCardDelete(card);
  }

  return (
    <li className="card">
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="card__image"
          alt={card.nameRU}
          src={isSavedFilms ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
        />
      </a>
      <div className="card__container">
        <figcaption className="card__info-container">
          <h2 className="card__text">{card.nameRU}</h2>
          <p className="card__time">{durationConverter(card.duration)}</p>
        </figcaption>
        {isSavedFilms ? (
          <button
            type="button"
            className="card__delete-button"
            onClick={onDelete}>
          </button>
        ) : (
          <button
            type="button"
            className={`${saved ? 'card__like-button card__like-button_active' : 'card__like-button'}`}
            onClick={onCardClick} >
          </button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;