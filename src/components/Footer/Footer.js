import './Footer.css'

function Footer() {
    const date = new Date()

    return (
        <footer className="footer">
            <div className='footer__container'>
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__info-container">
                    <p className="footer__date">&#169; {`${date.getFullYear()}`}</p>
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link" href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a className="footer__link" href='https://github.com/VKharlakov' target='_blank' rel='noreferrer'>GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer