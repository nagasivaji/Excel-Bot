<template>
    <div>
        <h1>Upload New Excels</h1>
        <InputExcelForm :updateResponseText="updateResponseText"/>
    </div>
</template>

<script>
// Importing components
import InputExcelForm from './InputExcelForm.vue';

export default {
    components :{InputExcelForm},
    props: ['updateResponseText'],
    // created() {
    //     this.updatedResponseText("Abc");
    // },
}
</script>

<style>

</style>