import React from 'react';
import { USER_EMAIL_REGEX, USER_NAME_REGEX } from '../../utils/constants';
import { useFormWithValidation } from '../../utils/utils';
import Form from '../Form/Form';
import { useTranslation } from 'react-i18next';

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()

  //Translation
  const { t } = useTranslation()

  function handleSubmit(event) {
    event.preventDefault()
    handleRegister({
      name: values.name,
      email: values.email,
      password: values.password
    })
  }

  React.useEffect(() => {
    resetForm()
  }, [resetForm])

  return (
    <main>
      <Form
        title={t('form.registerTitle')}
        buttonText={t('form.registerButton')}
        question={t('form.haveAccount')}
        linkText={t('header.login')}
        link="/login"
        onSubmit={handleSubmit}
        isDisabled={!isValid}
      >
        <label className="form__label">
          {t('form.name')}
          <input
            placeholder={t('form.enterName')}
            name="name"
            className="form__input"
            type="text"
            required
            onChange={handleChange}
            value={values.name || ''}
            pattern={USER_NAME_REGEX}
            minLength="2"
            maxLength="30"
          />
          <span className="form__input-error">{errors.name}</span>
        </label>
        <label className="form__label">
          E-mail
          <input
            placeholder={t('form.enterEmail')}
            name="email"
            className="form__input"
            type="email"
            required
            onChange={handleChange}
            pattern={USER_EMAIL_REGEX}
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

export default Register;