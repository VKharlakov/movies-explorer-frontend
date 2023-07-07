import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import moviesApi from '../../utils/MoviesApi.js'
import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'
import React from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'
import { filterMovies, filterShortMovies, transformMovies } from '../../utils/utils.js'

function Movies({ setIsLoader, setIsInfoTooltip, loggedIn, savedMoviesList, onLike, onDelete }) {
    const currentUser = React.useContext(CurrentUserContext)
    const [NotFound, setNotFound] = React.useState(false)
    const [initialMovies, setInitialMovies] = React.useState([])
    const [filteredMovies, setFilteredMovies] = React.useState([])
    const [isAllMovies, setIsAllMovies] = React.useState([]);
    const [shortMovies, setShortMovies] = React.useState(false);

    // Поиск по массиву и установка состояния
    function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
        const moviesList = filterMovies(movies, userQuery, false);
        if (moviesList.length === 0) {
            setIsInfoTooltip({
                isOpen: true,
                successful: false,
                text: 'Ничего не было найдено.',
            });
            setNotFound(true);
        } else {
            setNotFound(false);
        }
        setInitialMovies(moviesList);
        setFilteredMovies(
            shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
        );
        localStorage.setItem(`movies`, JSON.stringify(moviesList));
    }

    // Поиск по запросу
    function handleSearchSubmit(inputValue) {
        localStorage.setItem(`movieSearch`, inputValue);
        localStorage.setItem(`shortMovies`, shortMovies);
        if (isAllMovies.length === 0) {
            setIsLoader(true);
            moviesApi
                .getMovies()
                .then(movies => {
                    setIsAllMovies(movies);
                    handleSetFilteredMovies(transformMovies(movies), inputValue, shortMovies);
                })
                .catch(() =>
                    setIsInfoTooltip({
                        isOpen: true,
                        successful: false,
                        text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
                    })
                )
                .finally(() => setIsLoader(false));
        } else {
            handleSetFilteredMovies(isAllMovies, inputValue, shortMovies);
        }
    }

    // Состояние чекбокса
    function handleShortFilms(inputValue) {
        setShortMovies(!shortMovies);
        if (!shortMovies) {
            setFilteredMovies(filterShortMovies(initialMovies))
        } else {
            setFilteredMovies(initialMovies)
        }
        localStorage.setItem(`shortMovies`, !shortMovies);
    }

    // Проверка чекбокса в локальном хранилище при заходе на страницу
    React.useEffect(() => {
        if (localStorage.getItem(`shortMovies`) === 'true') {
            setShortMovies(true);
        } else {
            setShortMovies(false);
        }
    }, [currentUser]);

    // Рендер фильмов из локального хранилища
    React.useEffect(() => {
        if (localStorage.getItem(`movies`)) {
            const movies = JSON.parse(
                localStorage.getItem(`movies`)
            );
            setInitialMovies(movies);
            if (
                localStorage.getItem(`shortMovies`) === 'true'
            ) {
                setFilteredMovies(filterShortMovies(movies));
            } else {
                setFilteredMovies(movies);
            }
        }
    }, [currentUser]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm
                    handleSearchSubmit={handleSearchSubmit}
                    handleShortFilms={handleShortFilms}
                    shortMovies={shortMovies}
                    setIsInfoTooltip={setIsInfoTooltip}
                />
                {!NotFound &&
                    (<MoviesCardList
                        isSavedMovies={false}
                        moviesList={filteredMovies}
                        savedMoviesList={savedMoviesList}
                        onLike={onLike}
                        onDelete={onDelete}
                    />)
                }
            </main>
            <Footer />
        </>
    )
}

export default Movies