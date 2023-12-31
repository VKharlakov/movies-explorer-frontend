import './Main.css'
import React from 'react'
import Promo from './Promo/Promo.js'
import NavTab from './NavTab/NavTab.js'
import AboutProject from './AboutProject/AboutProject.js'
import Techs from './Techs/Techs.js'
import AboutMe from './AboutMe/AboutMe.js'
import Portfolio from './Portfolio/Portfolio'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Main({ loggedIn }) {
    let refAboutProject = React.useRef()
    let refTechs = React.useRef()
    let refAboutMe = React.useRef()

    function scrollInto(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start"
        })
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='main'>
                <Promo />
                <NavTab scrollInto={scrollInto} refAboutProject={refAboutProject} refTechs={refTechs} refAboutMe={refAboutMe} />
                <AboutProject ref={refAboutProject} />
                <Techs ref={refTechs} />
                <AboutMe ref={refAboutMe} />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main