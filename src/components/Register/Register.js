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
          name="name"
          className="form__input"
          type="text"
        />
        <span className="form__input-error">Тестовая ошибка</span>
      </label>
      <label className="form__label">
        E-mail
        <input
          name="email"
          className="form__input"
          type="email"
        />
        <span className="form__input-error"></span>
      </label>
      <label className="form__label">
        Пароль
        <input
          name="password"
          className="form__input"
          type="password"
        />
        <span className="form__input-error"></span>
      </label>
    </Form>
  );
}

export default Register;