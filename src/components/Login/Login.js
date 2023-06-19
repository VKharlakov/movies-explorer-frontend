import Form from '../Form/Form.js';

function Login() {
  return (
    <Form
      title="Рады видеть!"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
      link="/register">
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
        <span className="form__input-error">Тестовая ошибка</span>
      </label>
    </Form>
  );
}

export default Login;