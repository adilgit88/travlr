# CS 465 Module Seven Updates

This version adds secure login authentication for the Travlr admin SPA.

## Mock admin user

Run the seed script before testing:

```bash
npm run seed
```

The seed script creates this mock admin user:

- Email: admin@example.com
- Password: Password123

## API authentication endpoints

Use Postman to test these endpoints:

### Login

POST `http://localhost:3000/api/login`

```json
{
  "email": "admin@example.com",
  "password": "Password123"
}
```

A valid login returns a JWT token.

### Register

POST `http://localhost:3000/api/register`

```json
{
  "name": "Travlr Admin",
  "email": "newadmin@example.com",
  "password": "Password123"
}
```

### Protected trip write routes

The GET trip routes remain public. These admin write routes require the header below:

`Authorization: Bearer <token>`

Protected endpoints:

- POST `/api/trips`
- PUT `/api/trips/:tripCode`
- DELETE `/api/trips/:tripCode`

## Angular admin login

Start the API server:

```bash
npm start
```

Start Angular admin from the `angular-admin` folder:

```bash
npm install
npm start
```

Open `http://localhost:4200`. The app redirects to `/login`. After login, add, edit, and delete actions send the JWT token to the API.
