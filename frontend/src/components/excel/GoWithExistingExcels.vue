<template>
    <div>
        <h1>Go with Existing Excels</h1>
        <button @click="getExistingExcels">click</button>
        <br> <br>
        {{result}}

    </div>
</template>

<script>
// importing getExistingExcelData logic 
import getExistingExcelData from '../../apis/excel/getExistingExcelData.js';
export default {
    data() {
        return {
            result : "null",
        }
    },
    created() {
        this.getExistingExcels();
    },
    methods: {
        async getExistingExcels(){
            this.result = await getExistingExcelData();
        }
    },
}
</script>

<style>

</style>