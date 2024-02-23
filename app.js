const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", (res) => {
    res.send("Test 1 - root route");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`);
});

mongoose.connect("mongodb://localhost:27017/coursesDB")
.then(() => {
    console.log("Connected to the Database.");
}).catch((err) => {
    console.error('Connection error: ' + err.message);
    console.log(err);
});
