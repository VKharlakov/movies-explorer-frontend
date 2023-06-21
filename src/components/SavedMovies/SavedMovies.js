import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

function SavedMovies () {
    return(
        <section className='saved-movies'>
            <Header loggedIn={true}/>
            <SearchForm />
            <MoviesCardList isSavedMovies={true}/>
            <Footer />
        </section>
    )
}

export default SavedMovies