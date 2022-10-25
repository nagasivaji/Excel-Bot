<template>
    <div class="tableArea">
        <div class="close">
            <button @click="showPreviewExcel">Close Preview</button>
        </div>
        <div class="title">
            <h1>Preview Excel File</h1>
        </div>
        <div class="details">
            <div class="sheetNo">
                <h3>{{"Sheet No: "+tableContent.excelSheetNumber}}</h3>
            </div>
            <div class="sheetName">
                <h3>{{"Sheet Name: "+tableContent.excelSheetNames[tableContent.excelSheetNumber]}}</h3>
            </div>
        </div>
        <div class="table">
            <div id="HTMLTable"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['tableContent', 'showPreviewExcel'],
    mounted() {
        this.createHTMLTable(this.tableContent);
    },
    methods: {
        createHTMLTable(tableContent){
            //console.log(tableContent);

            const noOfHeadings = tableContent.excelSheetHeadingsCount;
            const data = tableContent.excelData;

            //creating HTML table based on the data
            //Table start
            var tableStart = `<table class="table">`;

            //table Headings 
            // Openinig row
            var tableHeadings = ``;

            for (var i = 0; i < noOfHeadings; i++) {

                // creating row 
                var tempRow = `<tr>`;

                for(var j = 0; j < data[i].length; j++) {
                    tempRow = tempRow + `<th>${data[i][j]}</th>`;
                }

                // closing row tag
                tempRow = tempRow + '</tr>';

                // Adding each temporary row to table rows string 
                tableHeadings = tableHeadings + tempRow;
            }
            



            // table rows 
            // All students data
            var tableRows = ``;
            for(var i=noOfHeadings; i<data.length; i++)
            {
                // creating row 
                var tempRow = `<tr>`;

                // Looping through the Array 
                for(var j=0; j<data[i].length; j++){
                    tempRow = tempRow + `<td>${data[i][j]}</td>`;
                }

                // closing row tag
                tempRow = tempRow + '</tr>';

                // Adding each temporary row to table rows string 
                tableRows = tableRows + tempRow;
            }


            // table end
            var tableEnd = `</table>`;

            //Final table....
            var table = tableStart + tableHeadings + tableRows + tableEnd;

            // Appending table to div
            document.getElementById("HTMLTable").innerHTML = table;
        }
    },
}
</script>

<style>
    .tableArea{
        background-color: greenyellow;
        position: absolute;
        top: 0;
        border: 3px solid #f1f1f1;
        z-index: 9;
        padding: 10px;
    }

    .tableArea {
        display: flex;
        flex-direction: column;
    }

    /* .tableArea .close{
        text-align: end;
    } */

    /* .tableArea .title{
        text-align: center;
    } */
</style>