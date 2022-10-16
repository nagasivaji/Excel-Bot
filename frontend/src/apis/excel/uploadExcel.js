// importing axios for request
import axios from "axios";

// importing helper function
import processExcelFile from "../../helpers/processInputExcelFile";

function uploadExcel(excel, updateResponse) {
    //console.log(excel);
    var excelData = processExcelFile(excel);
    //console.log(excelData);

    if (excelData.status === undefined) {
        setTimeout(() => {
            return uploadExcelData(excelData, updateResponse);
        }, 5000);
        updateResponse("Processing...");
    } else {
        updateResponse(excelData.message);
    }

}

async function uploadExcelData(excelData, updateResponse) {
    console.log(excelData);
    var result = "--";
    await axios.post("http://localhost:8000/api/excel/uploadExcel", {
            username: 'sivaji',
            excelData: excelData,
            name: "Temp Data"
        })
        .then((res) => {
            console.log('response:', res.data);
            result = res.data;
        }).catch((err) => {
            console.log('error:', err);
            result = err;
        });
    //updateResponse("Uploaded...");
    updateResponse(result);
}

export default uploadExcel;