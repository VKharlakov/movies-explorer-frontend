import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import unAuthorizedLogo from '../../images/header__logo.svg'
import authorizedLogo from '../../images/header__authorizedUser-logo.svg'
import React from 'react'
import Menu from './Menu/Menu'
import { useTranslation } from 'react-i18next'

function Header({ loggedIn }) {
    const [isClicked, setIsClicked] = React.useState(false);

    //Translation
    const { t, i18n } = useTranslation()
    function changeLanguage(language) {
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
     }

    function handleOpen() {
        setIsClicked(true);
    }

    function handleClose() {
        setIsClicked(false);
    }

    function authorizedUser() {
        return (
            <header className="header header_type_authorized">
                <div className='header__container'>
                    <Link to={'/'}>
                        <img className="header__logo" src={authorizedLogo} alt="Логотип"></img>
                    </Link>
                    <nav className="header__nav-menu">
                        <NavLink className={({ isActive }) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'} to={'/movies'}>{t('header.movies')}</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'} to={'/saved-movies'}>{t('header.savedMovies')}</NavLink>
                        <div className='header__profile-container'>
                            <NavLink className={({ isActive }) => isActive ? 'header__profile-link header__profile-link_active' : 'header__profile-link'} to={'/profile'}>
                                <p className='header__profile-text'>{t('header.account')}</p>
                                <figure className='header__profile-icon' />
                            </NavLink>
                        </div>
                        <div className='header__lng-container'>
                            <button className='header__lng-button' onClick={() => changeLanguage('ru')} >Ru</button>
                            <button className='header__lng-button' onClick={() => changeLanguage('en')} >Eng</button>
                        </div>
                    </nav>
                    <button className='header__burger-button' onClick={handleOpen} type='button' />
                </div>
                {isClicked ? <Menu handleClose={handleClose} /> : ''}
            </header>
        )
    }

    function unAuthorizedUser() {
        return (
            <header className="header header_type_unauthorized">
                <div className='header__container'>
                    <img className="header__logo" src={unAuthorizedLogo} alt="Логотип"></img>
                    <div className="header__nav-menu">
                        <Link className="header__nav-link header__nav-link_type_sign-up" style={{ color: '#fff' }} to={'/register'}>{t('header.register')}</Link>
                        <Link className="header__nav-link header__nav-link_type_sign-in" to={'/login'}>{t('header.login')}</Link>
                        <div className='header__lng-container'>
                            <button className='header__lng-button header__lng-button_type_unauthorized' onClick={() => changeLanguage('ru')} >Ru</button>
                            <button className='header__lng-button header__lng-button_type_unauthorized' onClick={() => changeLanguage('en')} >Eng</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    return (
        <>
            {loggedIn ? authorizedUser() : unAuthorizedUser()}
        </>
    )
}

export default Header