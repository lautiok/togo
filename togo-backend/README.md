# Togo Task Management Backend 🛠🔧

This project consists of a backend application for a task management application. It utilizes Express.js as the web server framework and MongoDB as the database. The application provides endpoints for user registration, login, logout, user profile, and CRUD (Create, Read, Update, Delete) operations on tasks.

## Main Components 🧱⚙

Express Server:

- Defines an Express server on port 3000.
- Utilizes middleware such as cors to allow CORS requests from a specific origin and for handling cookies.
- Uses the express.json() and express.urlencoded() middleware for parsing incoming requests in JSON and URL encoded format.
- Defines routes for authentication and task operations.

Routes:

- /api/auth: Contains routes related to user authentication.
- /api/tasks: Contains routes related to task operations.

Controllers:

- auth.controller.js: Contains controllers for user registration, login, logout, and user profile.
- tasks.controller.js: Contains controllers for getting, creating, updating, and deleting tasks.

Models:

- user.model.js: Defines the schema for the user model.
- task.model.js: Defines the schema for the task model.

Middleware:

- validateToken.js: Middleware for verifying the validity of the JWT token in protected requests.
- validator.middleware.js: Middleware for validating data schema using the Zod library.

Libraries:

- jwt.js: Contains functions for creating JWT tokens.
- db.js: Configuration and connection to the MongoDB database.

## Functionality 🔑

Authentication:

- Allows users to register by providing their name, email, and password.
- Allows users to log in with their email and password.
- Provides an endpoint for logging out and removing the token cookie.

Tasks:

- Allows users to perform CRUD operations on tasks.
- Operations include getting all tasks, getting a specific task by its ID, creating a new task, updating an existing task, and deleting a task.

Security:

- Uses JWT tokens for user authentication.
- Task routes are protected by authentication, requiring the user to provide a valid token in requests.

## Additional Considerations

- Data Validation: Utilizes the Zod library for validating data schemas in registration and login requests.
- Token Expiry: Tokens have an expiry of 1 day to enhance security.
- Cookie Usage: Cookies are used for handling the authentication token.

# Api Configuration 🛠

Setup:

- Clone the repository.
- Install dependencies using npm install.
- Set up a MongoDB database and provide the connection URI in the .env file.
- Run the server using npm start.

API Endpoints:

- Authentication Endpoints (/api/auth)
- POST /register: Register a new user.
- POST /login: Log in with existing credentials.
- POST /logout: Log out and invalidate the token.
- GET /profile: Get user profile information.
- Task Endpoints (/api/tasks)
- GET /tasks: Get all tasks for the authenticated user.
- GET /tasks/:id: Get a specific task by ID.
- POST /tasks: Create a new task.
- PUT /tasks/:id: Update an existing task by ID.
- DELETE /tasks/:id: Delete a task by ID.

Usage:

- Register: Send a POST request to /api/auth/register with the user's name, email, and password in the request body.
- Login: Send a POST request to /api/auth/login with the user's email and password in the request body.
- Task Operations: Use endpoints in /api/tasks for CRUD operations on tasks.

## Frontend Repository 🧱

The frontend for this application is available at https://github.com/lautiok/togo-frontend.

## Credits💻

This project was developed by 💖 Nahuel Guerra.
