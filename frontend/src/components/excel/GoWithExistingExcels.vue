<template>
    <div>
        <h1>Go with Existing Excels</h1>
        <button @click="getExistingExcels">click</button>
        <br><br>
    </div>
</template>

<script>
// importing getExistingExcelData logic 
import getExistingExcelData from '../../apis/excel/getExistingExcelData.js';
export default {
    props: ['updateResponseText'],          
    data() {
        return {
            result : "null",
        }
    },
    mounted() {
        this.getExistingExcels();
    },
    methods: {
        async getExistingExcels(){
            this.updateResponseText(await getExistingExcelData());
        }
    },
}
</script>

<style>

</style>