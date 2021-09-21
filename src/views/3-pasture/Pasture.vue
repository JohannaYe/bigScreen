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
              <dv-decoration-7 style="width: 300px; height: 30px">牧场级</dv-decoration-7>
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
          <dv-border-box-1> <Numcl :msg="currentNumcl"></Numcl></dv-border-box-1>
        </div>
        <div
          class="layout layout-left-center1"
          :class="fullScreenStatus.Dailyre ? 'fullscreen' : ''"
        >
          <dv-border-box-13>
            <Plan1 :msg="currentPlan1"></Plan1>
          </dv-border-box-13>
        </div>
        <div
          class="layout layout-left-center2"
          :class="fullScreenStatus.Dailyre ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <Plan2 :msg="currentPlan2"></Plan2>
            </div>
          </div>
        </div>
        <div
          class="layout layout-left-center3"
          :class="fullScreenStatus.Dailyre ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <Plan3 :msg="currentPlan3"></Plan3>
            </div>
          </div>
        </div>
        <div class="layout layout-center-bottom">
          <BDmap v-on:getname="getname"></BDmap>
        </div>
        <div
          class="layout layout-right-top"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <div class="panel">
            <div class="chart" dg-chart-widget="">
              <div class="div1">
                <Sex ref="Sex" :msg="currentSex"></Sex>
              </div>
              <div class="div2">
                <Age ref="Age" :msg="currentAge"></Age>
              </div>
            </div>
          </div>
        </div>
        <div
          class="layout layout-right-bottom"
          :class="fullScreenStatus.Variety ? 'fullscreen' : ''"
        >
          <dv-border-box-12>
            <Variety ref="Variety" :msg="currentVariety"></Variety>
          </dv-border-box-12>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Sex from "./childComps/Sex";
import Age from "./childComps/Age";
import Variety from "./childComps/Variety";
import Numcl from "./childComps/Numcl";
import Plan1 from "./childComps/Plan1";
import Plan2 from "./childComps/Plan2";
import Plan3 from "./childComps/Plan3";
import BDmap from "@/components/BDmap";

export default {
  components: {
    Sex,
    Age,
    Variety,
    Numcl,
    Plan1,
    Plan2,
    Plan3,
    BDmap,
  },
  props: {},
  data() {
    return {
      fullScreenStatus: {},
      allData: null,
      currentData: null,
      currentName: "",
      currentAge: [],
      currentSex: [],
      currentVariety: [],
      currentPlan1: [],
      currentPlan2: [],
      currentPlan3: {},
      currentNumcl: 0,
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
      const { data: ret } = await this.$http.get("pasture");
      this.allData = ret;
      this.currentData = this.allData[0];
      this.currentName = this.allData[0].name;
      this.currentAge = this.currentData.data.age;
      this.currentSex = this.currentData.data.sex;
      this.currentVariety = this.currentData.data.variety;
      this.currentPlan1 = this.currentData.data.plan1;
      this.currentPlan2 = this.currentData.data.plan2;
      this.currentPlan3 = this.currentData.data.plan3;
      this.currentNumcl = this.currentData.data.numcl;
    },
    getname(val1) {
      console.log(val1);
      this.currentName = val1;
      this.currentData = this.allData.find((item) => item.name === this.currentName);
      this.currentSex = this.currentData.data.sex;
      this.currentAge = this.currentData.data.age;
      this.currentVariety = this.currentData.data.variety;
      this.currentPlan1 = this.currentData.data.plan1;
      this.currentPlan2 = this.currentData.data.plan2;
      this.currentPlan3 = this.currentData.data.plan3;
      this.currentNumcl = this.currentData.data.numcl;
    },
  },
  created() {
    this.getData();
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
  flex: 1;
}
.div2 {
  flex: 1;
}
.dv-border-box-3 {
  position: absolute;
  left: 0.2rem;
  top: 0.4rem;
  right: 0.2rem;
  bottom: 1rem;
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
.layout-left-top {
  width: 25%;
  left: 0;
  top: 0;
  height: 16%;
}
.layout-left-center1 {
  width: 25%;
  left: 0;
  top: 16%;
  height: 27%;
}
.layout-left-center2 {
  width: 25%;
  left: 0;
  top: 42%;
  height: 27%;
}
.layout-left-center3 {
  width: 25%;
  left: 0;
  top: 67%;
  height: 33%;
  bottom: 0;
}
.layout-center-bottom {
  width: 43%;
  top: 5%;
  left: 26%;
  right: 70%;
  bottom: 3%;
}
.layout-right-top {
  width: 30%;
  top: 0;
  right: 0;
  height: 50%;
}
/* .layout-right-center {
  top: 33.3%;
  right: 0;
  height: 33.3%;
} */
.layout-right-bottom {
  width: 30%;
  top: 50%;
  right: 0;
  bottom: 0;
  height: 50%;
}
.panel {
  position: absolute;
  left: 0.2rem;
  top: 0.5rem;
  right: 0.2rem;
  bottom: 0.5rem;
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
  color: rgb(221, 241, 253);
}
.panel .chart {
  position: absolute;
  top: 1rem;
  right: 0.3rem;
  bottom: 0.3rem;
  left: 0.3rem;
}
</style>
