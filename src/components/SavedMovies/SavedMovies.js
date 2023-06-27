import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

function SavedMovies() {
    return (
        <>
            <Header loggedIn={true} />
            <main className='saved-movies'>
                <SearchForm />
                <MoviesCardList isSavedMovies={true} />
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies