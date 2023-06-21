import './MoviesCard.css'

function MoviesCard({isSavedMovies}) {
    return (
        <div className='movies-card'>
            <img className='movies-card__thumbnail' alt='Обложка фильма' src='https://images.unsplash.com/photo-1559769697-23e044c5e0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
            <h2 className='movies-card__title'>Реальная любовь</h2>
            {isSavedMovies 
            ? <button className='movies-card__delete-button' type='button'/> 
            : <button className='movies-card__like-button' type='button'/>}
            <p className='movies-card__duration'>1ч 42м</p>
        </div>
    )
}

export default MoviesCard