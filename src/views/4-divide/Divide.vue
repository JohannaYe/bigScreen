<template>
  <div>
    <body
      class="fill-parent"
      dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
      dg-chart-auto-resize="true"
      dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#0d1e5c'}"
    >
      <div class="head">
        <div class="title total">
          <div class="title1">
            <div class="ox_name">
              <dv-decoration-11 style="width: 400px; height: 60px"
                >赤峰市牛业决策指挥中心</dv-decoration-11
              >
            </div>
            <dv-decoration-10 style="width: 90%; height: 5px" />
          </div>
          <div class="title2">
            <div class="title-value">
              <dv-decoration-7 style="width: 300px; height: 30px">分群级</dv-decoration-7>
              <dv-decoration-5 class="dvt" style="width: 300px; height: 40px" />
            </div>
          </div>
          <div class="title3">
            <div class="ox_right"></div>
            <dv-decoration-10 style="width: 90%; height: 5px" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="layout layout-left-top">
          <div class="panel swiper_panel">
            <div class="swiper_content">
              <DivideSwiper></DivideSwiper>
            </div>
          </div>
        </div>
        <div class="layout layout-left-right">
          <div class="panel border-all">
            <div class="chart" dg-chart-widget="">
              <WeightGain :msg="currentGain"></WeightGain>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-left-center">
          <div class="panel border-all">
            <div class="title">牛只汇总表</div>
            <div class="chart" dg-chart-widget="">
              <Summary :msg="currentMessage"></Summary>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-center-top">
          <div class="panel border-all">
            <div class="title">
              牧场地图
              <!-- <button @click="change()">切换</button> -->
            </div>
            <div class="chart" dg-chart-widget="">
              <BDmap v-on:getname="getname"></BDmap>
              <!-- <bmap v-show="this.isShow"></bmap>
              <gmap
                v-show="!this.isShow"
                v-on:getname="getname"
                :msg="currentData"
              ></gmap> -->
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-center-bottom">
          <div class="panel border-all">
            <div class="title">牛只信息</div>
            <div class="chart" dg-chart-widget="">
              <message :msg="currentOx"></message>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Summary from "./childComps/Summary";
import DivideSwiper from "./childComps/DivideSwiper";
import Message from "./childComps/Message.vue";
// import bmap from "../demo/demo1";
// import gmap from "../../common/map/MapChart";
import WeightGain from "./childComps/WeightGain";
import BDmap from "../../components/BDmap";
export default {
  components: {
    Summary,
    DivideSwiper,
    Message,
    // bmap,
    // gmap,
    WeightGain,
    BDmap,
  },
  props: {},
  data() {
    return {
      isShow: false,
      allData: null,
      currentData: null,
      currentName: "",
      currentMessage: [],
      currentOx: {},
      currentGain: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("divide");
      this.allData = ret;
      this.currentData = this.allData[0];
      this.currentName = this.allData[0].name;
      this.currentMessage = this.currentData.data.message;
      this.currentOx = this.currentMessage[0];
      this.currentGain = this.currentData.data.gain;
    },
    getname(val1) {
      console.log(val1);
      this.currentName = val1;
      this.currentData = this.allData.find((item) => item.name === this.currentName);
      this.currentMessage = this.currentData.data.message;
      this.currentOx = this.currentMessage[0];
      this.currentGain = this.currentData.data.gain;
    },
    change() {
      this.isShow = !this.isShow;
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>
<style scoped>
.swiper_panel {
  overflow: hidden;
}
.total {
  display: flex;
}
.title1 {
  flex: 2;
}
.title2 {
  flex: 1;
}
.title3 {
  flex: 2;
}
.ox_name {
  margin-top: 5px;
  margin-left: 150px;
  height: 60px;
  top: 20%;
  /* background-color: #fff; */
}
.ox_right {
  height: 65px;
}
.chart::after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1rem;
  margin-left: -1rem;
  opacity: 0.8;
}
body {
  color: #fff;
  background: url(~@/assets/2images/bg.png);
  margin: 0 0;
  padding: 0 0;
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
.head .title {
  font-size: 1.8rem;
  text-align: center;
  padding-top: 0.2em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.head .title .title-left {
  background: url(~@/assets/1images/title-bg-left.png) no-repeat center center;
  display: inline-block;
  width: 25%;
  height: 3rem;
}
.head .title .title-value {
  display: inline-block;
  line-height: 3rem;
  vertical-align: top;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.head .title .title-right {
  background: url(~@/assets/1images/title-bg-right.png) no-repeat center center;
  display: inline-block;
  width: 25%;
  height: 3rem;
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
  width: 33.33%;
}
.layout-left-top {
  left: 0;
  top: 0;
  height: 50%;
  width: 30%;
}
.layout-left-right {
  left: 30%;
  top: 0;
  height: 50%;
  width: 10%;
}
.layout-left-center {
  left: 0;
  top: 50%;
  height: 50%;
  width: 40%;
}
.layout-center-top {
  top: 0;
  left: 40%;
  width: 60%;
  height: 50%;
}
.layout-center-bottom {
  top: 50%;
  left: 40%;
  width: 60%;
  bottom: 0;
}
/* .layout-right-top {
  top: 0;
  right: 0;
  height: 66.6%;
}
.layout-right-bottom {
  top: 66.6%;
  right: 0;
  bottom: 0;
} */
.panel {
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  right: 0.5rem;
  bottom: 1em;
  border: 1px solid #2c58a6;
  box-shadow: 0px 0px 6px #2c58a6;
}
.panel.border-left-top:before,
.panel.border-all:before {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-top: 6px solid #4788fb;
  border-left: 6px solid #4788fb;
  left: -3px;
  top: -3px;
}
.panel.border-right-top:after,
.panel.border-all:after {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-top: 6px solid #4788fb;
  border-right: 6px solid #4788fb;
  right: -3px;
  top: -3px;
}
.panel.border-left-bottom .border-foot:before,
.panel.border-all .border-foot:before {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-bottom: 6px solid #4788fb;
  border-left: 6px solid #4788fb;
  left: -3px;
  bottom: -3px;
}
.panel.border-right-bottom .border-foot:after,
.panel.border-all .border-foot:after {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-bottom: 6px solid #4788fb;
  border-right: 6px solid #4788fb;
  right: -3px;
  bottom: -3px;
}
.panel > .title {
  position: absolute;
  top: -0.9rem;
  right: 20%;
  left: 20%;
  border-radius: 18px;
  line-height: 1.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  background-color: #2c58a6;
  color: #fff;
}
.panel .chart {
  position: absolute;
  top: 1rem;
  right: 0.3rem;
  bottom: 0.3rem;
  left: 0.3rem;
  overflow: hidden;
}
</style>
