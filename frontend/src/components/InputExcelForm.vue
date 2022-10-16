<template>
    <div class="inputExcelForm">
        <input type="file" id="excelInput">
        <br>
        <br>
        <button @click="postExcelData">Click</button>
        <br>
        <br>
        {{result}}
    </div>
</template>

<script>
// imporing getExcelFunction logic from external js file
import getExcel from './../apis/excel/getExcel';
// Importing uploadExcel function logic from external js file
import uploadExcel from './../apis/excel/uploadExcel';

export default {
    data() {
        return {
            result : "null",
        }
    },
    methods: {
        async getExcelData(){
            this.result = await getExcel();
        },

        updateResponse(response){
            this.result = response;
        },

        postExcelData(){
            var excelDom = document.getElementById("excelInput");
            uploadExcel(excelDom, this.updateResponse);
            excelDom.value = "";
        },
        
    },
}
</script>

<style>

</style>