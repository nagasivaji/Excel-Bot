function processExcelFile(excel, updateResponse) {
    // console.log(excel);
    //1. check excel file or not
    //2. If not an excel through some error
    //3. If it is excel process file for sheet information
    var response = checkExcelOrNot(excel);
    if (response.status === true) {
        readExcelFile(excel, updateResponse);
    } else {
        updateResponse(response);
    }
}

export default processExcelFile;





// file type checker
function checkExcelOrNot(excel) {

    // If file is not an excel throws error
    try {
        // checking for type...
        if (!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(excel.files[0].type)) {

            excel.value = '';
            return { status: false, message: "Only .xlsx or .xls file format are allowed" };
        }
        return { status: true, message: "Input file is in correct format" };
    } catch (e) {
        //console.log("Error: "+e);
        return { status: false, message: "No file choosen" };
    }

}


// reading excel file
function readExcelFile(excel, updateResponse) {

    // Creating reader for excel file
    var reader = new FileReader();

    // Reading First Excel file from the input
    reader.readAsArrayBuffer(excel.files[0]);

    // ````````Anonymous function````````
    // after reading full file invoking an anonymous function for fetching data from excel file
    reader.onload = async(event) => {

        // Storing reader reasult into a variable in array format
        var excelResult = new Uint8Array(reader.result);

        // Excel result book similar to excel file.. Assigning it to global variable
        var ExcelBook = XLSX.read(excelResult, { type: 'array' });

        // Getting excel sheets array from excel reasult book
        var excelSheets = ExcelBook.SheetNames;

        // Show sheets dropdown
        showSheetsDropdown(excelSheets, ExcelBook, updateResponse);

    }
}


// Display dropdown for selection os sheets
function showSheetsDropdown(excelSheets, ExcelBook, updateResponse) {

    // Creating dropdown for selection
    const sheetInputArea = document.getElementById("sheetInputArea");
    var temp = `<p>Select Sheet:</p><select id="selectSheet" class="form-select" aria-label="Default select example">`;
    for (var i = 0; i < excelSheets.length; i++) {
        temp += `<option value="${i}">${i + 1}:${excelSheets[i]}</option>`;
    }
    temp += `</select>`;
    // assigning dropdown to select dropdown area
    sheetInputArea.innerHTML = temp;

    // EVENT LISTENER FOR SELECT SHEET DROPDOWN
    // Accessing dropdown selection
    const selectSheet = document.getElementById("selectSheet");

    //Sending data back to parent component
    //sendDataBack(0, ExcelBook, updateResponse);
    getExcelData(0, excelSheets, ExcelBook, updateResponse);

    // Adding event Listener to select sheet dropdown
    selectSheet.addEventListener("change", () => {
        //Sending data back to parent component
        //sendDataBack(selectSheet.value, ExcelBook, updateResponse);
        getExcelData(selectSheet.value, excelSheets, ExcelBook, updateResponse);
    });
}

//Get Excel Data
function getExcelData(sheetNo, excelSheets, ExcelBook, updateResponse) {
    // Based on sheet number reading the data present in sheet into json array format
    var sheetData = XLSX.utils.sheet_to_json(ExcelBook.Sheets[excelSheets[sheetNo]], { header: 1 });
    //console.log(sheetData);

    // variable for String Excel data
    var excelData = [];

    // If sheet has sufficient data
    if (sheetData.length > 0) {
        // Rows loop
        // Note: row zero contains headings and remaining rows containg data
        for (var row = 0; row < sheetData.length; row++) {
            // Columns loop
            var temp_rowArray = [];
            for (var cell = 0; cell < sheetData[row].length; cell++) {
                // string data 
                var value = sheetData[row][cell];

                if (sheetData[row][cell] === undefined) {
                    sheetData[row][cell] = sheetData[row][cell - 1];
                    value = sheetData[row][cell];

                }

                if (sheetData[row][cell] === undefined) {
                    value = sheetData[row - 1][cell];
                }

                // string celldata into temp array
                temp_rowArray.push(value);
            }

            // string array data into 2d array
            excelData.push(temp_rowArray);

            //console.log(excelData);
        }

        // Before returning handling 1st row last column
        const len1 = excelData[0].length;
        const len2 = excelData[1].length;
        //console.log(len1, len2);
        if (len1 < len2) {
            const diff = len2 - len1;
            for (var k = 0; k < diff; k++) {
                excelData[0][len1 + k] = excelData[0][len1 - 1 + k];
            }
        }

        // Before returning finding heading rows
        findHeadingsCount(sheetNo, excelSheets, excelData, updateResponse);

    } else {
        updateResponse({
            status: false,
            message: "NO-DATA",
            excelData: excelData
        });
    }
}

// importing getColumns logic
import getColumns from './../apis/properties/getColumns';

// Finding no of heading rows in excel data
async function findHeadingsCount(sheetNo, excelSheets, excelData, updateResponse) {

    //console.log(typeof(excelData[1][0]));
    if (typeof(excelData[0][0]) != 'string') {
        updateResponse({
            status: false,
            message: "NO-HEADINGS",
            excelData: excelData
        });
    } else {
        var result = await getColumns();
        //console.log(result);
        var isColumnsThere = { status: false, heading: null };
        result.forEach(cols => {
            //console.log(cols.columnNames.toLowerCase(), " : ", excelData[0][0].toLowerCase());
            var colName = excelData[0][0].toLowerCase();
            if (cols.columnNames.toLowerCase() === colName) {
                isColumnsThere = { status: true, heading: excelData[0][0] };
            }
        });

        if (isColumnsThere.status) {
            var headingsCount = -1;
            for (var row = 0; row < excelData.length; row++) {
                if (
                    excelData[row][0] != isColumnsThere.heading &&
                    typeof(excelData[row][0]) == 'number' &&
                    excelData[row][0] === 1) {
                    headingsCount = row;
                    break;
                }
            }

            if (headingsCount == -1) {
                updateResponse({
                    status: false,
                    message: "ERROR-WITH-HEADING",
                    excelData: excelData
                });
            } else {
                sendDataBack(sheetNo, excelSheets, excelData, headingsCount, updateResponse);
            }
        } else {
            updateResponse({
                status: false,
                message: "HEADING-NOT-FOUND",
                excelData: excelData
            });
        }

    }



}




// Sending Sheet number and sheet data...
function sendDataBack(sheetNo, excelSheets, excelData, headingsCount, updateResponse) {
    updateResponse({
        status: true,
        message: "EXCEL-DATA",
        excelSheetNumber: sheetNo,
        excelSheetNames: excelSheets,
        excelSheetHeadingsCount: headingsCount,
        excelData: excelData
    });
}