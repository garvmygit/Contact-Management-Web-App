# MERN Contact Management Web App

Full-stack contact manager built with MongoDB, Express, React, Node.js, and Tailwind.

## Project structure

- `backend/`: Express API server
- `frontend/`: Vite React UI

## Run locally

### Backend

```bash
cd backend
npm install
cp .env.example .env
# update .env values
npm run dev
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Deploy
- Backend: Render (Node service)
- Frontend: Vercel (static site)

## API
- GET /api/contacts
- POST /api/contacts
- PUT /api/contacts/:id
- DELETE /api/contacts/:id
