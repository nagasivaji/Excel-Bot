// Importing the module
const mongoose = require('mongoose');

// Create and connecting to the database
mongoose.connect("mongodb://localhost:27017/ExcelBotDb", { useNewUrlParser: true });

// Modeling ....
const columnsSchema = new mongoose.Schema({
    columnNames: {
        type: String,
        required: true
    }
}, { timestamps: true });


// Creating Object for the model
const Column = mongoose.model('Column', columnsSchema);

// Exporting this model
module.exports = Column;