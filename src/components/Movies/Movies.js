import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'

function Movies() {
    return(
        <section className='movies'>
            <Header loggedIn={true}/>
            <SearchForm />
            <MoviesCardList isSavedMovies={false}/>
            <Footer />
        </section>
    )
}

export default Movies