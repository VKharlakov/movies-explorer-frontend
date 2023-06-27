import './Portfolio.css'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__list'>
                <a className='portfolio__link' href='https://github.com/VKharlakov/how-to-learn' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>Статичный сайт</p>
                    <figure className='portfolio__link-icon'/>
                </a>
                <a className='portfolio__link' href='https://github.com/VKharlakov/russian-travel' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>Адаптивный сайт</p>
                    <figure className='portfolio__link-icon'/>
                </a>
                <a className='portfolio__link' href='https://github.com/VKharlakov/mesto' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>Одностраничное приложение</p>
                    <figure className='portfolio__link-icon'/>
                </a>
            </div>
        </section>
    )
}

export default Portfolio