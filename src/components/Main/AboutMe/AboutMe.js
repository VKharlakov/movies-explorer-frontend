import './AboutMe.css'
import React from 'react'
import photo from '../../../images/about-me__photo.png'
import { useTranslation } from 'react-i18next'

function AboutMe(props, ref) {
    //Translation
    const { t } = useTranslation()

    return (
        <section className='about-me' ref={ref}>
            <h2 className='about-me__title'>{t('aboutMe.title')}</h2>
            <div className='about-me__info-container'>
                <div className='about-me__text-container'>
                    <p className='about-me__name'>{t('aboutMe.name')}</p>
                    <p className='about-me__brief'>{t('aboutMe.brief')}</p>
                    <p className='about-me__bio'>{t('aboutMe.bio')}</p>
                </div>
                <img className='about-me__photo' src={photo} alt='Фото студента' />
            </div>
            <a className='about-me__link' href='https://github.com/VKharlakov' target='_blank' rel='noreferrer'>Github</a>
        </section>
    )
}

export default React.forwardRef(AboutMe) 