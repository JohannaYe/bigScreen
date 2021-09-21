<template>
    <div class="lunbo2">
        <dv-scroll-board :config="config" style="width:100%;height:100%" />
    </div>
</template>

<script>
    export default {
        name: "lunbo2",
        created() {
            this.config = {
                waitTime:800,
                header: ['牛舍名称', '配方类型', '配方牛头数','饲喂比例','计划总量'],
                data: [
                    ['A1','青年牛配方','16','100%',2303],
                    ['A2','青年牛配方','158','100%',2356],
                    ['A3','青年牛配方','169','100%',1899],
                    ['A4','青年牛配方','132','100%',5303],
                    ['A5','青年牛配方','58','100%',2916],
                    ['A6','青年牛配方','47','100%',2303],
                    ['A7','青年牛配方','30','100%',3108],
                    ['A8','青年牛配方','15','100%',2796],
                    ['A9','青年牛配方','26','100%',2185],

                ] }
        }
    }
</script>

<style scoped>
    .lunbo2{
        position: absolute;
        top: 3%;
        left: 1%;
        bottom: 5%;
        right: 1%;
    }
</style>
