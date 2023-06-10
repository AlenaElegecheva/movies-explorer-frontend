import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false)

  function handleMenuClick() {
    setMenuOpen(true);
    console.log("open")
  }

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  function closePopups() {
    setMenuOpen(false);
  }
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleMenuClick={handleMenuClick}
              />}
          />
          <Route
            path="/signin"
            element={<Login />} />
          <Route
            path="/signup"
            element={<Register />} />
          <Route
            path="/movies"
            element={
              <Movies
                menuOpen={menuOpen}
                closePopups={closePopups}
                isLiked={isLiked}
                handleLikeClick={handleLikeClick}
                handleMenuClick={handleMenuClick}
              />} />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                menuOpen={menuOpen}
                closePopups={closePopups}
                isLiked={isLiked}
                handleLikeClick={handleLikeClick}
              />} />
          <Route
            path="/profile"
            element={
              <Profile
                menuOpen={menuOpen}
                closePopups={closePopups}
                handleMenuClick={handleMenuClick}
              />} />
          <Route
            path="/*"
            element={<NotFound />} />
        </Routes>
        <BurgerMenu
          menuOpen={menuOpen}
          closePopups={closePopups}
        />
      </div>
    </div>
  );
}

export default App;