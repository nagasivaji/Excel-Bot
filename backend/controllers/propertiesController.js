// Importing Mongoose Models
const Column = require('../models/properties models/propertiesModel');


// get excel data
const getColumnNames = async(req, res) => {
    console.log("Getting Column Names");
    //const username = req.query.username;
    await Column.find({}).then((data) => {
        if (data.length === 0)
            console.log("No column names found");
        else
            console.log("Column names found");

        res.send(data);
    }).catch((err) => {
        console.log("Error while getting Column names");
        res.send(err);
    });

};

// Adding Column name
const addColumnName = async(req, res) => {
    console.log("Adding Column Name");
    console.log(req.query.name);
    //console.log(typeof(req.body.excelData));
    const name = req.query.name;

    const columnName = new Column({
        columnNames: name,
    });

    await columnName.save().then((data) => {
        console.log("Column Name added successfully");
        res.send("Addedd Successfully");
    }).catch((err) => {
        console.log("Error while adding Column Name:", err);
        res.send(err.message);
    });
}

// Exporting this controller functions....
module.exports = {
    getColumnNames,
    addColumnName
}