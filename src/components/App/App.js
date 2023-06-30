import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import InfoTooltip from "../InfoToolTip/InfoToolTip";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as api from '../../utils/MainApi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [InfoTooltipPopup, setInfoToolTipPopup] = useState(false);
  const navigate = useNavigate();


  useEffect(() => { // загрузка карточек с сервера
    if (loggedIn) {
      api.getSaveCards()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  useEffect(() => { // загрузка данных пользователя с сервера
    if (loggedIn) {
      api.getUserInfo()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  // открытие бурегр-меню
  function handleMenuClick() {
    setMenuOpen(true);
  }

  // закрытие попапов
  function closePopups() {
    setMenuOpen(false);
    setIsSuccess(true);
    setInfoToolTipPopup(false);
  }

  //регистрация пользователя
  function handleRegisterSubmit(inputValues) {
    setIsLoading(true);
    api.register(inputValues)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true })
        setCurrentUser(inputValues)
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setInfoToolTipPopup(true)
      });
  }

  //авторизация пользователя
  function handleLoginSubmit(inputValues) {
    setIsLoading(true);
    api.login(inputValues)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function tokenCheck() {
    setIsLoading(true);
    api.getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        navigate('/movies', { replace: true })
      })
      .catch((err) => {
        console.log(err);
        navigate('/', { replace: true })
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  //Проверка токена и авторизация пользователя
  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    api.updateUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setInfoToolTipPopup(true)
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('movies');
    localStorage.removeItem('movieSearch');
    localStorage.removeItem('shortMovies');
    localStorage.removeItem('allMovies');
    navigate("/", { replace: true });
  };

  function handleLikeClick(card) {
    api.postSaveCard(card)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteSaveCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <div className="page__content">
        {isLoading ? (
          <Preloader />
        ) : (
          <CurrentUserContext.Provider value={currentUser}>
            <Routes>
              <Route
                path="/"
                element={<Main />}
              />
              <Route
                path="/signin"
                element={<Login
                  loggedIn={loggedIn}
                  onLogin={handleLoginSubmit}
                  isLoading={isLoading}
                />} />
              <Route
                path="/signup"
                element={<Register
                  onRegistr={handleRegisterSubmit}
                  isLoading={isLoading}
                />} />
              <Route
                path="/movies"
                element={<ProtectedRoute element={Movies}
                  signOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  loggedIn={loggedIn}
                  menuOpen={menuOpen}
                  closePopups={closePopups}
                  handleMenuClick={handleMenuClick}
                  handleCardDelete={handleCardDelete}
                  isLoading={isLoading}
                  handleLikeClick={handleLikeClick}
                  savedMovies={savedMovies}
                />} />
              <Route
                path="/saved-movies"
                element={<ProtectedRoute element={SavedMovies}
                  loggedIn={loggedIn}
                  menuOpen={menuOpen}
                  closePopups={closePopups}
                  handleMenuClick={handleMenuClick}
                  handleCardDelete={handleCardDelete}
                  handleLikeClick={handleLikeClick}
                  savedMovies={savedMovies}
                />} />
              <Route
                path="/profile"
                element={<ProtectedRoute element={Profile}
                  loggedIn={loggedIn}
                  menuOpen={menuOpen}
                  isSuccess={isSuccess}
                  closePopups={closePopups}
                  handleMenuClick={handleMenuClick}
                  isLoading={isLoading}
                  handleUpdateUser={handleUpdateUser}
                  handleSignOut={handleSignOut}
                />} />
              <Route
                path="/*"
                element={<NotFound />} />
            </Routes>
            <InfoTooltip isSuccess={isSuccess} onClose={closePopups} InfoTooltipPopup={InfoTooltipPopup} />
          </CurrentUserContext.Provider >
        )}
      </div>
    </div>
  );
}

export default App;