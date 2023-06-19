import './AboutProject.css'
import React from 'react'

function AboutProject(props, ref) {
    return (
        <div className='about-project' ref={ref}>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__info-container'>
                <h3 className='about-project__info-title'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-project__info-container'>
                <h3 className='about-project__info-title'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <figure className='about-project__diagramm'>
                <p className='about-project__diagramm-text'>1 неделя</p>
                <p className='about-project__diagramm-text'>4 недели</p>
            </figure>
        </div>
    )
}

export default React.forwardRef(AboutProject)