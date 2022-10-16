// Importing node modules

// ENV module
require('dotenv').config();
// EJS modules
const express = require('express');
// Body Parser
const bodyParser = require('body-parser');

// Importing mongoose
const mongoose = require('mongoose');

// cors - for request accepting from browser 
var cors = require('cors')

// Importing excel routes from routes folder
const excelRoutes = require('./routes/excelRoutes');




// app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// course - to accept requests from browsers
app.use(cors())


// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Excel Routes
// Importing Mongoose Models
// const uploadExcel = require('./models/excel models/uploadExcelModel');

// Diverting apis getting from browser to required routes file i.e 'routes/excelRoutes.js'
app.use('/api/excel', excelRoutes);


app.listen(process.env.PORT, () => {
    console.log("Server listening on port" + process.env.PORT + "!");
});