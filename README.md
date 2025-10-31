# Inertia + Django + Vite + React

## установка

### для работы проекта необходимы: 

- [UV](https://docs.astral.sh/uv/) 
- [npm](https://nodejs.org/)
****
- клонируем репозиторий
```
git clone git@github.com:marentsov/Django-InertiaJS-React.git
cd DjangoInertiaJSReact
```
- устанавливаем проект
```
make install
make migrate
```
- создаем админа
```
make admin
```
- открываем два терминала

- в первом:

```
make start-backend
```

- во втором:

```
make start-frontend
```
- переходим по ссылке http://localhost:8000/products/create

- добавляем товары через форму

- или переходим по ссылке http://localhost:8000/admin

- добавляем товары

- проект становится доступен по ссылке - http://localhost:8000/

## запуск через docker:
### для работы проекта необходимы: 

- [Docker](https://docs.docker.com/get-started/get-docker/)
****
- клонируем репозиторий
```
git clone git@github.com:marentsov/Django-InertiaJS-React.git
cd DjangoInertiaJSReact
```
- запускаем проект
```
make docker-up
```
- выполняем миграции 
```
make docker-migrate
```
- создаем админа
```
make docker-admin
```
- переходим по ссылке http://localhost:8000/products/create

- добавляем товары через форму

- или переходим по ссылке http://localhost:8000/admin

- добавляем товары

- проект становится доступен по ссылке - http://localhost:8000/
