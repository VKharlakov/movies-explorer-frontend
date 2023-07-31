import React from "react";
import { useCallback } from "react";
import { SHORTMOVIES_DURATION } from './constants.js';

//хук управления формой
export function useForm() {
    const [values, setValues] = React.useState({});

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, setIsValid };
}

// проверка изображений полученных от сервера
export function transformMovies(movies) {
    movies.forEach(movie => {
        if (!movie.image) {
            movie.image = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
            movie.thumbnail = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80';
        } else {
            movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
            movie.image = `https://api.nomoreparties.co${movie.image.url}`
        }
        if (!movie.country) {
            movie.country = 'Russia';
        }
        if (!movie.nameEN) {
            movie.nameEN = movie.nameRU;
        }
    });
    return movies
}

// преобразование длительности
export function transformDuration(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
        return `${minutes}м`;
    } else {
        return `${hours}ч ${minutes}м`;
    }
}

// фильтрация по длительности
export function filterShortMovies(movies) {
    return movies.filter(movie => movie.duration < SHORTMOVIES_DURATION);
}

// фильтрация по запросу
export function filterMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesByUserQuery = movies.filter((movie) => {
        const movieRu = String(movie.nameRU).toLowerCase().trim();
        const movieEn = String(movie.nameEN).toLowerCase().trim();
        const userMovie = userQuery.toLowerCase().trim();
        return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
    });

    if (shortMoviesCheckbox) {
        return filterShortMovies(moviesByUserQuery);
    } else {
        return moviesByUserQuery;
    }
}