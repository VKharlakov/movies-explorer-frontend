import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'

function Movies() {
    return (
        <>
            <Header loggedIn={true} />
            <main className='movies'>
                <SearchForm />
                <MoviesCardList isSavedMovies={false} />
            </main>
            <Footer />
        </>
    )
}

export default Movies