import { useTranslation } from 'react-i18next'
import './Techs.css'
import React from 'react'

function Techs(props, ref) {
    //Translation
    const { t } = useTranslation()

    return (
        <section className='techs' ref={ref}>
            <div className='techs__container'>
                <h2 className='techs__title'>{t('techs.title')}</h2>
                <h3 className='techs__subtitle'>{t('techs.subtitle')}</h3>
                <p className='techs__brief'>{t('techs.brief')}</p>
                <ul className='techs__list'>
                    <li className='techs__list-item'>HTML</li>
                    <li className='techs__list-item'>CSS</li>
                    <li className='techs__list-item'>JS</li>
                    <li className='techs__list-item'>React</li>
                    <li className='techs__list-item'>Git</li>
                    <li className='techs__list-item'>Express.js</li>
                    <li className='techs__list-item'>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default React.forwardRef(Techs)