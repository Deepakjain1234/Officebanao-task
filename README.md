# To-Do Notes Backend API

## Overview
This is a simple backend API for managing to-do notes. It allows users to create, update, retrieve, and delete notes.

## Tech Stack
- **Backend Framework:** Node.js with Express.js
- **Database:** SQLite, MongoDB, or PostgreSQL (based on configuration)

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn
- A database (MYSQL)

### Steps to Set Up
1. Clone the repository:
   ```sh
   git clone https://github.com/Deepakjain1234/Officebanao-task
   cd Officebanao-task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the server:
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:3001`

## API Endpoints

### 1. Create a New To-Do Note
- **Endpoint:** `POST /notes`
- **Request Body:**
  ```json
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, bread"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "createdAt": "2024-01-01T12:00:00Z"
  }
  ```

### 2. Update an Existing To-Do Note
- **Endpoint:** `PUT /notes/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated title",
    "description": "Updated description"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Note updated successfully"
  }
  ```

### 3. Retrieve All To-Do Notes
- **Endpoint:** `GET /notes`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "createdAt": "2024-01-01T12:00:00Z"
    }
  ]
  ```

### 4. Delete a Specific To-Do Note
- **Endpoint:** `DELETE /notes/:id`
- **Response:**
  ```json
  {
    "message": "Note deleted successfully"
  }
  ```

## Validation
- The `title` field is required when creating or updating a note.

## Error Handling
- Returns 400 for invalid input (e.g., missing title).
- Returns 404 if the note does not exist.

## Code Structure
- `index.js` - Main entry point of the application.
- `routes/` - Contains route definitions.
- `controller/` - Contains business logic for handling requests.
- `models/` - Contains database models.
- `config/` - Handles database configuration.

## Running Tests
To run tests:
```sh
npm test
```

## License
This project is licensed under the MIT License.

