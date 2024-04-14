# Express Project Readme

## Introduction

This project is an Express application that demonstrates various features of Express, including requests, middleware, MongoDB integration, and more. The project includes a simple API for managing users and products.

## Prerequisites

- Node.js installed
- MongoDB installed and running

## Getting Started

- Clone the repository
- Install dependencies with npm install
- Start the server with npm start
- Access the API at http://localhost:3000

## API Endpoints

# Users

- GET /api/users: Retrieve all users
- GET /api/users/:id: Retrieve a user by ID
- POST /api/users: Create a new user
- PUT /api/users/:id: Update a user by ID
- PATCH /api/users/:id: Partially update a user by ID
- DELETE /api/users/:id: Delete a user by ID
- Products
- GET /api/products: Retrieve all products

## Middleware

The project includes the following middleware:

- express.json(): Parses incoming requests with JSON payloads

## MongoDB Integration

The project uses Mongoose to interact with MongoDB. The User and Product models are defined in the models directory.

## License

This project is licensed under the MIT License.
