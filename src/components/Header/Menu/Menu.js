import './Menu.css';
import { Link, NavLink } from 'react-router-dom';
import button from '../../../images/header__menu-account-button.svg'

function Menu({ handleClose }) {
    return (
        <div className="menu__overlay">
            <div onClick={handleClose} className="menu__container-empty" />
            <div className="menu__container">
                <button className="menu__close-button" onClick={handleClose} />
                <nav className="menu__nav">
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/'}>Главная</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/movies'}>Фильмы</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'menu__link menu__link_active' : 'menu__link'} to={'/saved-movies'}>Сохраненные фильмы</NavLink>
                </nav>
                <Link to="/profile" onClick={handleClose} className="menu__account-button">
                    <img src={button} alt="Открыть профиль" />
                </Link>
            </div>
        </div>
    );
}

export default Menu;