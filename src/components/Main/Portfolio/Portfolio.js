import { useTranslation } from 'react-i18next'
import './Portfolio.css'

function Portfolio() {
    //Translation
    const { t } = useTranslation()

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>{t('portfolio.title')}</h2>
            <div className='portfolio__list'>
                <a className='portfolio__link' href='https://github.com/VKharlakov/how-to-learn' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>{t('portfolio.static')}</p>
                    <figure className='portfolio__link-icon'/>
                </a>
                <a className='portfolio__link' href='https://github.com/VKharlakov/russian-travel' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>{t('portfolio.adaptive')}</p>
                    <figure className='portfolio__link-icon'/>
                </a>
                <a className='portfolio__link' href='https://github.com/VKharlakov/mesto' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>{t('portfolio.spa')}</p>
                    <figure className='portfolio__link-icon'/>
                </a>
                <a className='portfolio__link' href='https://github.com/VKharlakov/guild-roster-manager' target='_blank' rel='noreferrer'>
                    <p className='portfolio__link-name'>{t('portfolio.guildverse')}</p>
                    <figure className='portfolio__link-icon'/>
                </a>
            </div>
        </section>
    )
}

export default Portfolio