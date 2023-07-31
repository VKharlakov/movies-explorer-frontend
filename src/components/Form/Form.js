import './Form.css';
import { Link } from 'react-router-dom';
import logo from '../../images/form__logo.svg';

function Form({ children, title, buttonText, question, linkText, link, onSubmit, isDisabled}) {
    return (
        <main className="form">
            <Link to="/" className="form__logo">
                <img src={logo} alt="Логотип" />
            </Link>
            <h1 className="form__title">{title}</h1>
            <form className="form__container" onSubmit={onSubmit}>
                {children}
                <button type="submit" disabled={isDisabled ? true : false} className={isDisabled ? 'form__submit-button form__submit-button_inactive' : 'form__submit-button'}>
                    {buttonText}
                </button>
            </form>
            <p className="form__text">
                {question}
                <Link to={link} className="form__link">
                    {linkText}
                </Link>
            </p>
        </main>
    );
}

export default Form;