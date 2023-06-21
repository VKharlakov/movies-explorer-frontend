import Form from '../Form/Form';

function Register() {
  return (
    <Form
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
      link="/login">
      <label className="form__label">
        Имя
        <input
          placeholder='Введите Ваше имя'
          name="name"
          className="form__input"
          type="text"
          required
        />
        <span className="form__input-error">Тестовая ошибка</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          placeholder='Введите Вашу почту'
          name="email"
          className="form__input"
          type="email"
          required
        />
        <span className="form__input-error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input
          placeholder='Введите Ваш пароль'
          name="password"
          className="form__input"
          type="password"
          required
        />
        <span className="form__input-error"></span>
      </label>
    </Form>
  );
}

export default Register;