import './NavTab.css'
import React from 'react'

function NavTab({scrollInto, refAboutProject, refTechs, refAboutMe}) {
    function handleClick(ref) {
        scrollInto(ref)
    }

    return(
        <nav className='navtab'>
            <button className='navtab__button' onClick={() => handleClick(refAboutProject)}>О проекте</button>
            <button className='navtab__button' onClick={() => handleClick(refTechs)}>Технологии</button>
            <button className='navtab__button' onClick={() => handleClick(refAboutMe)}>Студент</button>
        </nav>
    )
}

export default NavTab