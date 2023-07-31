import React from 'react'
import useScreenWidth from '../../hooks/useScreenWidth'
import { DEVICE_PARAMS } from '../../utils/constants'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function MoviesCardList({ isSavedMovies, moviesList, savedMoviesList, onLike, onDelete }) {
    const screenWidth = useScreenWidth()
    const location = useLocation()
    const { desktop, tablet, mobile } = DEVICE_PARAMS
    const [isMount, setIsMount] = React.useState(true)
    const [showMovieList, setShowMovieList] = React.useState([])
    const [cardsShowDetails, setCardsShowDetails] = React.useState({ total: 12, more: 3 })

    //Translation
    const { t } = useTranslation()

    // Изменение количества карточек при разной ширине экрана
    React.useEffect(() => {
        if (location.pathname === '/movies') {
            if (screenWidth > desktop.width) {
                setCardsShowDetails(desktop.cards);
            } else if (screenWidth <= desktop.width && screenWidth > mobile.width) {
                setCardsShowDetails(tablet.cards);
            } else {
                setCardsShowDetails(mobile.cards);
            }
            return () => setIsMount(false);
        }
    }, [screenWidth, isMount, desktop, tablet, mobile, location.pathname]);

    // Изменение отображаемого массива фильмов в зависимости от ширины экрана
    React.useEffect(() => {
        if (moviesList.length) {
            const res = moviesList.filter((item, i) => i < cardsShowDetails.total);
            setShowMovieList(res);
        }
    }, [moviesList, cardsShowDetails.total]);

    // Отображение дополнительных фильмов
    function handleClickMoreMovies() {
        const start = showMovieList.length;
        const end = start + cardsShowDetails.more;
        const additional = moviesList.length - start;

        if (additional > 0) {
            const newCards = moviesList.slice(start, end);
            setShowMovieList([...showMovieList, ...newCards]);
        }
    }

    function findSavedMovie(savedMoviesList, movieCard) {
        return savedMoviesList.some(object => object.movieId === movieCard.id)
    }

    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__container'>
                {showMovieList.map(movie => (
                    <MoviesCard
                        key={movie.id || movie._id}
                        isSavedMovies={isSavedMovies}
                        onLike={onLike}
                        onDelete={onDelete}
                        movie={movie}
                        saved={findSavedMovie(savedMoviesList, movie)}
                    />
                ))}
            </ul>
            {location.pathname === '/movies' && showMovieList.length >= 5 && showMovieList.length < moviesList.length && (
                <button
                    className='movies-card-list__button'
                    onClick={handleClickMoreMovies}>{t('movies.more')}</button>
            )}
        </section>
    )
}

export default MoviesCardList