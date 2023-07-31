import React from 'react'
import Header from '../Header/Header'
import './Profile.css'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useFormWithValidation } from '../../utils/utils'
import { USER_EMAIL_REGEX, USER_NAME_REGEX } from '../../utils/constants'
import { useTranslation } from 'react-i18next'

function Profile({handleProfile, handleSignOut, loggedIn}) {
    const currentUser = React.useContext(CurrentUserContext)
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
    const requirementValidity = (!isValid || (currentUser.name === values.name && currentUser.email === values.email))

    //Translation
    const { t } = useTranslation()

    function handleSubmit(event) {
        event.preventDefault()
        handleProfile({
            name: values.name,
            email: values.email
        })
    }

    React.useEffect(() => {
        if(currentUser) {
            resetForm(currentUser, {}, true)
        }
    }, [currentUser, resetForm])

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main className='profile'>
                <h1 className='profile__title'>{`${t('profile.greeting')}, ${currentUser.name || ''}!`}</h1>
                <form className='profile__form' noValidate onSubmit={handleSubmit}>
                    <label className='profile__label'>
                        {t('form.name')}
                        <input 
                        className='profile__input' 
                        name='name' 
                        type='text' 
                        required 
                        onChange={handleChange} 
                        value={values.name || ''}
                        minLength='2'
                        maxLength='40'
                        pattern={USER_NAME_REGEX}/>
                        <span className='profile__input-error'>{errors.name}</span>
                    </label>
                    <label className='profile__label'>
                        Email
                        <input 
                        className='profile__input' 
                        name='email' 
                        type='email'
                        pattern={USER_EMAIL_REGEX}
                        required
                        onChange={handleChange}
                        value={values.email || ''}/>
                        <span className='profile__input-error'>{errors.email}</span>
                    </label>
                    <button className={!requirementValidity ? 'profile__submit-button' : 'profile__submit-button profile__submit-button_inactive'} disabled={requirementValidity ? true : false} type='submit'>{t('profile.edit')}</button>
                    <button className='profile__logout-button' type='button' onClick={handleSignOut}>{t('profile.logout')}</button>
                </form>
            </main>
        </>
    )
}

export default Profile