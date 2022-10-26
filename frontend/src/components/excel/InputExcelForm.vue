<template>
    <div class="inputExcelForm">
        <input type="file" id="excelInput" @input="processInputExcelFile">
        <br>
        <br>
        <div id="sheetInputArea"></div>
        <br>
        <br>
    </div>
</template>

<script>
// Importing helper function 
import processExcelFile from '../../helpers/processInputExcelFile';

export default {
    props: ['updateResponseText'],
    data() {
        return {
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
            this.updateResponseText(response);
        },
    },
    // created() {
    //     this.updatedResponseText("Abcd");
    // },
}
</script>

<style>

</style>