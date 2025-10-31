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

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f

docker-build:
	docker-compose build

docker-restart:
	docker-compose restart

docker-migrate:
	docker-compose exec backend uv run python manage.py migrate

docker-admin:
	docker-compose exec backend uv run python manage.py createsuperuser

docker-shell:
	docker-compose exec backend bash