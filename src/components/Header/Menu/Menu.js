import './Menu.css';
import { Link, NavLink } from 'react-router-dom';
import button from '../../../images/header__menu-account-button.svg'
import { useTranslation } from 'react-i18next';

function Menu({ handleClose }) {
    //Translation
    const { t } = useTranslation()

    return (
        <div className="menu__overlay">
            <div onClick={handleClose} className="menu__container-empty" />
            <div className="menu__container">
                <button className="menu__close-button" onClick={handleClose} />
                <nav className="menu__nav">
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/'}>{t('header.mainPage')}</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/movies'}>{t('header.movies')}</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/saved-movies'}>{t('header.savedMovies')}</NavLink>
                </nav>
                <Link to="/profile" onClick={handleClose} className="menu__account-button">
                    <img src={button} alt="Открыть профиль" />
                </Link>
            </div>
        </div>
    );
}

export default Menu;