import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import unAuthorizedLogo from '../../images/header__logo.svg'
import authorizedLogo from '../../images/header__authorizedUser-logo.svg'
import React from 'react'
import Menu from './Menu/Menu'

function Header({ loggedIn }) {
    const [isClicked, setIsClicked] = React.useState(false);

    function handleOpen() {
      setIsClicked(true);
    }
  
    function handleClose() {
      setIsClicked(false);
    }

    function authorizedUser() {
        return (
            <div className="header" style={{backgroundColor: '#fff'}}>
                <div className='header__container'>
                    <img className="header__logo" src={authorizedLogo} alt="Логотип"></img>
                    <div className="header__nav-menu">
                        <NavLink className={({isActive}) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'} to={'/movies'}>Фильмы</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'header__nav-link header__nav-link_active' : 'header__nav-link'} to={'/saved-movies'}>Сохраненные фильмы</NavLink>
                        <div className='header__profile-container'>
                            <Link className='header__profile-link' to={'/profile'}>
                                <p className='header__profile-text'>Аккаунт</p>
                                <figure className='header__profile-icon'/>
                            </Link>
                        </div>
                    </div>
                    <button className='header__burger-button' onClick={handleOpen} type='button'/>
                </div>
                {isClicked ? <Menu handleClose={handleClose} /> : ''}
            </div>
        )
    }

    function unAuthorizedUser() {
        return (
            <div className="header" style={{maxWidth: 'unset'}}>
                <div className='header__container'>
                    <img className="header__logo" src={unAuthorizedLogo} alt="Логотип"></img>
                    <div className="header__nav-menu">
                        <Link className="header__nav-link header__nav-link_type_sign-up" style={{color: '#fff'}} to={'/register'}>Регистрация</Link>
                        <Link className="header__nav-link header__nav-link_type_sign-in" to={'/login'}>Войти</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {loggedIn ? authorizedUser() : unAuthorizedUser()}
        </>
    )
}

export default Header