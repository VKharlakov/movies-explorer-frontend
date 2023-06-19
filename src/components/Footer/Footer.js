import './Footer.css'

function Footer() {
    const date = new Date()

    return (
        <div className="footer">
            <div className='footer__container'>
                <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className="footer__info-container">
                    <p className="footer__date">&#169; {`${date.getFullYear()}`}</p>
                    <div className="footer__links">
                        <a className="footer__link" href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer'>Яндекс.Практикум</a>
                        <a className="footer__link" href='https://github.com/VKharlakov' target='_blank' rel='noreferrer'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer