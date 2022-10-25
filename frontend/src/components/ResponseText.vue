<template>
<div>
    <p v-if="responseText != null && responseText.from === 'newExcel' ">{{responseText}}</p>
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