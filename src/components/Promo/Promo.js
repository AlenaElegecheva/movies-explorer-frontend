import React from 'react';
import './Promo.css';
import curls from '../../images/curls.svg'

function Promo() {
  return (
    <section className="promo" id="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={curls} alt="спираль" />
      </div>
    </section>
  );
}

export default Promo;