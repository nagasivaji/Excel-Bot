<template>
    <div class="inputExcelForm">
        <input type="file" id="excelInput" @input="processInputExcelFile">
        <br>
        <br>
        <div id="sheetInputArea"></div>
        <br>
        <br>
        
        <div v-if="loading">
            <a-spin  />
        </div>
        <div v-else>
            <button @click="postExcelData">Click</button>
            {{result}}
        </div>



    </div>
</template>

<script>
// Importing uploadExcel function logic from external js file
import uploadExcel from './../apis/excel/uploadExcel';

// Importing helper function 
import processExcelFile from './../helpers/processInputExcelFile';

export default {
    data() {
        return {
            result : null,
            loading : false,
        }
    },
    methods: {
        // For processing Input file
        processInputExcelFile(){
            this.loading = true;
            var excelDom = document.getElementById("excelInput");
            processExcelFile(excelDom, this.updateResponse);
        },
        // For updating result 
        updateResponse(response){
            this.result = response;
            this.loading = false;
        },

        // Posting Excel data
        postExcelData(){
            uploadExcel(excelDom, this.updateResponse);
            excelDom.value = "";
        },
        
    },
}
</script>

<style>

</style>