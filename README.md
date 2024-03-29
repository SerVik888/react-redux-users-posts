# Тестовое задание на позицию Frontend-разработчик

### Описание приложения:

- В шапке две кнопки навигации по приложению
- При входе на страницу отображается список пользователей в виде карточек.
- При клике на кнопку переходим в на страницу пользователя , где есть описание и сокращённый список из трёх постов.
- При клике на кнопку в конце страницы переходим на список всех постов пользователя.
- На странице постов мы можем перейти в пост посмотреть описание и оставить коментарий
- При нажатии на кнопку открывается модальное окно где можно оставить комментарий к посту
- Переключение между страницами происходит без перезагрузки.
- Id пользователя или поста отображаться в URL браузера.

### Как запустить приложение:

Скачайте или клонируйте код\
Зайдите в папку проекта через консоль или откройте в редакторе

`npm install` -> установить зависимости\
`npm run start` -> запуск проекта


### Cписок используемых библиотек:

- react
- redux
- react-redux
- redux-thunk
- react-router-dom

### Текст задания:

#### Стек:

- языки - JavaScript/TypeScript.
- Фреймворк - React/Vue/Angular, state-management на ваш выбор

Используя сервис https://jsonplaceholder.typicode.com/ реализовать псевдо-web-приложение/

#### Список экранов:

1. Список пользователей. Вывод списка, полученного по апи в виде карточек вида
   [name,surname]
2. Страница пользователя. Подробный вывод информации о пользователе
   [
   сверху - username
   (далее по списку)
   name
   email
   phone
   website
   company[name,bs]
   Список из 3-х превью (заголовок, 1 строчка текста...) постов пользователя + возможность посмотреть все
   ]
3. список постов пользователя. Все посты в формате превью + возможность перейти на детальную
4. детальная страница поста со списком всех комментариев c именем и email. Также, внизу экрана добавить кнопку добавления комментария. По клику открывается форма с 3 полями имя, email, текст комментария и кнопкой "отправить/send" Отправку сделать на тот же сервис.

Автор: Сафонов Сергей\
Почта: [sergey_safonov86@inbox.ru](mailto:sergey_safonov86@inbox.ru)