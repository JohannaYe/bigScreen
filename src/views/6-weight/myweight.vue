<template>
    <div>
<!--        <body-->
<!--                class="fill-parent"-->
<!--                dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"-->
<!--                dg-chart-auto-resize="true"-->
<!--                dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"-->
<!--        >-->
<!--        <div class="head"></div>-->
        <div class="content">
            <div class="layout layout-left">
                <dv-border-box-10 :color="['#2dffd5','#1471ff']"></dv-border-box-10>
                <div class="layout layout-left-top">
                    <dv-border-box-12 :color="['#3b1cff']"></dv-border-box-12>
                    <Rotation :slides="slides"></Rotation>
                </div>
                <div class="layout layout-left-center">
                    <dv-border-box-12 :color="['#3b1cff']"></dv-border-box-12>
                    <newmap3></newmap3>
                </div>
            </div>
            <div class="layout layout-right">
                <div class="layout layout-right-top">
                    <dv-border-box-10 :color="['#2dffd5','#1471ff']"></dv-border-box-10>
                    <div class="layout layout-right-top1">
                       <oxicon></oxicon>
                    </div>
                    <div class="layout layout-right-top2">
                        <Data :e="earnmark"></Data>
                    </div>
                </div>
                <div class="layout layout-right-center">
                    <dv-border-box-10 :color="['#2dffd5','#1471ff']"></dv-border-box-10>
                    <div class="layout layout-right-center1">
                        <dv-border-box-12 :color="['#3b1cff']"></dv-border-box-12>
                        <mylunbo @earn="earn"></mylunbo>
                    </div>
                    <div class="layout layout-right-center2">
                        <div class="layout layout-right-center2-top">
                            <dv-border-box-12 :color="['#3b1cff']"><weightcurve></weightcurve></dv-border-box-12>
                        </div>
                        <div class="layout layout-right-center2-bottom">
                            <div class="layout layout-right-center2-bottom1">
                                <dv-border-box-12 :color="['#ff00ff']"><weight-number></weight-number></dv-border-box-12>
                            </div>
                            <div class="layout layout-right-center2-bottom2">
                                <dv-border-box-12 :color="['#ff00ff']"><inday /></dv-border-box-12>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        </body>-->
    </div>
</template>

<script>
    import oxicon from "./childComps/oxicon";
    import Rotation from "../../components/Rotation";
    import newmap3 from "../../components/newmap3";
    import Data from "./child/Data"
    import mylunbo from "./child/mylunbo"
    import weightcurve from "./child/weightcurve";
    import inday from "./child/inday";
    import weightNumber from "./child/weightNumber";
    import ScreenMixin from "../../mixins/ScreenMixin";

    export default {
        name: "myweight",
        components:{
            inday,
            weightNumber,
            oxicon,
            newmap3,
            Rotation,
            Data,
            weightcurve,
            // inday,
            mylunbo
        },
        mixins: [ScreenMixin],
        data(){
            return {
                msg: {
                    topic: 'divide',
                    params: {
                        pastureId: this.$store.state.pastureId,
                        earId: this.$store.state.earId,
                    }
                },
                titleInday:'在场天数',
                titleWeight:'称重次数',
                numberInday:1,
                numberWeight:11,
                earnmark:'',
                slides: [
                    {
                        src: require("@/assets/swiper/ox/3.jpg"),
                        href: "@/assets/swiper/ox/3.jpg",
                        title: "cow1",
                    },
                    {
                        // src: "img/dog2.eceeaad6.jpg",
                        // href:'img/dog2.eceeaad6.jpg',
                        src: require("@/assets/swiper/ox/4.jpg"),
                        href: "@/assets/swiper/ox/4.jpg",
                        title: "cow2",
                    },
                ],
            }
        },
        created() {
            this.$store.commit('setData','称重级')
        },
        methods:{
            earn(e){
                console.log(e)
               this.earnmark=e
            }
        },
        watch:{
            earId(){
                this.msg.params.earId = this.$store.state.earId
                console.log(this.msg)
            }
        },
        computed:{
            earId(){
                return this.$store.state.earId
            }
        }
    }
</script>

<style scoped>
    body {
        color: #fff;
        margin: 0 0;
        padding: 0 0;
        /*background: url(~@/assets/2images/bg.png);*/
    }
    .fill-parent {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .head {
        height: 4rem;
    }
    .content {
        position: absolute;
        top: 4.5rem;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .layout {
        position: absolute;
    }
    .layout-left {
        top: 0;
        left: 0%;
        width: 29.5%;
        height: 100%;
        margin-right: 0.5%;
    }
    .layout-right{
        top: 0;
        left: 30%;
        width: 70%;
        height: 100%;
    }
    .layout-left-top {
        top: 0;
        left: 1%;
        width: 98%;
        height: 40%;
    }
    .layout-left-center {
        top: 40%;
        left: 1%;
        width: 98%;
        height: 60%;
    }
    .layout-right-top{
        top: 0;
        left: 0%;
        width: 100%;
        height: 60%;
    }
    .layout-right-top1{
        top: 0;
        left: 0%;
        width: 100%;
        height: 50%;
    }
    .layout-right-top2{
        top: 50%;
        left: 0%;
        width: 100%;
        height:50%;
    }
    .layout-right-center{
        top: 61%;
        left: 0%;
        width: 100%;
        height: 39%;
    }
    .layout-right-center1{
        top: 0%;
        left: 0%;
        width: 59%;
        height: 99%;
        margin: 0.5%;
    }
    .layout-right-center2{
        top: 0%;
        left: 60%;
        width: 40%;
        height: 100%;
    }
    .layout-right-center2-top{
        top: 0;
        left: 0%;
        width: 100%;
        height: 70%;
    }
    .layout-right-center2-bottom{
        top: 70%;
        left: 0%;
        width: 100%;
        height: 30%;
    }
    .layout-right-center2-bottom1{
        top: 0%;
        left: 0%;
        width: 50%;
        height: 100%;
    }
    .layout-right-center2-bottom2{
        top: 0%;
        left: 50%;
        width: 50%;
        height: 100%;
    }
</style>
