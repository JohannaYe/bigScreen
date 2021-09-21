<template>
    <div class="dropdown">
        <dv-decoration-11 style="width:16%;height:90%;margin:auto;font-weight: bolder;color:greenyellow;font-size: 2em;">
            <div class="iconfont" v-show="!showChoice" @click="showChoice = !showChoice">{{currentMenu}}</div>
        </dv-decoration-11>
        <div class="select-con" v-show="showChoice" >
            <div class="item" @click="itemClick1">中心级</div>
            <div class="item" @click="itemClick3">牧场级</div>
            <div class="item" @click="itemClick2">牛级</div>
            <div class="item" @click="itemClick6">称重级</div>
            <div class="item" @click="itemClick5">TMR级</div>
<!--            <div class="item" @click="itemClick4">分群级</div>-->
            <div class="item" @click="itemClick8">溯源</div>
            <div class="item" @click="itemClick7">乡村振兴</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MySelectButton",
        components: {
            // myButton
        },
        props: {},
        data() {
            return {
                showChoice: false,
            };
        },
        watch: {},
        methods: {
            itemClick1() {
                // this.$router.replace("/mycenter");
                this.$router.push("/mycenter");
                this.showChoice = false;
            },
            itemClick2() {
                this.$router.replace("/ox");
                this.$router.push("/myox");
                this.$store.state.selectName= '牛级'
                this.showChoice = false;
            },
            itemClick3() {
                this.$router.replace("/Pasture");
                this.$router.replace("/myPasture");
                this.showChoice = false;
            },
            // itemClick4() {
            //     this.$router.replace("/divide");
            //     this.showChoice = false;
            // },
            itemClick5() {
                this.$router.replace("/TMR");
                this.showChoice = false;
            },
            itemClick6() {
                this.$router.replace("/myweight");
                this.showChoice = false;
            },
            itemClick7() {
                this.$router.replace("/village");
                this.showChoice = false;
            },
            itemClick8() {
                this.$router.replace("/trace");
                this.showChoice = false;
            },
        },
        created() {
            this.showChoice = false;
            console.log(this.$store.state.selectName)
        },

        mounted() {
            this.showChoice = false;
        },
        computed:{
            currentMenu() {
                return this.$store.state.selectName
            }
        }
    }
</script>

<style lang="less" scoped>
    .dropdown{
        /*display: flex;*/
        /*flex-direction: column;*/
        width: 100%;
        height: 100%;
        z-index: 100;
        font-size: 2rem;
    }
    .select-con {
        width: 13%;
        height: 20rem;
        z-index: 99;
        color: greenyellow;
        display: -webkit-flex; /* Safari */
        display: flex;
        position: absolute;
        top: 3.5rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: stretch;
        align-self: center;
        font-size: 2rem;
        text-align: center;
        overflow: hidden;
        .item {
            flex: 1 1 auto;
            /*width: 4rem;*/
            width: 100%;
            height: 2.5rem;
            align-self: center;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;

        }

        .item:hover {
            background-color: rgba(15, 34, 21, 0.5);
            /*text-shadow: 2px 2px 10px #b8f4b8;*/
            border-radius: 5px;
            color: #00f413;
            display: block;
            width: 100%;
            box-shadow: 0 0 25px 0 #03e9f4;
        }
    }
    .active{
        display: block;
        /*width: 100%;*/
        width: 10rem;
        position: absolute;
        top: 0.2rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        justify-content: space-between;
        align-content: stretch;
        align-self: center;
        .item{
            text-align: center;
        }
    }
    .iconfont {
        font-size: 2rem;
        transform: none;
        z-index: 99;
    }



</style>
