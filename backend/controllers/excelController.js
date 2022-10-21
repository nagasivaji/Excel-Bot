// Importing Mongoose Models
const Excel = require('../models/excel models/excelModel');


// get excel data
const getExcelData = async(req, res) => {
    console.log("Getting excel data");
    //console.log(req.query.username);
    const username = req.query.username;
    await Excel.find({ username: username }).then((data) => {
        if (data.length === 0)
            console.log("No excel data found for this user");
        else
            console.log("Excel Data found for user");

        res.send(data);
    }).catch((err) => {
        console.log("Error while getting Excel data");
        res.send(err);
    });

};

// get excel data
const getExistingExcelData = async(req, res) => {
    console.log("Getting existing excel data");
    //console.log(req.query.username);
    const username = req.query.username;
    await Excel.find({ username: username }).then((data) => {
        if (data.length === 0)
            console.log("No excel data found for this user");
        else
            console.log("Excel Data found for user");

        res.send(data);
    }).catch((err) => {
        console.log("Error while getting Excel data");
        res.send(err);
    });

};


const uploadExcelData = async(req, res) => {
    console.log("Uploading Excel data");
    //console.log(req.body.excelData);
    //console.log(typeof(req.body.excelData));
    const { username, excelData } = req.body;

    const excel = new Excel({
        username: username,
        name: req.body.name,
        excelData: excelData,
    });

    await excel.save().then((data) => {
        console.log("ExcelData saved successfully");
        res.send("Uploaded Successfully");
    }).catch((err) => {
        console.log("Error while saving ExcelData:", err);
        res.send(err.message);
    });
}

// Exporting this controller functions....
module.exports = {
    getExcelData,
    uploadExcelData,
    getExistingExcelData
}