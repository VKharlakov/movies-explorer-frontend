import './AboutMe.css'
import React from 'react'
import photo from '../../../images/about-me__photo.png'

function AboutMe(props, ref) {
    return (
        <section className='about-me' ref={ref}>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__info-container'>
                <div className='about-me__text-container'>
                    <p className='about-me__name'>Виталий</p>
                    <p className='about-me__brief'>Фронтенд-разработчик, 30 лет</p>
                    <p className='about-me__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                </div>
                <img className='about-me__photo' src={photo} alt='Фото студента' />
            </div>
            <a className='about-me__link' href='https://github.com/VKharlakov' target='_blank' rel='noreferrer'>Github</a>
        </section>
    )
}

export default React.forwardRef(AboutMe) 