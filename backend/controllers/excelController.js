

// get excel data
const getExcelData =  (req, res) => {

    console.log("Getting excel data");
    res.send("Excel Data");
};


// Exporting this controller functions....
module.exports = {
    getExcelData,
}
