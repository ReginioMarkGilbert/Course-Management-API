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
