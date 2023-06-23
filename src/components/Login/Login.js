import Form from '../Form/Form.js';

function Login() {
  return (
    <main>
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        question="Еще не зарегистрированы?"
        linkText=" Регистрация"
        link="/register">
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
          <span className="form__input-error">Тестовая ошибка</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;