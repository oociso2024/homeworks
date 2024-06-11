# Домашние задания по курсу «Основы Javascript»


[https://github.com/oociso2024/homeworks/blob/main/1.base-concepts/index.html]
[https://github.com/oociso2024/homeworks/tree/main/1.base-concepts]


0. [Основы отладки](./0.debugger/)

1. [Основные понятия](./1.base-concepts/)

2. [Функции](./2.functions/)

3. [Массивы](./3.arrays/)

4. [Объекты](./4.objects/)

5. [Классы](./5.classes/)

6. [Обработка исключений и замыкания](./6.exception-closure/)

7. [Асинхронность](./7.async/)

8. [Функции декораторы, оператор “...“, call, apply](./8.decorators/)

## Необходимый набор ПО

- браузер (лучше всего подойдет Google Chrome или Яндекс.Браузер);
- редактор кода, например [Sublime][1] или [Visual Studio Code][2];
- аккаунт на [GitHub][7] ([инструкция по регистрации на GitHub][3]);
- система контроля версий [Git][4], установленная локально ([инструкция по установке Git][5]);

## Перед началом работы над проектом

1. Произведите [Fork][0] репозитория с задачами:
После перехода на страницу с домашним заданием из личного кабинета в правом верхнем углу экрана нажмите на кнопку `Fork`:
![](./assets/img/z61OABljKZ.png)
На экране появится окно с выбором предпочтительного репозитория для клонирования проекта. Выбираете ваш аккаунт и после непродолжительного ожидания вы будете перенаправлены на страницу репозитория на вашем аккаунте.

URL адрес этой страницы будет являться URL адресом вашего репозитория. Пример URL адреса репозитория:
`https://github.com/%username%/bjs-2-homeworks`, где `%username%` - имя вашего профиля GitHub, `%bjs-2-homeworks%` - название репозитория.

2. Разверните репозиторий с помощью github-pages по [инструкции](./assets/gh-pages.md)
3. Перейдите в папку (директорию) на вашем компьютере, где будет храниться проект.
4. С помощью терминала, командной строки вашей операционной системы или консоли Git (ПКМ -> `GitBash Here`) откройте выбранную вами директорию.
5. Склонируйте репозиторий с домашними заданиями с помощью команды `git clone https://github.com/%username%/bjs-2-homeworks` в открывшемся терминале или командной строке.
6. Перейдите в директорию склонированного репозитория `cd ./bjs-2-homeworks`.

## Работа над каждым домашним заданием состоит из нескольких этапов

1. Ознакомьтесь с правилами отладки. Данная [инструкция](https://github.com/netology-code/bjs-2-homeworks/tree/main/0.debugger) входит в проект.
2. Ознакомьтесь с папкой задания. В каждой папке находится несколько файлов:
   1. `README.md` - файл с описанием домашнего задания.
   2. `task.js` - файл для реализации домашнего задания. **Домашние задания выполняются в этом файле.**
   3. `tests.js` - файл с тестами.
   4. `index.html` - файл, запускающий тесты.
3. Ознакомьтесь и реализуйте задания.
4. Код из домашних заданий можно вызывать как из консоли, так и со страницы.
5. Проверьте работу ваших заданий, запустив тесты jasmine (открыв файл `index.html` в браузере).
6. В случае успеха прохождения тестов можно сдавать задание.

**!ВНИМАНИЕ!** Прохождение тестов не означает полностью правильную реализацию домашнего задания. Тесты проверяют правильность вычисления задания, но не чистоту кода и правильность выполнения домашнего задания.

## Решение задач

1. Перейдите в папку задания, например, для первого задания `1.base-concepts`.
2. Откройте файл `task.js` в вашем редакторе кода и выполните задание.
3. Добавьте файл `task.js` в индекс `git` с помощью команды `git add %file-path%`, где `%file-path%` - путь до целевого файла, например, для первого задания `git add task.js`.
4. Сделайте коммит, используя команду `git commit -m '%comment%'`, где `%comment%` - это произвольный комментарий к вашему коммиту, например, для первого задания `git commit -m 'Реализовано первое задание'`.
5. Опубликуйте код в репозиторий `homeworks` с помощью команды `git push -u origin main`.
6. Пришлите ссылку на репозиторий через личный кабинет на сайте [Нетологии][6].

[0]: https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BA
[1]: https://www.sublimetext.com/
[2]: https://code.visualstudio.com/
[3]: https://github.com/netology-code/guides/tree/master/github
[4]: https://git-scm.com/
[5]: https://github.com/netology-code/guides/blob/master/git/README.md
[6]: https://netology.ru/
[7]: https://github.com/
