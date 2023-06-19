import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import './SavedMovies.css'

function SavedMovies () {
    return(
        <div className='saved-movies'>
            <Header loggedIn={true}/>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    )
}

export default SavedMovies