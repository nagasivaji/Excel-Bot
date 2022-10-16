// Importing modules
const express = require('express');


// Importing excel controller functions
const {
    getExcelData,
    uploadExcelData
} = require('./../controllers/excelController');


const router = express.Router();

// Actual routes
// Get all workouts
router.get('/getExcel', getExcelData);

// Upload Excel data
router.post('/uploadExcel', uploadExcelData);


// Exporting routes to use in server.js file for redirecting routes
module.exports = router;