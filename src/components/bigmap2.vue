<template>
    <div class="big">
    <newmap2 :isbig="true"></newmap2>
    </div>
</template>

<script>
    import newmap2 from "./newmap2"
    export default {
        name: "bigmap2",

        components:{
            newmap2
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
