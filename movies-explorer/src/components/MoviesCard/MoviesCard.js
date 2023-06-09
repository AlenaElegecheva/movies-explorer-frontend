import React from 'react';
import './MoviesCard.css';
import image1 from '../../images/pic_1.jpg'
import image2 from '../../images/pic_2.jpg'
import image3 from '../../images/pic_3.jpg'

function MoviesCard({ trailerLink, isLiked }) {
  return (
    <>
      <li className="card">
        <a href={trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__image"
            alt='постер к фильму'
            src={image1}
          />
        </a>
        <div className="card__container">
          <figcaption className="card__info-container">
            <h2 className="card__text">33 слова о дизайне</h2>
            <p className="card__time">1ч 47м</p>
          </figcaption>
          <button type="button" className="card__delete-button"></button>
          <button type="button" className='card__like-button card__like-button_active' onClick={isLiked}></button>
        </div>
      </li>
      <li className="card">
        <a href={trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__image"
            alt='постер к фильму'
            src={image2}
          />
        </a>
        <div className="card__container">
          <figcaption className="card__info-container">
            <h2 className="card__text">Киноальманах «100 лет дизайна»</h2>
            <p className="card__time">1ч 3м</p>
          </figcaption>
          <button type="button" className="card__delete-button"></button>
          <button type="button" className='card__like-button'></button>
        </div>
      </li>
      <li className="card">
        <a href={trailerLink} target="_blank" rel="noreferrer">
          <img
            className="card__image"
            alt='постер к фильму'
            src={image3}
          />
        </a>
        <div className="card__container">
          <figcaption className="card__info-container">
            <h2 className="card__text">В погоне за Бенкси</h2>
            <p className="card__time">1ч 42м</p>
          </figcaption>
          <button type="button" className="card__delete-button"></button>
          <button type="button" className='card__like-button'></button>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;