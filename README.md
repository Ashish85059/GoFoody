# GoFoody

## Description

This Food Ordering App is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse through a menu, place orders, and track their order history.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Menu Viewing**: Users can view the available menu items along with their descriptions and prices.
- **Order Placement**: Users can add items to their cart and place orders.
- **Order Tracking**: Users can track the status of their current and past orders.
- **Order History**: Users can view their order history and details of past orders.

## Technologies Used

- **MongoDB**: Database to store user information, menu items, orders, and order history.
- **Express.js**: Backend framework to handle HTTP requests and routes.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT Authentication**: JSON Web Tokens for secure user authentication.
- **Bootstrap**: Frontend framework for responsive design and styling.

## Setup Instructions

1. Clone the repository from GitHub.
2. Install dependencies for both the frontend and backend using `npm install`.
3. Set up a MongoDB database and configure the connection in the backend.
4. Create a `.env` file in the backend directory and add necessary environment variables (e.g., database URI, JWT secret).
5. Start the backend server using `npm start` or `npm run dev` for development mode.
6. Start the frontend development server using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## Folder Structure

- **backend**: Contains backend server code including models, routes, controllers, and middleware.
- **frontend**: Contains React components, reducers, and styles.

## API Endpoints

- **GET /api/menu**: Retrieve the list of menu items.
- **POST /api/orders**: Place a new order.
- **GET /api/orders**: Retrieve the list of orders.
- **GET /api/orders/:id**: Retrieve details of a specific order.
- **PUT /api/orders/:id**: Update the status of an order.

