<template>
    <div class="inputExcelForm">
        <input type="file" @input="onFormInput" id="excelInput">
        <br>
        <br>
        <button @click="getExcelData">Click</button>
        <br>
        <br>
        {{result}}
    </div>
</template>

<script>
// imporing getExcelFunction logic from external js file
import getExcel from './../apis/excel/getExcel';
export default {
    data() {
        return {
            fileInput: "null",
            result : "null",
        }
    },
    methods: {
        async getExcelData(){
            this.result = await getExcel();
        },

        

    },
}
</script>

<style>

</style>