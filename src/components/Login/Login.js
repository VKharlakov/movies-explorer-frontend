import { useNavigate } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/utils.js';
import Form from '../Form/Form.js';
import React from 'react';
import { USER_EMAIL_REGEX } from '../../utils/constants.js';
import { useTranslation } from 'react-i18next';

function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()
  const navigate = useNavigate()

  //Translation
  const { t } = useTranslation()

  function handleSubmit(event) {
    event.preventDefault()
    handleLogin({
      email: values.email,
      password: values.password
    })
  }

  React.useEffect(() => {
    resetForm()
  }, [resetForm])

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if(jwt) {
      navigate('/movies')
    }
  }, [])

  return (
    <main>
      <Form
        title={t('form.welcomeTitle')}
        buttonText={t('header.login')}
        question={t('form.noAccount')}
        linkText={t('header.register')}
        link="/register"
        onSubmit={handleSubmit}
        isDisabled={!isValid}
        >
        <label className="form__label">
          E-mail
          <input
            placeholder={t('form.enterEmail')}
            name="email"
            className="form__input"
            type="email"
            pattern={USER_EMAIL_REGEX}
            required
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className="form__input-error">{errors.email}</span>
        </label>
        <label className="form__label">
          {t('form.password')}
          <input
            placeholder={t('form.enterPassword')}
            name="password"
            className="form__input"
            type="password"
            required
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className="form__input-error">{errors.password}</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;