// Importing modules
const express = require('express');


// Importing excel controller functions
const {
    getExcelData,
} = require('./../controllers/excelController');


const router = express.Router();

// Actual routes
// Get all workouts
router.get('/getExcel', getExcelData);



// Exporting routes to use in server.js file for redirecting routes
module.exports = router;