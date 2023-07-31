import React from 'react'
import './SearchForm.css'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useLocation } from 'react-router-dom'
import { useFormWithValidation } from '../../utils/utils'
import { useTranslation } from 'react-i18next'

function SearchForm({ handleSearchSubmit, handleShortFilms, shortMovies, setIsInfoTooltip }) {
    const currentUser = React.useContext(CurrentUserContext)
    const location = useLocation()
    const { values, handleChange, isValid, setIsValid } = useFormWithValidation()

    const [errorQuery, setErrorQuery] = React.useState('')

    //Translation
    const { t } = useTranslation()

    function handleSubmit(event) {
        event.preventDefault();
        if(isValid && values.search.trim() !== '') {
            handleSearchSubmit(values.search)
        } else {
            setErrorQuery(t('errors.keyWord'));
            setIsInfoTooltip({
                isOpen: true,
                successful: false,
                text: t('errors.keyWord'),
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
                placeholder={ errorQuery || t('header.movies')}
                name='search'
                onChange={handleChange}
                value={values.search || ''}
                />
                <button className='search-form__submit-button' type='submit' />
            </div>
            <div className='search-form__checkbox-container'>
                <label className='search-form__checkbox-label'>
                    {t('searchForm.checkboxLabel')}
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