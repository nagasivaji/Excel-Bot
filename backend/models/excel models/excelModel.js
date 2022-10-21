// Importing the module
const mongoose = require('mongoose');

// Create and connecting to the database
mongoose.connect("mongodb://localhost:27017/ExcelBotDb", { useNewUrlParser: true });

// Modeling ....
const excelSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    excelData: {
        type: Object,
        required: true
    },
}, { timestamps: true });


// Creating Object for the model
const Excel = mongoose.model('Excel', excelSchema);

// Exporting this model
module.exports = Excel;