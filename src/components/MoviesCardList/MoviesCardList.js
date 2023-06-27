import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList({isSavedMovies}) {
    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__container'>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
                <li><MoviesCard isSavedMovies={isSavedMovies}/></li>
            </ul>
            <button className='movies-card-list__button'>Еще</button>
        </section>
    )
}

export default MoviesCardList