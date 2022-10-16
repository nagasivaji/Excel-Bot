function processExcelFile(excel) {
    // console.log(excel);
    //1. check excel file or not
    //2. If not an excel through some error
    //3. If it is excel process file
    var response = checkExcelOrNot(excel);
    if (response.status === true) {
        return processFile(excel);
    } else {
        return response;
    }


}




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

// Importing ELSX module


// Processing Excel file....
function processFile(excel) {

    //console.log("Processing file");

    // Storing excel data into 2d array
    var excelData = [];

    // file reader to read our file
    var reader = new FileReader();

    // reading entire excel file
    reader.readAsArrayBuffer(excel.files[0]);

    // after reading full file invoking an anonymous function
    reader.onload = async function(event) {

        // Reading Excel cells which have some data
        var data = new Uint8Array(reader.result);

        // taking the result as array type
        var work_book = XLSX.read(data, { type: 'array' });

        //Excel sheet name
        var sheet_name = work_book.SheetNames;

        // Based on sheet name reading the data present in sheet into json array format
        var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], { header: 1 });
        // console.log(sheet_data);

        // If sheet has sufficient data
        if (sheet_data.length > 0) {
            // Rows loop
            // Note: row zero contains headings and remaining rows containg data
            for (var row = 0; row < sheet_data.length; row++) {
                // Columns loop
                var temp_rowArray = [];
                for (var cell = 0; cell < sheet_data[row].length; cell++) {
                    // string data 
                    var value = sheet_data[row][cell];

                    if (sheet_data[row][cell] === undefined) {
                        sheet_data[row][cell] = sheet_data[row][cell - 1];
                        value = sheet_data[row][cell];

                    }

                    if (sheet_data[row][cell] === undefined) {
                        value = sheet_data[row - 1][cell];
                    }

                    // string celldata into emp array
                    temp_rowArray.push(value);
                }

                //console.log(temp_rowArray);

                // string array data into 2d array
                excelData.push(temp_rowArray);

                //console.log(excelData);
            }
            //return excelData;

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
        }

    }

    //console.log(excelData);
    // returning 2d Excel data
    return excelData;
}

export default processExcelFile;