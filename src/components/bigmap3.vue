<template>
    <div class="big">
    <newmap3 :isbig="true"></newmap3>
    </div>
</template>

<script>
    import newmap3 from "./newmap3"
    export default {
        name: "bigmap3",

        components:{
            newmap3
        },
        created() {

        }
    }
</script>

<style>
.big {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
}
    #button{
        margin-top: 20px;
        margin-right: 20px;
    }
</style>
