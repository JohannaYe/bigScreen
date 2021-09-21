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
<!--              <dv-decoration-11 style="width: 400px; height: 60px"-->
<!--                >赤峰市牛业决策指挥中心</dv-decoration-11-->
<!--              >-->
            </div>
            <dv-decoration-10 style="width: 90%; height: 5px" />
          </div>
          <div class="title2">
            <div class="title-value">
<!--              <dv-decoration-7 style="width: 300px; height: 30px">溯源</dv-decoration-7>-->
<!--              <dv-decoration-5 class="dvt" style="width: 300px; height: 40px" />-->
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
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div1">
                <Data1></Data1>
              </div>
              <div class="div1">
                <Data2 :msg="currentData2"></Data2>
              </div>
              <div class="div2">
                <Data3></Data3>
              </div>
            </div>
          </div>
        </div>
        <div
          class="layout layout-left-center"
          :class="fullScreenStatus.Dailyre ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <Repurchase :msg="currentRepurchase"></Repurchase>
            </div>
          </div>
        </div>
        <div class="layout layout-left-bottom">
          <div class="panel">
            <Price :msg="currentPrice"></Price>
          </div>
        </div>
        <div class="layout layout-center-top">
          <div class="panel">
            <Map></Map>
          </div>
        </div>
        <div class="layout layout-center-bottom">
          <div class="panel">
            <Consumerportrait :msg="currentConsumerportrait"></Consumerportrait>
          </div>
        </div>
        <div
          class="layout layout-right-top1"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div3">
                <QRcode1></QRcode1>
              </div>
              <div class="div3">
                <img src="~@/assets/code/qcode.png" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="layout layout-right-top2"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div3">
                <Scannum1 :msg="this.currentScannum1"></Scannum1>
              </div>
              <div class="div3">
                <Scannum2 :msg="this.currentScannum2"></Scannum2>
              </div>
            </div>
          </div>
        </div>
        <div
          class="layout layout-right-center"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="title"></div>
            <div class="chart" dg-chart-widget="">
              <Info :msg="currentInfo"></Info>
            </div>
          </div>
        </div>
        <div
          class="layout layout-right-bottom"
          :class="fullScreenStatus.Areaspread ? 'fullscreen' : ''"
        >
          <dv-border-box-12>
            <Areaspread ref="Areaspread" :msg="currentAreaspread"></Areaspread>
          </dv-border-box-12>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Scannum1 from "./childComps/Scannum1";
import Scannum2 from "./childComps/Scannum2";
import QRcode1 from "./childComps/QRcode1";
import Data1 from "./childComps/Data1";
import Data2 from "./childComps/Data2";
import Data3 from "./childComps/Data3";
import Repurchase from "./childComps/Repurchase";
import Areaspread from "./childComps/Areaspread";
import Consumerportrait from "./childComps/Consumerportrait";
import Info from "./childComps/Info";
import Price from "./childComps/Price";
import Map from "./childComps/Map";

export default {
  components: {
    Scannum1,
    Scannum2,
    QRcode1,
    Data1,
    Data2,
    Data3,
    Repurchase,
    Areaspread,
    Consumerportrait,
    Info,
    Price,
    Map,
  },
  props: {},
  data() {
    return {
      fullScreenStatus: {
        Areaspread: false,
      },
      allData: null,
      currentData: null,
      currentName: "",
      currentData2: {},
      currentRepurchase: 0,
      currentScannum1: 0,
      currentScannum2: 0,
      currentInfo: [],
      currentConsumerportrait: [],
      currentAreaspread: [],
      currentPrice: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeSize(chartName) {
      this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName];
      this.$nextTick(() => {
        this.$refs[chartName].screenAdapter();
      });
    },
    async getData() {
      const { data: ret } = await this.$http.get("trace");
      this.allData = ret;
      this.currentData2 = this.allData.data2;
      this.currentRepurchase = this.allData.repurchase;
      this.currentScannum1 = this.allData.scannum1;
      this.currentScannum2 = this.allData.scannum2;
      this.currentInfo = this.allData.info;
      this.currentConsumerportrait = this.allData.consumerportrait;
      this.currentAreaspread = this.allData.areaspread;
      this.currentPrice = this.allData.price;
    },
  },
  created() {
    this.getData();
    this.$store.commit('setData','溯源级')
  },
  mounted() {},
};
</script>
<style scoped>
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
.chart {
  display: flex;
}
.div1 {
  width: 40%;
}
.div2 {
  width: 20%;
}
.div3 {
  flex: 1;
}
.dv-border-box-5 {
  width: 100%;
  left: 0;
  margin-top: 0%;
  height: 100%;
}
.panel0 .chart0 {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  bottom: 0.3rem;
  left: 0.3rem;
}
.panel0 {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  right: 0.5rem;
  bottom: 0.5em;
}
.layout-left-top .panel0 .chart0 {
  width: 100%;
  height: 100%;
  background: url(~@/assets/1images/chart-bg-0.png) no-repeat center center;
  background-size: 100% 100%;
}
.layout-left-top .panel0 .chart-center {
  left: 0;
}
.chart {
  display: flex;
}
.resize {
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
}
.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 100;
  background: #101736 !important;
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
.div {
  position: absolute;
  width: 33.33%;
}
.layout-left-top {
  width: 25%;
  left: 0;
  top: 0;
  height: 33.33%;
}
.layout-left-center {
  width: 25%;
  left: 0;
  top: 33.33%;
  height: 33.33%;
}
.div-left-bottom {
  width: 25%;
  left: 0;
  top: 66.66%;
  height: 33.33%;
}
.layout-left-bottom {
  width: 25%;
  left: 0;
  top: 66.66%;
  height: 33.33%;
}
.layout-center-top {
  width: 45%;
  top: 0;
  left: 25%;
  right: 70%;
  height: 75%;
  bottom: 0;
}
.layout-center-bottom {
  width: 45%;
  top: 75%;
  left: 25%;
  right: 70%;
  bottom: 0;
}
.layout-right-top1 {
  width: 30%;
  top: 0;
  right: 0;
  height: 27.5%;
}
.layout-right-top2 {
  width: 30%;
  top: 27.5%;
  right: 0;
  height: 10%;
}
.layout-right-center {
  width: 30%;
  top: 37.5%;
  right: 0;
  height: 37.5%;
}
.layout-right-bottom {
  width: 30%;
  top: 75%;
  right: 0;
  bottom: 0;
}
.panel {
  position: absolute;
  left: 0.2rem;
  top: 0.1rem;
  right: 0.2rem;
  bottom: 0.1em;
  border: 1px solid #2c58a6;
  box-shadow: 0px 0px 6px #2c58a6;
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
}
</style>
