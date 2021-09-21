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
              <dv-decoration-7 style="width: 300px; height: 30px">地磅级</dv-decoration-7>
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
              <Wswiper></Wswiper>
            </div>
          </div>
        </div>
        <div class="layout layout-left-center">
          <div class="panel border-all title-bg">
            <div class="title">地图</div>
            <div class="chart" dg-chart-widget="">
              <BDmap v-on:getname="getname"></BDmap>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-center-top">
          <div class="panel border-all title-bg">
            <div class="title">最近一个月出场货品类目详情</div>
            <div class="chart" dg-chart-widget="">
              <Table :msg="currentTable" />
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-center-bottom"
          :class="fullScreenStatus.Surplus ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">当前每种货品剩余量</div>
            <div class="chart" dg-chart-widget="">
              <Surplus ref="Surplus" :msg="currentSurplus"></Surplus>
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.Surplus ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('Surplus')"
                ></span>
              </div>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-right-bottom"
          :class="fullScreenStatus.Mcategory ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">最近一个月地磅称重信息表</div>
            <div class="chart" dg-chart-widget="">
              <Mcategory ref="Mcategory" :msg="currentMcategory"></Mcategory>
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.Mcategory ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('Mcategory')"
                ></span>
              </div>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import Table from "./childComps/Table";
import Surplus from "./childComps/Surplus";
import Mcategory from "./childComps/Mcategory";
import Wswiper from "./childComps/Wswiper";
import BDmap from "@/components/BDmap";
export default {
  components: {
    Table,
    Surplus,
    Mcategory,
    Wswiper,
    BDmap,
  },

  props: {},
  data() {
    return {
      fullScreenStatus: {
        Surplus: false,
        Mcategory: false,
      },
      currentData: null,
      currentName: "",
      currentTable: [],
      currentMcategory: [],
      currentSurplus: [],
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
      const { data: ret } = await this.$http.get("weight");
      this.allData = ret;
      this.currentData = this.allData[0];
      this.currentName = this.allData[0].name;
      this.currentTable = this.currentData.data.table;
      this.currentMcategory = this.currentData.data.mcategory;
      this.currentSurplus = this.currentData.data.surplus;
    },
    getname(val1) {
      console.log(val1);
      this.currentName = val1;
      this.currentData = this.allData.find((item) => item.name === this.currentName);
      this.currentTable = this.currentData.data.table;
      this.currentMcategory = this.currentData.data.mcategory;
      this.currentSurplus = this.currentData.data.surplus;
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
  width: 25%;
}
.layout-left-top {
  left: 0;
  top: 0;
  height: 33.33%;
}
.layout-left-center {
  left: 0;
  top: 33.33%;
  height: 66.66%;
}
.layout-center-top {
  top: 0;
  left: 25%;
  right: 0;
  width: 75%;
  height: 50%;
}
.layout-center-bottom {
  top: 50%;
  left: 25%;
  right: 25%;
  bottom: 0;
  width: 37%;
}
.layout-right-top {
  top: 0;
  right: 0;
  height: 50%;
}
.layout-right-bottom {
  top: 50%;
  right: 0;
  bottom: 0;
  width: 37%;
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
/* .layout-center-bottom .panel {
  background-image: -webkit-radial-gradient(
    250px 250px at 50% 50%,
    hsla(209, 99%, 32%, 28),
    hsla(228, 100%, 0%, 0)
  );
  background-image: radial-gradient(
    250px 250px at 50% 50%,
    hsla(209, 99%, 32%, 28),
    hsla(228, 100%, 0%, 0)
  );
} */
</style>
