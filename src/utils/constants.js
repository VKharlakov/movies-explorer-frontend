export const USER_NAME_REGEX = '^[a-zA-Zа-яА-ЯёЁ\\s\\-]+$';

export const BASE_URL = 'https://bitfilms.kharlakov.api.nomoredomains.rocks';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const SHORTMOVIES_DURATION = 40;
export const DEVICE_PARAMS = {
  desktop: {
    width: 917,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 583,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 583,
    cards: {
      total: 5,
      more: 2,
    },
  },
};