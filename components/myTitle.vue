<template>
    <div>
<!--        <dv-decoration-7 :reverse="true" style="width: 400px; height: 3rem; font-size:1.8rem"-->
<!--                         @click="showChoice = !showChoice"> &nbsp;{{title}}&nbsp;-->
<!--        </dv-decoration-7>-->
        <!--        <ul class="select-con">-->
        <!--            <li v-for="pasturename in pastures" :key="pasturename.name">{{pasturename.name}}</li>-->
        <!--        </ul>-->
    </div>
</template>

<script>
    export default {
        name: "myTitle",
        data() {
            return {
                title: '青藏高原牧场',
                showChoice: false,
                pastures: [
                    {name: '青藏高原牧场'},
                    {name: '高原牧场'},
                    {name: '青藏牧场'}
                ]
            }
        },
        created() {
            //查询牧场名称
            // this.title=this.getPastureName()

        },
        mounted() {
            //查询所有牧场名称
            // this.pastures=loadPastureName()
        },
        methods: {
            getPastureName() {

            },
            loadPastureName() {

            }
        }
    }
</script>

<style scoped>
    div {
        position: absolute;
        font-size: 1.8rem;
        z-index: 99;
        color: white;
        top: 0.1rem;
        left: 14%;
    }

    .select-con {
        display: none;
    }

    ul li {
        list-style: none;
        font-size: 2rem;
        width: auto;
        height: 2rem;
        line-height: 2rem;
    }

</style>
