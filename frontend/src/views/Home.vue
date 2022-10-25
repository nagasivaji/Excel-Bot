<template>
    <div class="home">
        <h1>Home</h1>
        <button @click="showUploadExcel" >Upload New Excel</button> | 
        <button @click="showExistingExcel" >Work With Existing Excel</button>
        <br> <br>
        <UploadNewExcel v-if="uploadExcel" :updateResponseText="updateResponseText"/>
        <GoWithExistingExcels v-if="existingExcel" :updateResponseText="updateResponseText"/>
        <ResponseText :responseText="responseText" />
        <button 
            @click="showPreviewExcel" 
            v-show="responseText && responseText.status"
        >Preview Excel File</button>
        <PreviewExcelFile v-if="previewExcel" :tableContent="responseText" :showPreviewExcel="showPreviewExcel" />
    </div>
</template>

<script>

// Importing components 
import UploadNewExcel from './../components/excel/UploadNewExcel.vue';
import GoWithExistingExcels from './../components/excel/GoWithExistingExcels.vue';
import ResponseText from './../components/ResponseText.vue';
import PreviewExcelFile from './../components/tables/PreviewExcelFile.vue';

export default {
    name: 'Home',
    components : {UploadNewExcel, GoWithExistingExcels, ResponseText, PreviewExcelFile},
    data() {
        return {
            uploadExcel: true,
            existingExcel: false,
            responseText: null,
            previewExcel: false,
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
        showPreviewExcel(){
            this.previewExcel = !this.previewExcel;
        },
    },
}
</script>
