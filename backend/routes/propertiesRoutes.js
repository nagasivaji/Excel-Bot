// Importing modules
const express = require('express');


// Importing excel controller functions
const {
    getColumnNames,
    addColumnName
} = require('./../controllers/propertiesController');


const router = express.Router();

// Actual routes
// Get column names for serial Number
router.get('/getColumns', getColumnNames);

// Adding Column Names
router.post('/addColumnName', addColumnName);




// Exporting routes to use in server.js file for redirecting routes
module.exports = router;