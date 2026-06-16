# Travlr Getaways - Module Six Notes

This version adds the Angular administrator SPA and RESTful CRUD endpoints for trips.

## Run the Express API and public website

```bash
npm install
npm run seed
npm start
```

Express runs at `http://localhost:3000`.

Public website:

- `http://localhost:3000/travel`

API endpoints for Postman:

- `GET http://localhost:3000/api/trips`
- `GET http://localhost:3000/api/trips/CHIL260701`
- `POST http://localhost:3000/api/trips`
- `PUT http://localhost:3000/api/trips/CHIL260701`
- `DELETE http://localhost:3000/api/trips/CHIL260701`

## Run the Angular admin SPA

Open a second terminal:

```bash
cd angular-admin
npm install
npm start
```

Angular runs at `http://localhost:4200` and calls the Express API at `http://localhost:3000/api`.

## What was added for Module Six

- Trip listing component retrieves trips through the API.
- Trip card component displays each trip and emits edit/delete events.
- Add trip component submits new trips with POST.
- Edit trip component loads one trip with GET and saves updates with PUT.
- TripDataService centralizes GET, POST, PUT, and DELETE calls.
- Express API includes CRUD endpoints for the trips collection.
- Public `/travel` page now reads trips from MongoDB, so added/updated trips can appear on the customer-facing site.
