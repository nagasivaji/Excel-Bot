// Importing modules
const express = require('express');


// Importing excel controller functions
const {
    getExcelData,
    uploadExcelData,
    getExistingExcelData
} = require('./../controllers/excelController');


const router = express.Router();

// Actual routes
// Get all excels
router.get('/getExcel', getExcelData);

// Get all existing excels
router.get('/getExcels', getExistingExcelData);

// Upload Excel data
router.post('/uploadExcel', uploadExcelData);


// Exporting routes to use in server.js file for redirecting routes
module.exports = router;