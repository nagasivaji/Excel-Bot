// importing axios for request
import axios from "axios";

async function uploadExcel(excelData, updateResponse) {
    //console.log(excelData);
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
    updateResponse({
        status: true,
        message: result,
        from: "newExcelUpload",
    });
    //updateResponse(result);
}

export default uploadExcel;