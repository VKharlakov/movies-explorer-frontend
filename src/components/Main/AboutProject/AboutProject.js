import { useTranslation } from 'react-i18next'
import './AboutProject.css'
import React from 'react'

function AboutProject(props, ref) {
    //Translation
    const { t } = useTranslation()

    return (
        <section className='about-project' ref={ref}>
            <h2 className='about-project__title'>{t('aboutProject.title')}</h2>
            <div className='about-project__info-container'>
                <h3 className='about-project__info-title'>{t('aboutProject.infoTitle1')}</h3>
                <p className='about-project__info-text'>{t('aboutProject.infoText1')}</p>
            </div>
            <div className='about-project__info-container'>
                <h3 className='about-project__info-title'>{t('aboutProject.infoTitle2')}</h3>
                <p className='about-project__info-text'>{t('aboutProject.infoText2')}</p>
            </div>
            <figure className='about-project__diagramm'>
                <p className='about-project__diagramm-text'>{t('aboutProject.week1')}</p>
                <p className='about-project__diagramm-text'>{t('aboutProject.week2')}</p>
            </figure>
        </section>
    )
}

export default React.forwardRef(AboutProject)