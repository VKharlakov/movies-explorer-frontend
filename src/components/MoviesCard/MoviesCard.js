import './MoviesCard.css'
import { transformDuration } from '../../utils/utils';

function MoviesCard({ saved, movie, onLike, onDelete, isSavedMovies }) {
    // Добавить фильм в избранное
    function handleLike() {
        saved ? onDelete(movie) : onLike(movie)
    }

    // Удалить фильм из избранного
    function handleDelete() {
        onDelete(movie);
    }

    return (
        <div className='movies-card'>
            <a className='movies-card__thumbnail' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img
                    className='movies-card__thumbnail-img'
                    alt={movie.nameRU}
                    src={movie.image}
                    title={`${movie.description} \n\nСнято: ${movie.country} ${movie.year}г.`}
                />
            </a>
            <h2 className='movies-card__title'>{movie.nameRU}</h2>
            {isSavedMovies
                ? <button
                    className='movies-card__delete-button'
                    type='button'
                    onClick={handleDelete}
                />
                : <button
                    className={`movies-card__like-button ${saved ? 'movies-card__like-button_active' : ''}`}
                    type='button'
                    onClick={handleLike}
                />}
            <p className='movies-card__duration'>{transformDuration(movie.duration)}</p>
        </div>
    )
}

export default MoviesCard