# ТЕСТОВОЕ ЗАДАНИЕ НА ПОЗИЦИЮ FRONTEND РАЗРАБОТЧИК JUNIOR

## Ссылка на страницу

https://servik888.github.io/react-redux-users-posts/

## Основные команды для работы

- Скачайте или клонируйте код
- Зайдите в папку проекта через консоль или откройте в редакторе

- установить зависимости - `npm install`
- запуск проекта - `npm run start`
- деплой проекта `npm run deploy`

## Описание приложения:

- В шапку есть две кнопри навигации по приложению
- При входе на страницу отображается список пользователей в виде карточек.
- При клике на кнопку мы переходим в на страницу пользователя , где есть описание и сокращённый список из трёх постов.
- При клике на кнопку в конце страницы мы переходим на список всех постов пользователя.
- На странице постов мы можем перейти в пост посмотреть описание и оставить коментарий
- При нажатии на кнопку открывается модальное окно где можно оставить комментарий к посту
- Переключение между страницами происходит без перезагрузки.
- Страница таблицы должна отображаться в URL браузера.

## Cписок используемых библиотек

- react
- redux
- react-redux
- redux-thunk
- react-router-dom

## Текст задания

- Стек:
- языки - JavaScript/TypeScript.
- Фреймворк - React/Vue/Angular, state-management на ваш выбор

Используя сервис https://jsonplaceholder.typicode.com/ реализовать псевдо-web-приложение/

Список экранов:

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

Требования к внешнему виду: дизайн из Figma https://www.figma.com/file/IpjzEBgEd5Tk3ry5g347Ux/Untitled
