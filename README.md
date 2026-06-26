# CS 465 Full Stack Development Portfolio Reflection

## GitHub Repository

[https://github.com/adilgit88/travlr.git]

## Project Overview

For this course, I built a full stack web application for Travlr Getaways. The application includes a customer-facing website and an administrative single-page application. The customer side allows users to view travel packages, while the admin side allows authorized users to create, read, update, and delete trip data. In the final version of the project, I added login authentication and security features to protect the admin functionality.

## Architecture

The frontend development in this project used more than one approach. The customer-facing side used Express HTML with Handlebars templates. This worked well for pages that were rendered from the server and sent directly to the browser. It kept the customer side simple and organized.

The admin side used a single-page application, also called an SPA, built with Angular. The SPA worked differently because it loaded in the browser and updated the page without needing a full page refresh. This made the admin experience smoother, especially when creating, editing, or deleting trips.

JavaScript connected many parts of the project. On the backend, Node.js and Express handled routes, controllers, and API requests. On the frontend, Angular used TypeScript and JavaScript concepts to manage components, services, forms, and data. The biggest difference was that the Express HTML side focused on server-rendered pages, while the Angular SPA focused on client-side interaction.

The backend used MongoDB because the trip data fit well into a NoSQL document structure. Each trip record included fields such as code, name, length, start date, resort, per-person cost, image, and description. MongoDB stores data in flexible JSON-like documents, so it worked well for this type of application. It also made it easier to work with data between the backend API and frontend application.

## Functionality

JSON is different from JavaScript because JSON is a data format, while JavaScript is a programming language. JavaScript can run logic, functions, and application behavior. JSON only stores and transfers data in a structured format using key-value pairs.

JSON tied the frontend and backend together in this project. The Angular admin SPA requested trip data from the Express API, and the backend returned that data as JSON. When an admin created or updated a trip, the frontend sent JSON data back to the backend. The API then used that data to update the MongoDB database.

I refactored code during the full stack process to improve functionality and reduce repetition. For example, the admin side used Angular services to handle API calls instead of placing the same request logic in multiple components. This made the code cleaner and easier to maintain. I also worked with reusable UI components, such as trip listing, trip card, login, add trip, and edit trip functionality.

Reusable UI components improve efficiency because they allow developers to build one piece of interface logic and use it in more than one place. This reduces duplicate code, makes updates easier, and helps keep the application consistent. If one component needs a change, the developer can update it in one location instead of changing the same logic across many files.

## Testing

In a full stack application, methods, endpoints, and security all work together. Methods describe the type of request being made. For example, GET retrieves data, POST creates data, PUT updates data, and DELETE removes data. Endpoints are the API routes that the frontend uses to communicate with the backend. In this project, endpoints handled trip data and user authentication.

Testing the API helped confirm that each endpoint worked correctly. I used Postman to test requests and responses from the backend. For trip data, I tested retrieving all trips, retrieving one trip, creating a trip, updating a trip, and deleting a trip. These tests helped confirm that the backend routes, controllers, and database connections worked properly.

Adding security made testing more complex because protected admin endpoints required authentication. After login was added, the application needed to verify a user and return a secure token. The frontend then used that token when making protected API requests. This showed me how security changes the testing process. It is not enough to test whether an endpoint works. I also had to test whether the endpoint blocks unauthorized users and allows authorized users.

This helped me understand why authentication matters in a full stack application. The customer side can remain public, but the admin side must protect actions that change data. Without login security, anyone could access administrative features and modify trip records.

## Reflection

This course helped me move closer to my professional goals by giving me hands-on experience with full stack development. I learned how the frontend, backend, database, and API all connect in one working application. Before this course, I understood some parts of web development separately. This project helped me see how all of those parts work together in a real application.

I developed skills in Node.js, Express, MongoDB, Angular, REST APIs, routing, component-based development, and authentication. I also gained more confidence testing APIs with Postman and debugging errors across the frontend and backend. These skills make me a stronger candidate for software development, web development, and full stack internship roles.

One important lesson I learned is that full stack development requires both planning and troubleshooting. A small issue in one file can affect the frontend, backend, or database. I had to read errors carefully, test one part at a time, and make changes in a controlled way. That process helped me become more patient and more confident as a developer.

This project also gave me portfolio work that I can show to future employers. It demonstrates that I can build a web application with a public customer side, an admin dashboard, database integration, API communication, CRUD functionality, and login authentication. These are practical skills that apply directly to real software development work.

