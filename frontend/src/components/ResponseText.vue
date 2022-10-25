<template>
<div>
    <div v-if="responseText != null && responseText.from === 'newExcel' ">
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
</script>

<style>

</style>