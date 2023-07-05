import React from 'react';
import { USER_NAME_REGEX } from '../../utils/constants';
import { useFormWithValidation } from '../../utils/utils';
import Form from '../Form/Form';

function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation()

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
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        linkText=" Войти"
        link="/login"
        onSubmit={handleSubmit}
        isDisabled={!isValid}
      >
        <label className="form__label">
          Имя
          <input
            placeholder='Введите Ваше имя'
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
            placeholder='Введите Вашу почту'
            name="email"
            className="form__input"
            type="email"
            required
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className="form__input-error">{errors.email}</span>
        </label>
        <label className="form__label">
          Пароль
          <input
            placeholder='Введите Ваш пароль'
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