import './SearchForm.css'

function SearchForm() {
    return (
        <form className='search-form'>
            <div className='search-form__search-container'>
                <input className='search-form__input' type='text' placeholder='Фильм' />
                <button className='search-form__submit-button' type='submit' />
            </div>
            <div className='search-form__checkbox-container'>
                <label className='search-form__checkbox-label'>
                    Короткометражки
                    <input className='search-form__checkbox' type='checkbox' />
                    <span className='search-form__checkbox-custom' />
                </label>
            </div>
        </form>
    )
}

export default SearchForm