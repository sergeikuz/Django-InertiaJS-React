install:
	uv sync && cd frontend && npm install && npm run build

migrate:
	uv run manage.py migrate

admin:
	uv run manage.py createsuperuser

start-backend:
	uv run manage.py runserver

start-frontend:
	cd frontend && npm run dev

