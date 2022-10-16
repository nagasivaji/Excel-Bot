<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="showUploadExcel" >Upload New Excel</button> | 
        <button @click="showExistingExcel" >Work With Existing Excel</button>
        <br> <br>
        <UploadNewExcel v-show="uploadExcel" />
        <GoWithExistingExcels v-show="existingExcel" />
        <!-- <InputExcelForm />  -->
    </div>
</template>

<script>

// Importing components 
import UploadNewExcel from './../components/excel/UploadNewExcel.vue';
import GoWithExistingExcels from './../components/excel/GoWithExistingExcels.vue';

export default {
    name: 'Home',
    components : {UploadNewExcel, GoWithExistingExcels},
    data() {
        return {
            uploadExcel: true,
            existingExcel: false,
        }
    },
    methods: {
        showUploadExcel(){
            this.uploadExcel = true;
            this.existingExcel = false;
        },
        showExistingExcel(){
            this.uploadExcel = false;
            this.existingExcel = true;
        }
    },
}
</script>
