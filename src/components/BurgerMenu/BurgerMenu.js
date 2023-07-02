import React from "react";
import { NavLink } from "react-router-dom";
import './BurgerMenu.css';

function BurgerMenu({ menuOpen, closePopups }) {
  const navLinkClassName = ({ isActive }) =>
    `menu__link ${isActive ? "menu__link_active" : ""}`;

  return (
    <div className={`menu ${menuOpen ? "menu_opened" : ""}`}>
      <div className="menu__container">
        <button className="menu__close-icon" type="button" aria-label="закрыть" onClick={closePopups}></button>
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/" className='menu__link'>
              Главная
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/movies" className={navLinkClassName}>
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/saved-movies" className={navLinkClassName}>
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;