import React from 'react'
import './SearchForm.css'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useLocation } from 'react-router-dom'
import { useFormWithValidation } from '../../utils/utils'

function SearchForm({ handleSearchSubmit, handleShortFilms, shortMovies, setIsInfoTooltip }) {
    const currentUser = React.useContext(CurrentUserContext)
    const location = useLocation()
    const { values, handleChange, isValid, setIsValid } = useFormWithValidation()

    const [errorQuery, setErrorQuery] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if(isValid && values.search.trim() !== '') {
            handleSearchSubmit(values.search)
        } else {
            setErrorQuery('Необходимо ввести ключевое слово.');
            setIsInfoTooltip({
                isOpen: true,
                successful: false,
                text: 'Необходимо ввести ключевое слово.',
            });
         } 
    };

    React.useEffect(() => {
        setErrorQuery('')
    }, [isValid]);

    React.useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem(`movieSearch`)) {
            const searchValue = localStorage.getItem(`movieSearch`);
            values.search = searchValue;
            setIsValid(true);
        }
    }, [currentUser]);

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form__search-container'>
                <input 
                className='search-form__input' 
                type='text' 
                placeholder={ errorQuery ||'Фильм'}
                name='search'
                onChange={handleChange}
                value={values.search || ''}
                />
                <button className='search-form__submit-button' type='submit' />
            </div>
            <div className='search-form__checkbox-container'>
                <label className='search-form__checkbox-label'>
                    Короткометражки
                    <input 
                    className='search-form__checkbox' 
                    type='checkbox' 
                    onChange={() => {handleShortFilms(values.search)}}
                    checked={shortMovies ? true : false}
                    />
                    <span className='search-form__checkbox-custom' />
                </label>
            </div>
        </form>
    )
}

export default SearchForm