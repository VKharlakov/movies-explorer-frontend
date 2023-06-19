import Header from '../Header/Header'
import './Profile.css'

function Profile() {
    return (
        <>
            <Header loggedIn={true}/>
            <div className='profile'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                <form className='profile__form'>
                    <label className='profile__label'>
                        Имя
                        <input className='profile__input' name='name' type='text'/>
                        <span className='profile__input-error'>Тестовая ошибка</span>
                    </label>
                    <label className='profile__label'>
                        Email
                        <input className='profile__input' name='email' type='email'/>
                        <span className='profile__input-error'>Тестовая ошибка</span>
                    </label>
                    <button className='profile__submit-button' type='submit'>Редактировать</button>
                    <button className='profile__logout-button' type='button'>Выйти из аккаунта</button>
                </form>
            </div>
        </>
    )
}

export default Profile