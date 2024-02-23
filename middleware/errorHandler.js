/**
 * Error Handler Middleware
 * 
 * This middleware is responsible for handling errors that occur during the execution of the application.
 * It captures exceptions and operational errors, logs them for debugging purposes, and sends a generic error response to the client.
 * 
 * Functionality:
 * - Logs the error stack to the console for debugging.
 * - Sends a 500 Internal Server Error status code along with a generic error message to the client.
 * 
 * Parameters:
 * - @err (Error): The error object caught by the middleware.
 * - @req (Request): The HTTP request object.
 * - @res (Response): The HTTP response object used to send the error message to the client.
 * - @next (Function): The next middleware function in the stack.
 * 
 * Note: This middleware should be placed at the end of the middleware stack or before port initialization in the main file(app.js).
 */

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorHandler;