import React from 'react';
import myphoto from '../../images/myphoto.jpeg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title section-title">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__content">
          <h3 className="about-me__heading">Алёна</h3>
          <p className="about-me__info">Фронтенд-разработчик, 30&nbsp;лет</p>
          <p className="about-me__description">
            Я&nbsp;родилась и&nbsp;живу в&nbsp;Томске, закончила Институт геологии и&nbsp;нефтегазового дела ТПУ. Я&nbsp;люблю путешествовать, а&nbsp;ещё увлекаюсь йогой. Хочу участвовать в&nbsp;проектах, которые сделают мир лучше и&nbsp;писать чистый красивый код.
          </p>
          <a
            href="https://github.com/AlenaElegecheva"
            className="about-me__link"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </article>
        <img src={myphoto} alt="фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;