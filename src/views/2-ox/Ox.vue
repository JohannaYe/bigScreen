<template>
  <div>
    <body
      class="fill-parent"
      dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
      dg-chart-auto-resize="true"
      dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#141c47'}"
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
              <dv-decoration-7 style="width: 300px; height: 30px">牛级</dv-decoration-7>
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
          <div class="panel">
            <div>
              <OxSwiper></OxSwiper>
            </div>
          </div>
        </div>
        <div class="layout layout-left-center">
          <div class="panel border-all">
            <div class="title map-title">牧场地图</div>
            <div class="chart" dg-chart-widget="">
              <BDmap v-on:getname="getname"></BDmap>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-center-top">
          <div class="panel border-all">
            <div class="title">牛只信息</div>
            <div class="chart" dg-chart-widget="">
              <Task :msg="currentMessage" v-on:getCurrentData="getCurrentData"></Task>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-center-center">
          <div class="panel border-all">
            <div class="title">
              单个牛只信息显示
              <input v-model="message" placeholder="请输入耳标号" />
              <button type="button" @click="select()">搜索</button>
            </div>
            <div class="chart" dg-chart-widget="">
              <OxMessage :msg="findMessage"></OxMessage>
            </div>
          </div>
        </div>
        <div
          class="layout layout-center-bottom"
          :class="fullScreenStatus.GrowthIndex ? 'fullscreen' : ''"
        >
          <div class="panel border-all">
            <div class="title map-title">
              生长指标
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.GrowthIndex
                      ? 'icon-compress-alt'
                      : 'icon-expand-alt',
                  ]"
                  @click="changeSize('GrowthIndex')"
                ></span>
              </div>
            </div>
            <div class="chart" dg-chart-widget="">
              <GrowthIndex :msg="findMessage.index"></GrowthIndex>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-right-bottom"
          :class="fullScreenStatus.DiseaseHealth ? 'fullscreen' : ''"
        >
          <div class="panel border-all">
            <div class="title map-title">
              疾病健康
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.DiseaseHealth
                      ? 'icon-compress-alt'
                      : 'icon-expand-alt',
                  ]"
                  @click="changeSize('DiseaseHealth')"
                ></span>
              </div>
            </div>
            <div class="chart" dg-chart-widget="">
              <DiseaseHealth :msg="findMessage.disesase"></DiseaseHealth>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Task from "./childComps/Task";
import GrowthIndex from "./childComps/GrowthIndex";
import DiseaseHealth from "./childComps/DiseaseHealth";
import OxSwiper from "./childComps/OxSwiper.vue";
import OxMessage from "./childComps/OxMessage";
// import OxMap from "./childComps/OxMap";
// import bmap from "../demo/demo1";
// import gmap from "../../common/map/MapChart";
import BDmap from "../../components/BDmap";
export default {
  components: {
    Task,
    GrowthIndex,
    DiseaseHealth,
    OxSwiper,
    OxMessage,
    // gmap,
    BDmap,
    // OxMap,
  },
  props: {},
  data() {
    return {
      fullScreenStatus: {
        GrowthIndex: false,
        DiseaseHealth: false,
      },
      isShow: false,
      allData: null,
      currentData: null,
      currentName: "",
      currentMessage: [],
      findMessage: {},
      message: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeSize(chartName) {
      this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName];
      // this.$nextTick(() => {
      //   this.$refs[chartName].screenAdapter();
      // });
    },
    async getData() {
      const { data: ret } = await this.$http.get("ox");
      this.allData = ret;
      this.currentData = this.allData[0];
      this.currentName = this.allData[0].name;
      this.currentMessage = this.currentData.data.message;
      this.findMessage = this.currentMessage[0];
      console.log(this.findMessage);
    },
    getname(val1) {
      console.log(val1);
      this.currentName = val1;
      this.currentData = this.allData.find((item) => item.name === this.currentName);
      this.currentMessage = this.currentData.data.message;
      this.findMessage = this.currentMessage[0];
    },
    getCurrentData(val2) {
      const text = this.findMessage;
      this.findMessage = this.currentMessage.find((item) => item.id === val2.row[0]);
      if (this.findMessage == null) {
        this.findMessage = text;
      }
    },
    select() {
      const text = this.findMessage;
      this.findMessage = this.currentMessage.find((item) => item.id === this.message);
      if (this.findMessage == null) {
        this.findMessage = text;
      }
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>

<style scoped>
.map-title {
  text-align: center;
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
.select {
  display: inline-block;
}
.resize {
  position: absolute;
  right: 20px;
  top: 0px;
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
  font-size: 35px;
}
body::after {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.chart::after {
  /* content: "图表"; */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -1rem;
  margin-left: -1rem;
  opacity: 0.8;
}
body {
  color: #fff;
  margin: 0 0;
  padding: 0 0;
  background: url(~@/assets/2images/bg.png);
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
/* .head .title .title-left {
  background: url(~@/assets/1images/title-bg-left.png) no-repeat center center;
  display: inline-block;
  width: 25%;
  height: 3rem;
} */
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
  width: 25%;
}
.layout-left-top {
  left: 0;
  top: 0;
  height: 33.33%;
  overflow: hidden;
}
.layout-left-center {
  left: 0;
  top: 33.33%;
  height: 66.66%;
}
.layout-center-top {
  top: 0;
  left: 25%;
  right: 5%;
  width: 75%;
  height: 30%;
}
.layout-center-center {
  top: 27%;
  left: 25%;
  right: 5%;
  width: 75%;
  height: 40%;
}
.layout-center-bottom {
  top: 65%;
  left: 25%;
  right: 25%;
  bottom: 0;
  width: 35%;
}
.layout-right-bottom {
  top: 65%;
  right: 0;
  bottom: 0;
  width: 40%;
}
.panel {
  position: absolute;
  left: 0.5rem;
  top: 0.8rem;
  right: 0.5rem;
  bottom: 0.8rem;
  border: 1px solid #20558b;
  -webkit-box-shadow: #07417a 0 0 10px;
  -moz-box-shadow: #07417a 0 0 10px;
  box-shadow: inset 0 0 30px #07417a;
}
.panel.border-left-top:before,
.panel.border-all:before {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-top: 3px solid #488aff;
  border-left: 3px solid #488aff;
  left: -1px;
  top: -1px;
}
.panel.border-right-top:after,
.panel.border-all:after {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-top: 3px solid #488aff;
  border-right: 3px solid #488aff;
  right: -1px;
  top: -1px;
}
.panel.border-left-bottom .border-foot:before,
.panel.border-all .border-foot:before {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-bottom: 3px solid #488aff;
  border-left: 3px solid #488aff;
  left: -1px;
  bottom: -1px;
}
.panel.border-right-bottom .border-foot:after,
.panel.border-all .border-foot:after {
  position: absolute;
  width: 1rem;
  height: 1rem;
  content: "";
  border-bottom: 3px solid #488aff;
  border-right: 3px solid #488aff;
  right: -1px;
  bottom: -1px;
}
.panel > .title {
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
  left: 0.5rem;
  line-height: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.panel.title-bg > .title {
  position: absolute;
  top: -0.8rem;
  right: 20%;
  left: 20%;
  text-align: center;
  color: #fff;
  background: url(~@/assets/2images/title-bg.png);
  background-size: 100% 100%;
}
.panel .chart {
  position: absolute;
  top: 2rem;
  right: 0.3rem;
  bottom: 0.3rem;
  left: 0.3rem;
  overflow: hidden;
}
.panel.title-bg .chart {
  top: 1.4rem;
}
.layout-center-bottom .panel {
  background-image: -webkit-radial-gradient(
    250px 250px at 50% 50%,
    hsla(209, 99%, 32%, 28),
    hsla(228, 100%, 0%, 0)
  );
  /* background-image: radial-gradient(
    250px 250px at 50% 50%,
    hsla(209, 99%, 32%, 28),
    hsla(228, 100%, 0%, 0)
  ); */
}
</style>
