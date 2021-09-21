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
              <dv-decoration-7 style="width: 300px; height: 30px"
                >疫情监测</dv-decoration-7
              >
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
        <div class="layout layout-left-top1">
          <div class="panel">
            <div class="title">疫情总体情况</div>
            <div class="chart chart-center" dg-chart-widget="">
              <div class="div1"><Num11 :msg="currentNum11"></Num11></div>
              <div class="div1"><Num22 :msg="currentNum22"></Num22></div>
              <div class="div1"><Num33 :msg="currentNum33"></Num33></div>
              <div class="div1"><Num44 :msg="currentNum44"></Num44></div>
            </div>
          </div>
        </div>
        <div class="layout layout-left-top2">
          <div class="panel">
            <div class="chart chart-center" dg-chart-widget="">
              <div class="div1"><Rate1 :msg="currentRate1"></Rate1></div>
              <div class="div1"><Rate2 :msg="currentRate2"></Rate2></div>
              <div class="div1"><Rate3 :msg="currentRate3"></Rate3></div>
            </div>
          </div>
        </div>
        <div
          class="layout layout-left-center"
          :class="fullScreenStatus.Dailyre ? 'fullscreen' : ''"
        >
          <div class="panel">
            <Trend :msg="currentTrend"></Trend>
          </div>
        </div>
        <div class="layout layout-left-bottom">
          <div class="panel">
            <Table1 :msg="currentTable1"></Table1>
          </div>
        </div>
        <div class="layout layout-center-top1">
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div1"><Num1 :msg="currentNum1"></Num1></div>
              <div class="div1"><Num2 :msg="currentNum2"></Num2></div>
              <div class="div1"><Num3 :msg="currentNum3"></Num3></div>
              <div class="div1"><Num4 :msg="currentNum4"></Num4></div>
            </div>
          </div>
        </div>
        <div class="layout layout-center-top2">
          <div class="panel swiper_panel">
            <div class="chart" dg-chart-widget="">
              <div class="div2" style="text-align: center">
                <p>防疫前线</p>
                <img src="~@/assets/swiper/ox/5.jpg" />
              </div>
              <div class="div3"><Aswiper /></div>
            </div>
          </div>
        </div>
        <div class="layout layout-center-bottom">
          <div class="panel">
            <Map></Map>
          </div>
        </div>
        <div
          class="layout layout-right-top"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="title">防疫情况</div>
            <div class="chart" dg-chart-widget="">
              <div class="div8"><Data11></Data11></div>
              <div class="div8"><Data22 :msg="currentData22"></Data22></div>
              <div class="div9"><Data33></Data33></div>
            </div>
          </div>
        </div>
        <div class="layout layout-right-bottom1">
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div6">物资名称</div>
              <div class="div7">总数</div>
              <div class="div7">已发出</div>
              <div class="div7">剩余</div>
            </div>
          </div>
        </div>
        <div class="layout layout-right-bottom2">
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div4"><Data1></Data1></div>
              <div class="div5"><Data2 :msg="currentData2"></Data2></div>
              <div class="div5"><Data3 :msg="currentData3"></Data3></div>
              <div class="div5"><Data4 :msg="currentData4"></Data4></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Table1 from "./childComps/Table1";
import Num1 from "./childComps/Num1";
import Num2 from "./childComps/Num2";
import Num3 from "./childComps/Num3";
import Num4 from "./childComps/Num4";
import Num11 from "./childComps/Num11";
import Num22 from "./childComps/Num22";
import Num33 from "./childComps/Num33";
import Num44 from "./childComps/Num44";
import Rate1 from "./childComps/Rate1";
import Rate2 from "./childComps/Rate2";
import Rate3 from "./childComps/Rate3";
import Trend from "./childComps/Trend";
import Aswiper from "./childComps/Aswiper";
import Data1 from "./childComps/Data1";
import Data2 from "./childComps/Data2";
import Data3 from "./childComps/Data3";
import Data4 from "./childComps/Data4";
import Data11 from "./childComps/Data11";
import Data22 from "./childComps/Data22";
import Data33 from "./childComps/Data33";
import Map from "./childComps/Map";

export default {
  components: {
    Table1,
    Num1,
    Num2,
    Num3,
    Num4,
    Num11,
    Num22,
    Num33,
    Num44,
    Rate1,
    Rate2,
    Rate3,
    Trend,
    Aswiper,
    Data1,
    Data2,
    Data3,
    Data4,
    Data11,
    Data22,
    Data33,
    Map,
  },
  props: {},
  data() {
    return {
      fullScreenStatus: {},
      allData: null,
      currentData: null,
      currentName: "",
      currentData22: {},
      currentData2: {},
      currentData3: {},
      currentData4: {},
      currentNum1: 0,
      currentNum2: 0,
      currentNum3: 0,
      currentNum4: 0,
      currentNum11: 0,
      currentNum22: 0,
      currentNum33: 0,
      currentNum44: 0,
      currentRate1: 0,
      currentRate2: 0,
      currentRate3: 0,
      currentTrend: [],
      currentTable1: [],
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
      const { data: ret } = await this.$http.get("aes");
      this.allData = ret;
      this.currentData2 = this.allData.data2;
      this.currentData3 = this.allData.data3;
      this.currentData4 = this.allData.data4;
      this.currentData22 = this.allData.data22;
      this.currentNum1 = this.allData.num1;
      this.currentNum2 = this.allData.num2;
      this.currentNum3 = this.allData.num3;
      this.currentNum4 = this.allData.num4;
      this.currentNum11 = this.allData.num11;
      this.currentNum22 = this.allData.num22;
      this.currentNum33 = this.allData.num33;
      this.currentNum44 = this.allData.num44;
      this.currentRate1 = this.allData.rate1;
      this.currentRate2 = this.allData.rate2;
      this.currentRate3 = this.allData.rate3;
      this.currentTable1 = this.allData.table1;
      this.currentTrend = this.allData.trend;
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
.chart {
  display: flex;
}
.div1 {
  flex: 1;
}
.div2 {
  width: 30%;
}
.div3 {
  width: 70%;
}
.div4 {
  text-align: center;
  width: 34%;
}
.div6 {
  margin-top: -2%;
  font-size: 25px;
  color: #ffeb7b;
  font-family: electronicFont;
  text-align: center;
  width: 34%;
}
.div7 {
  margin-top: -2%;
  font-size: 25px;
  color: #ffeb7b;
  font-family: electronicFont;
  text-align: center;
  width: 22%;
}
.div5 {
  text-align: center;
  width: 22%;
}
.div8 {
  text-align: center;
  width: 40%;
}
.div9 {
  text-align: center;
  width: 20%;
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
.layout-left-top1 {
  width: 30%;
  left: 0;
  top: 0;
  height: 15%;
}
.layout-left-top2 {
  width: 30%;
  left: 0;
  top: 15%;
  height: 25%;
}
.layout-left-center {
  width: 30%;
  left: 0;
  top: 40%;
  height: 30%;
}
.layout-left-bottom {
  width: 30%;
  left: 0;
  top: 70%;
  height: 30%;
}
.layout-center-top1 {
  width: 45%;
  top: 0;
  left: 30%;
  right: 70%;
  height: 10%;
  bottom: 0;
}
.layout-center-top2 {
  width: 45%;
  top: 10%;
  left: 30%;
  right: 70%;
  height: 25%;
  bottom: 0;
}
.layout-center-bottom {
  width: 45%;
  top: 35%;
  left: 30%;
  right: 70%;
  bottom: 0;
}
.layout-right-top {
  width: 25%;
  top: 0;
  right: 0;
  height: 50%;
}
.layout-right-bottom1 {
  width: 25%;
  top: 50%;
  right: 0;
  height: 8%;
}
.layout-right-bottom2 {
  width: 25%;
  top: 58%;
  right: 0;
  bottom: 0;
  height: 42%;
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
  background-color: #0a60ff;
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
