# Backend - MERN Contact Management API

## Setup

1. `cd backend`
2. `npm install`
3. `cp .env.example .env` (or create `.env` manually)
4. Fill `MONGO_URI` with your MongoDB connection string
5. `npm run dev`

## API Endpoints

- `GET /api/contacts` - list all contacts
- `POST /api/contacts` - create new contact
- `PUT /api/contacts/:id` - update contact
- `DELETE /api/contacts/:id` - delete contact

## Notes

- Follows MVC structure
- Includes CORS, error middleware, and async handlers
