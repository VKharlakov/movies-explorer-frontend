import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList() {
    return (
        <div className='movies-card-list__container'>
            <ul className='movies-card-list'>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
                <li><MoviesCard /></li>
            </ul>
            <button className='movies-card-list__button'>Еще</button>
        </div>
    )
}

export default MoviesCardList