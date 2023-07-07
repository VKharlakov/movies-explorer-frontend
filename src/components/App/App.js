import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Main from '../Main/Mains.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import React from 'react';
import Preloader from '../Preloader/Preloader';
import InfoToolTip from '../InfoToolTip/InfoToolTip';

function App() {
  const history = useNavigate()
  const location = useLocation()
  const [currentUser, setCurrentUser] = React.useState({})
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [savedMoviesList, setSavedMoviesList] = React.useState([])
  const [isLoader, setIsLoader] = React.useState(false)
  const [isInfoTooltip, setIsInfoTooltip] = React.useState({ isOpen: false, successful: true, text: '' });

  //  Закрыть окно с информацией
  function closeInfoTooltip() {
    setIsInfoTooltip({ ...isInfoTooltip, isOpen: false });
  }

  //  Регистрация учетной записи
  function handleRegister({ name, email, password }) {
    // setIsLoader(true);
    mainApi
      .createUser(name, email, password)
      .then(data => {
        if (data._id) {
          handleLogin({ email, password });
        }
      })
      .catch(err => {
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      }
      )
      // .finally(() => setIsLoader(false));
  }

  //  Вход в учетную запись
  function handleLogin({ email, password }) {
    // setIsLoader(true);
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history('/movies');
          setIsInfoTooltip({
            isOpen: true,
            successful: true,
            text: 'Добро пожаловать!',
          });
        }
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      // .finally(() => setIsLoader(false));
  }

  //  Выход из учетной записи
  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    history('/');
  }

  //  Изменение учетной записи
  function handleProfile({ name, email }) {
    setIsLoader(true);
    mainApi
      .updateUser(name, email)
      .then(newUserData => {
        setCurrentUser(newUserData);
        setIsInfoTooltip({
          isOpen: true,
          successful: true,
          text: 'Ваши данные обновлены!',
        });
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      )
      .finally(() => setIsLoader(false));
  }

  //  Добавление фильма в избранное
  function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then(newMovie => setSavedMoviesList([newMovie, ...savedMoviesList]))
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  //  Удаление фильма из избранного
  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter(m => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch(err =>
        setIsInfoTooltip({
          isOpen: true,
          successful: false,
          text: err,
        })
      );
  }

  //  Проверка авторизации пользователя при заходе на страницу
  React.useEffect(() => {
    const path = location.pathname;
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true);
            setCurrentUser(data);
            history(path);
          }
        })
        .catch((err) => {
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        }
        )
        .finally(() => {
          setIsLoader(false);
        })
    }
  }, [])

  //  Получение данных пользователя при заходе на страницу
  React.useEffect(() => {
    if (loggedIn) {
      setIsLoader(true);
      mainApi
        .getUserInfo()
        .then(res => setCurrentUser(res))
        .catch((err) => {
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        }
        )
        .finally(() => setIsLoader(false));
    }
  }, [loggedIn]);

  //  Получение списка избранных фильмов при заходе на страницу
  React.useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi
        .getSavedMovies()
        .then(data => {
          const UserMoviesList = data.filter(m => m.owner._id === currentUser._id);
          setSavedMoviesList(UserMoviesList);
        })
        .catch((err) => {
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            text: err,
          })
        }
        );
    }
  }, [currentUser, loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="app">
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn}/>} />
          <Route path='/register' element={
            <Register handleRegister={handleRegister} />
          }
          />
          <Route path='/login' element={
            <Login handleLogin={handleLogin} />
          }
          />
          <Route path='*' element={<NotFound />} />
          <Route path='/movies' element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              setIsLoader={setIsLoader}
              setIsInfoTooltip={setIsInfoTooltip}
              savedMoviesList={savedMoviesList}
              onLike={handleSaveMovie}
              onDelete={handleDeleteMovie}
            />
          }
          />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
              setIsInfoTooltip={setIsInfoTooltip}
              savedMoviesList={savedMoviesList}
              onDelete={handleDeleteMovie}
            />
          }
          />
          <Route path='/profile' element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              handleProfile={handleProfile}
              handleSignOut={handleSignOut}
            />
          }
          />
        </Routes>
        <Preloader isOpen={isLoader} />
        <InfoToolTip status={isInfoTooltip} onClose={closeInfoTooltip} />
      </section>
    </CurrentUserContext.Provider>
  );
}

export default App;
