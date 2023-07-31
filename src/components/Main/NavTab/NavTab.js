import { useTranslation } from 'react-i18next'
import './NavTab.css'
import React from 'react'

function NavTab({scrollInto, refAboutProject, refTechs, refAboutMe}) {
   //Translation
   const { t } = useTranslation()
   
    function handleClick(ref) {
        scrollInto(ref)
    }

    return(
        <nav className='navtab'>
            <button className='navtab__button' onClick={() => handleClick(refAboutProject)}>{t('navTab.aboutProject')}</button>
            <button className='navtab__button' onClick={() => handleClick(refTechs)}>{t('navTab.techs')}</button>
            <button className='navtab__button' onClick={() => handleClick(refAboutMe)}>{t('navTab.student')}</button>
        </nav>
    )
}

export default NavTab