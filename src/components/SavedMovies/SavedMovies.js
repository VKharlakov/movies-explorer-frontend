import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'
import React from 'react'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { filterMovies, filterShortMovies } from '../../utils/utils'
import { useTranslation } from 'react-i18next'

function SavedMovies({ onDelete, loggedIn, savedMoviesList, setIsInfoTooltip }) {
    const currentUser = React.useContext(CurrentUserContext)
    const [shortMovies, setShortMovies] = React.useState(false);
    const [NotFound, setNotFound] = React.useState(false)
    const [showedMovies, setShowedMovies] = React.useState(savedMoviesList)
    const [filteredMovies, setFilteredMovies] = React.useState(showedMovies)

    //Translate
    const { t } = useTranslation()

    // Поиск фильма по запросу
    function handleSearchSubmit(inputValue) {
        const moviesList = filterMovies(savedMoviesList, inputValue, shortMovies);
        if (moviesList.length === 0) {
            setNotFound(true);
            setIsInfoTooltip({
                isOpen: true,
                successful: false,
                text: t('errors.notFound'),
            });
        } else {
            setNotFound(false);
            setFilteredMovies(moviesList);
            setShowedMovies(moviesList);
        }
    }

    // Изменение состояния чекбокса
    function handleShortFilms() {
        if (!shortMovies) {
            setShortMovies(true);
            localStorage.setItem(`shortSavedMovies`, true);
            setShowedMovies(filterShortMovies(filteredMovies));
            filterShortMovies(filteredMovies).length === 0 ? setNotFound(true) : setNotFound(false);
        } else {
            setShortMovies(false);
            localStorage.setItem(`shortSavedMovies`, false);
            filteredMovies.length === 0 ? setNotFound(true) : setNotFound(false);
            setShowedMovies(filteredMovies);
        }
    }

    // Проверка чекбокса в локальном хранилище
    React.useEffect(() => {
        if (localStorage.getItem(`shortSavedMovies`) === 'true') {
            setShortMovies(true);
            setShowedMovies(filterShortMovies(savedMoviesList));
        } else {
            setShortMovies(false);
            setShowedMovies(savedMoviesList);
        }
    }, [savedMoviesList, currentUser]);

    React.useEffect(() => {
        setFilteredMovies(savedMoviesList);
        savedMoviesList.length !== 0 ? setNotFound(false) : setNotFound(true);
    }, [savedMoviesList]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='saved-movies'>
                <SearchForm
                    handleSearchSubmit={handleSearchSubmit}
                    handleShortFilms={handleShortFilms}
                    shortMovies={shortMovies}
                    setIsInfoTooltip={setIsInfoTooltip}
                />
                {!NotFound && (
                    <MoviesCardList
                        isSavedMovies={true}
                        moviesList={showedMovies}
                        savedMoviesList={savedMoviesList}
                        onDelete={onDelete}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies