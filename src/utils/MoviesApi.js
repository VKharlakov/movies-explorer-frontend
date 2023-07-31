import { MOVIES_URL } from './constants';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
        return res.json(); //если да, то возвращает полученные данные
      }
      return Promise.reject(`Error: ${res.status}`); //иначе возвращает ошибку
  }

  // регистрация
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => this._requestResult(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
});

export default moviesApi;