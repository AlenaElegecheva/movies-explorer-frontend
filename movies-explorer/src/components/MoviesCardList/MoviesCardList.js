import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const { isLiked } = props;
  const cards = Array.apply(null, Array(4)).map((elem, i) => {
    return i;
  });
  return (
    <section className="cards">
      <ul className="cards__list">
        {cards.map((card, i) => (
          <MoviesCard key={ i } isLiked={isLiked} />
        ))}
      </ul>
      <div className="cards__button-container">
        <button className="cards__button">
          Ещё
        </button>
      </div>

    </section >
  );
}

export default MoviesCardList;