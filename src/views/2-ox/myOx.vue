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
                <div class="layout layout-left-top">
                    <dv-border-box-1><Cow3d></Cow3d></dv-border-box-1>
                </div>
                <div class="layout layout-left-center">
                    <dv-border-box-2 :color="['silver', 'green']"><newmap3></newmap3></dv-border-box-2>
                </div>
                <div class="layout layout-left-bottom">
                    <dv-border-box-2 :color="['silver', 'green']">
<!--                        <alarm-notice></alarm-notice>-->
                    </dv-border-box-2>
                </div>
            </div>
            <div class="layout layout-right">
                <div class="layout layout-right-top">
                    <dv-border-box-2 :color="['silver', 'green']">  <CarouselTable></CarouselTable></dv-border-box-2>
                </div>
                <div class="layout layout-right-center">
                    <!--                        <div class="title">-->
                    <!--                            单个牛只信息显示-->
                    <!--                            <input v-model="message" placeholder="请输入耳标号" />-->
                    <!--                            <button type="button" @click="select()">Select</button>-->
                    <!--                        </div>-->
                    <div class="chart" dg-chart-widget="">
                        <dv-border-box-2 :color="['silver', 'green']"><OxMessage ></OxMessage></dv-border-box-2>
                    </div>

                    <!--                    <div class="layout layout-right-center1"></div>-->
                    <!--                    <div class="layout layout-right-center2"></div>-->
                    <!--                    <div class="layout layout-right-center3"></div>-->
                    <!--                    <div class="layout layout-right-center4"></div>-->
                </div>
                <div class="layout layout-right-bottom">
                    <div class="layout layout-right-bottom1">
                        <dv-border-box-13><mytable></mytable></dv-border-box-13>
                    </div>
                    <div class="layout layout-right-bottom2">
                        <dv-border-box-13><mycurve></mycurve></dv-border-box-13>
                    </div>
                </div>
            </div>
        </div>

        <!--        </body>-->
    </div>
</template>

<script>
    import CarouselTable from "./child/CarouselTable";
    import mytable from "./child/mytable";
    // import JDate from "../3-pasture/child/JDate.vue";
    import Cow3d from "./child/Cow3d";
    import OxMessage from "./childComps/OxMessage";
    import newmap3  from "../../components/newmap3";
    import AlarmNotice from "./child/AlarmNotice";
    import mycurve from "./child/curve";
    import ScreenMixin from "../../mixins/ScreenMixin";
    export default {
        components: {
            mytable,
            mycurve,
            CarouselTable,
            Cow3d,
            // JDate,
            OxMessage,
            newmap3,
            // AlarmNotice,
        },
        name: "MyOx",
        mixins:[ScreenMixin],
        data(){
          return {
              msg: {
                  topic: 'ox',
                  params: {
                      pastureId: this.$store.state.pastureId,
                      earId: this.$store.state.earId,
                  }
              },
          }
        },
        watch:{
            earId(){
                this.msg.params.earId = this.$store.state.earId
            }
        },
        computed:{
          earId(){
              return this.$store.state.earId
          }
        },
        methods: {},
        created() {

        },mounted() {
            this.$store.commit('setData','牛级')
        }

    };
</script>

<style scoped>
    body {
        color: #fff;
        margin: 0 0;
        padding: 0 0;
        background: url(~@/assets/2images/bg.png);
    }
    .chart{
        left: 0.3%;
        top: 0.3%;
        width: 99.4%;
        height: 99.4%;
        position: absolute;
    }
    .fill-parent {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    /*div {*/
    /*    border: 1px solid red;*/
    /*}*/
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
        top: 0%;
        left: 0%;
        width: 25%;
        height: 100%;
    }
    .layout-right {
        top: 0;
        left: 25%;
        width: 75%;
        height: 100%;
    }
    .layout-left-top {
        height: 33%;
        width: 100%;
    }
    .layout-left-center {
        top: 33%;
        height: 33%;
        width: 100%;
    }
    .layout-left-bottom {
        top: 66%;
        height: 33%;
        width: 100%;
    }
    .layout-right-top {
        height: 33%;
        width: 100%;
    }
    .layout-right-center {
        top: 33%;
        height: 33%;
        width: 100%;
    }
    .layout-right-center1 {
        height: 100%;
        width: 30%;
    }
    .layout-right-center2 {
        left: 30%;
        height: 100%;
        width: 20%;
    }
    .layout-right-center3 {
        left: 50%;
        height: 100%;
        width: 20%;
    }
    .layout-right-center4 {
        left: 70%;
        height: 100%;
        width: 30%;
    }
    .layout-right-bottom {
        top: 66%;
        height: 33%;
        width: 100%;
    }
    .layout-right-bottom1 {
        left: 50%;
        height: 100%;
        width: 50%;
    }
    .layout-right-bottom2 {
        left: 0;
        height: 100%;
        width: 50%;
        overflow: hidden;
    }
</style>
