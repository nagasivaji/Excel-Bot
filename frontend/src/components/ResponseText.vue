<template>
<div>
    <div v-if="responseText != null">
        <h3>{{responseText.status}}</h3>
        <p>{{responseText.message}}</p>
    </div>
    <!-- <p>{{responseText}}</p> -->
</div>
</template>

<script>
export default {
    props:['responseText'], 
    // created() {
    //     console.log(this.responseText);
    // },
}

/*
        {
            status: true,
            message: "EXCEL-DATA",
            excelSheetNumber: sheetNo,
            excelSheetNames: excelSheets,
            excelSheetHeadingsCount: headingsCount,
            excelData: excelData,
            from: "newExcel"
        },
*/
</script>

<style>

</style>