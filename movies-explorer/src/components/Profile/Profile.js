import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <section className="profile">
        <h3 className="profile__title">Привет, Алёна!</h3>
        <form id="form" className="profile__form" >
          <div className='profile__row'>
            <label className="profile__field">
              Имя
            </label>
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              value={'Алёна'}
              required
            />
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__border"></div>
          <div className='profile__row'>
            <label className="profile__field">
              E-mail
            </label>
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              value={'test@test.ru'}
              required
            />
            <span className="profile__input-error"></span>
          </div>
          <button
            type="submit"
            className="profile__button-save profile__button"
          >
            Редактировать
          </button>
          <button type="button" className="profile__button-logout profile__button">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;