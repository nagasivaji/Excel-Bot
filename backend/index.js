// Importing node modules

// EJS modules
const express = require('express');


// app
const app = express();


// Routes
app.get("/", (req,res) => {
    res.send("Hello World!");
});


app.listen(8000, () => {
    console.log("Server listening on port 8000");
});