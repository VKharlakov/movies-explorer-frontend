**RU** -> [тут](#ru)
**ENG** -> [here](#eng)
### RU
# ***Проект Movies-explorer (фронтенд)***
Проект является **дипломной работой** на курсе веб-разработчик ***Яндекс.Практикума***.
## *Описание*
### ***О чём проект?***

Данное вэб-приложение является сайтом-портфолио и мини-кинопоиском, открывающимся после регистрации.

Бэкэнд часть проекта располагается [тут](https://github.com/VKharlakov/movies-explorer-api).

***В нём представлены:***

* Лендинг c кратким описанием:
  + Работы над дипломом (этапы, дэдлайны)
  + Изученных технологий во время обучения
  + Информации о себе
  + Портфолио (часть проектов)
* Поисковик фильмов с возможностью сохранения их к себе в коллекцию

## *Функциональность:*
* Защищённость роутов (нельзя перейти к приложению-поисковику, если не выполнен вход)
* Реализована "живая" **валидация** всех форм/полей ввода с использованием регулярных выражений и сторонних библиотек
* Использование собственных **хуков** (универсальный обработчик полей, валидация, контроль разрешения экрана)
* Возможность **поиска** фильмов со стороннего API
* Сохранение/удаление найденных фильмов к себе в аккаунт
* Реализован **фильтр** короткометражных фильмов
* Запоминание состояния полей ввода (в форме поиска фильмов), фильтра и найденных фильмов (при обновлении страницы данные не будут утеряны)
* Поиск фильмов как на русском, так и английском языке
* Реализован **попап** для демонтрации ошибок сервера или некорректных введённых данных
* При загрузке данных показывается прелоадер. По окончанию загрузки он скрывается
* Полноценый **респонсив** для всех популярных разрешений экрана
* Бургерное меню для мобильной и планшетной версии
* Реализовано закрытие попапа и бургерного меню по **оверлею** или по клавише **Esc**
* Переход к показу трейлера фильма при нажатии на постер
* Показ данных о фильме при наведении курсора на постер
* Все нужные кнопки подсвечиваются **outline**, им привязанно невидимое, но слышимое описание, для людей с **ограниченными** возможностями
* Приложение свёрстано по **BEM(БЭМ)**, соблюдается **семантичность**
* На странице поиска фильмов по клику на кнопку **"Ещё"** - показываются дополнительные фильмы (на роуте с сохранёнными фильмами показываются сразу **все** фильмы)
* Утилитарные функции, константы, функции обращения к серверу вынесены в отдельный файл
* Запросы к серверу написанны с использованием парадигмы **ООП**
* Возможность редактирования своего профиля (почты и имени)
* Запоминание **состояния** входа пользователя (при обновлении страницы будет выполнен автоматический вход)
* Реализована **микроанимация** всех ссылок и кнопок
* Для создания сеток используется **flex** и **grid**
* Все данные хранятся на сервере, использовано сторонее и собственное API

## *Используемые технологии:*

* React
* JS
* HTML 5
* CSS 3
* Express.js
## *Директории:*

`/components` — папка с фунциональными компонентами

`/contexts` — папка с контекстом

`/hooks` — папка с кастомными хуками

`/images` — папка c изображениями

`/vendor` — папка с кодом сторонних разработчиков

`/utils` — папка с файлами, требуемых для работы сервиса (утилитарные функции, запросы к серверу, константы)

## *Запуск проекта:*
`npm i` — установка зависимостей

`npm run start` — запускает приложение

## *Ссылки:*

* Домен по которому доступно приложение [https://bitfilms.kharlakov.nomoreparties.sbs](https://bitfilms.kharlakov.nomoreparties.sbs)
* Домен с собсвенным бэкендом [https://bitfilms.kharlakov.api.nomoredomains.rocks](https://bitfilms.kharlakov.api.nomoredomains.rocks)
* Домен со сторонним API(все фильмы) [https://api.nomoreparties.co/beatfilm-movies](https://api.nomoreparties.co/beatfilm-movies)
* Публичный IP адрес сервера `51.250.17.137`
* Ссылка на индивидульный [макет](https://www.figma.com/file/4I2m9DT4420OCcwEC9pUcB/Diploma-(Copy)?type=design&node-id=344-0&t=hdnoh8KNPpp4oHDY-0), по которому верстался проект

### ENG
## ***Project Movies Explorer (frontend)***

The project is a **graduation work** for the web developer course at ***Yandex.Practicum***.

### *Description*

#### ***What is the project about?***

This web application is a portfolio site and mini movie search engine that opens after registration.

The backend part of the project is located [here](https://github.com/VKharlakov/movies-explorer-api).

***It includes:***

* A landing page with a brief description of:
  + The diploma work (stages, deadlines)
  + Technologies learned during the course
  + Personal information
  + Portfolio (part of the projects)
* A movie search engine with the ability to save movies to the user's collection

## *Functionality:*
* Protected routes (cannot access the movie search app without logging in)
* Implemented "live" **validation** for all forms/input fields using regular expressions and third-party libraries
* Use of custom **hooks** (universal field handler, validation, screen resolution control)
* Ability to **search** for movies using a third-party API
* Saving/deleting found movies to the user's account
* Implemented **filter** for short films
* Remembering input field state (in the movie search form), filter, and found movies (data will not be lost on page refresh)
* Movie search in both Russian and English languages
* Implemented **popup** to display server errors or incorrect data entry
* A preloader is shown during data loading. It disappears after loading is complete
* Full **responsive** design for all popular screen resolutions
* Burger menu for mobile and tablet versions
* Implemented closing of the popup and burger menu by clicking on the **overlay** or pressing the **Esc** key
* Clicking on a movie poster leads to displaying the movie trailer
* Displaying movie data when hovering over the movie poster
* All necessary buttons are highlighted with **outline**, and invisible but audible descriptions are attached for people with **disabilities**
* The application is styled using **BEM** methodology, and **semantic** correctness is observed
* On the movie search page, clicking the **"More"** button shows additional movies (on the saved movies route, **all** movies are shown immediately)
* Utility functions, constants, and server request functions are placed in separate files
* Server requests are written using **OOP** paradigm
* Ability to edit user profile (email and name)
* Remembering user login **state** (automatic login on page refresh)
* Micro-animations for all links and buttons are implemented
* **Flex** and **grid** are used for creating grids
* All data is stored on the server, using both third-party and custom APIs

## *Technologies used:*

* React
* JS
* HTML 5
* CSS 3
* Express.js

## *Directories:*

`/components` — folder with functional components

`/contexts` — folder with contexts

`/hooks` — folder with custom hooks

`/images` — folder with images

`/vendor` — folder with third-party developer code

`/utils` — folder with files required for the service to work (utility functions, server requests, constants)

## *Project setup:*

`npm i` — install dependencies

`npm run start` — start the application

## *Links:*

* Domain for accessing the application [https://bitfilms.kharlakov.nomoreparties.sbs](https://bitfilms.kharlakov.nomoreparties.sbs)
* Domain with own backend [https://bitfilms.kharlakov.api.nomoredomains.rocks](https://bitfilms.kharlakov.api.nomoredomains.rocks)
* Domain with third-party API (all movies) [https://api.nomoreparties.co/beatfilm-movies](https://api.nomoreparties.co/beatfilm-movies)
* Public IP address of the server `51.250.17.137`
* Link to the individual [design layout](https://www.figma.com/file/4I2m9DT4420OCcwEC9pUcB/Diploma-(Copy)?type=design&node-id=344-0&t=hdnoh8KNPpp4oHDY-0) used for the project's layout
