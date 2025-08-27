install:
	uv sync && cd frontend && uv run npm install

migrate:
	uv run manage.py migrate

admin:
	uv run manage.py createsuperuser

start-backend:
	uv run manage.py runserver

start-frontend:
	cd frontend && uv run npm run dev

