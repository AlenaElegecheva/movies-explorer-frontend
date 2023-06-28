import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import SearchError from '../SearchError/SearchError';
import { DECKTOP_VERSION, TABLET_VERSION, MOBILE_VERSION } from '../../utils/constants';

function MoviesCardList({
  handleLikeClick,
  handleCardDelete,
  isLoading,
  isNotFound,
  isReqError,
  isSavedFilms,
  savedMovies,
  cards
}) {

  const [shownCards, setShownCards] = useState(0);
  const { pathname } = useLocation;

  function cardsCount() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownCards(12);
    } else if (display > 768) {
      setShownCards(8);
    } else if (display < 768) {
      setShownCards(5);
    }
  }

  function showMoreCards() {
    const display = window.innerWidth;
    if (display > 1180) {
      setShownCards(shownCards + DECKTOP_VERSION);
    } else if (display > 768) {
      setShownCards(shownCards + TABLET_VERSION);
    }
    else if (display < 768) {
      setShownCards(shownCards + MOBILE_VERSION);
    }
  }

  useEffect(() => {
    cardsCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', cardsCount);
    }, 500);
  });

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {isNotFound && !isLoading && <SearchError errorText={'Ничего не найдено'} />}
      {isReqError && !isLoading && (
        <SearchError
          errorText={
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          }
        />
      )}
      {!isLoading && !isReqError && !isNotFound && (
        <>
          {pathname === '/saved-movies' ? (
            <>
              <ul className="cards__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    handleLikeClick={handleLikeClick}
                    card={card}
                    cards={cards}
                    handleCardDelete={handleCardDelete}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="cards__list">
                {(!!cards) ? cards.slice(0, shownCards).map((card) => (
                  <MoviesCard
                    key={isSavedFilms ? card._id : card.id}
                    handleLikeClick={handleLikeClick}
                    card={card}
                    cards={cards}
                    handleCardDelete={handleCardDelete}
                    isSavedFilms={isSavedFilms}
                    savedMovies={savedMovies}
                  />
                )) : ""}
              </ul>
              <div className="cards__button-container">
                {(!!cards && cards.length > shownCards) ? (
                  <button className="cards__button" onClick={showMoreCards}>
                    Ещё
                  </button>
                ) : (
                  ''
                )}
              </div>
            </>
          )}
        </>
      )}
    </section >
  );
}

export default MoviesCardList;