<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="showUploadExcel" >Upload New Excel</button> | 
        <button @click="showExistingExcel" >Work With Existing Excel</button>
        <br> <br>
        <UploadNewExcel v-if="uploadExcel" :updateResponseText="updateResponseText"/>
        <GoWithExistingExcels v-if="existingExcel" :updateResponseText="updateResponseText"/>
        <ResponseText :responseText="responseText" />
    </div>
</template>

<script>

// Importing components 
import UploadNewExcel from './../components/excel/UploadNewExcel.vue';
import GoWithExistingExcels from './../components/excel/GoWithExistingExcels.vue';
import ResponseText from './../components/ResponseText.vue';

export default {
    name: 'Home',
    components : {UploadNewExcel, GoWithExistingExcels, ResponseText},
    data() {
        return {
            uploadExcel: true,
            existingExcel: false,
            responseText: null,
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
        }, 
        updateResponseText(response) {
            this.responseText = response;
        },
    },
}
</script>
