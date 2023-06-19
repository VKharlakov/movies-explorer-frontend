import Header from '../Header/Header.js'
import SearchForm from '../SearchForm/SearchForm.js'
import Footer from '../Footer/Footer.js'
import './Movies.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList.js'

function Movies() {
    return(
        <div className='movies'>
            <Header loggedIn={true}/>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    )
}

export default Movies