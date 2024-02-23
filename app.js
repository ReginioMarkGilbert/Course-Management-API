
/**
 * Application Entry Point
 * 
 * This file serves as the entry point for the application, setting up the Express.js server, connecting to a MongoDB database, and defining routes and middleware.
 * 
 * Functionality:
 * - Sets up an Express.js server.
 * - Connects to a MongoDB database.
 * - Defines routes for the application.
 * - Defines middleware for the application, including error handling.
 * - Starts the server listening for incoming requests.
 * 
 * Note: This file assumes the existence of a MongoDB database running locally on the default port (27017) and a collection named "mongo-test".
 */

const express = require("express");
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(express.json());

app.use('/courses', courseRoutes);

app.get("/", (res) => {
    res.send("Test 1 - root route");
});

// Error handling middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/mongo-test")
.then(() => {
    console.log("Connected to the Database.");
}).catch((err) => {
    console.error('Connection error: ' + err.message);
    console.log(err);
});
