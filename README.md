To-Do Notes Backend API

Overview

This is a simple backend API for managing to-do notes. It allows users to create, update, retrieve, and delete notes.

Tech Stack

Backend Framework: Node.js with Express.js

Database: SQLite, MongoDB, or PostgreSQL (based on configuration)

Installation and Setup

Prerequisites

Ensure you have the following installed:

Node.js (latest LTS version recommended)

npm or yarn

A database (SQLite, MongoDB, or PostgreSQL)

Steps to Set Up

Clone the repository:

git clone https://github.com/your-repository/todo-notes-api.git
cd todo-notes-api

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root directory.

Add necessary configurations (example for MongoDB):

PORT=5000
DATABASE_URL=mongodb://localhost:27017/todo-notes

Run the server:

npm start

The API will be available at http://localhost:5000

API Endpoints

1. Create a New To-Do Note

Endpoint: POST /notes

Request Body:

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}

Response:

{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "createdAt": "2024-01-01T12:00:00Z"
}

2. Update an Existing To-Do Note

Endpoint: PUT /notes/:id

Request Body:

{
  "title": "Updated title",
  "description": "Updated description"
}

Response:

{
  "message": "Note updated successfully"
}

3. Retrieve All To-Do Notes

Endpoint: GET /notes

Response:

[
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "createdAt": "2024-01-01T12:00:00Z"
  }
]

4. Delete a Specific To-Do Note

Endpoint: DELETE /notes/:id

Response:

{
  "message": "Note deleted successfully"
}

Validation

The title field is required when creating or updating a note.

Error Handling

Returns 400 for invalid input (e.g., missing title).

Returns 404 if the note does not exist.

Code Structure

server.js - Main entry point of the application.

routes/ - Contains route definitions.

controllers/ - Contains business logic for handling requests.

models/ - Contains database models.

config/ - Handles database configuration.

Running Tests

To run tests:

npm test

License

This project is licensed under the MIT License.

