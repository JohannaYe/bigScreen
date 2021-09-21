<template>
  <div>
    <body
      class="fill-parent"
      dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
      dg-chart-auto-resize="true"
      dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"
    >
      <div class="head">
        <div class="title total">
          <div class="title1">
            <div class="ox_name">
<!--              <dv-decoration-11 style="width: 400px; height: 60px"-->
<!--                >赤峰市牛业决策指挥中心</dv-decoration-11-->
<!--              >-->
              <dv-decoration-7 style="width:150px;height:30px;margin-top: 40px">**公司</dv-decoration-7>
            </div>
            <dv-decoration-10 style="width: 90%; height: 5px" />
          </div>
          <div class="title2">
            <div class="title-value">
              <dv-decoration-7 style="width: 300px; height: 30px">中心级</dv-decoration-7>
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
            <div class="swiper_content">
<!--              <CenterSwiper></CenterSwiper>-->
              <Rotation :slides="slides"></Rotation>
            </div>
          </div>
        </div>
        <div class="layout layout-center-top">
          <dv-border-box-1><Datas :msg="currentNums"></Datas></dv-border-box-1>
        </div>
        <div class="layout layout-center-bottom">
          <div class="panel border-all">
            <div class="chart" dg-chart-widget="">
              <BDmap v-on:getname="getname"></BDmap>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div class="layout layout-right-top">
          <dv-border-box-11 title="公司介绍"
            ><CenterScroll :msg="currentMessage"></CenterScroll
          ></dv-border-box-11>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// import Map from "./childComps/Map";
import Datas from "./childComps/Datas";
import CenterScroll from "./childComps/CenterScroll";
import BDmap from "../../components/BDmap";
// import CenterSwiper from "./childComps/CenterSwiper";
import Rotation from "../../components/Rotation";
export default {
  components: {
    Rotation,
    Datas,
    CenterScroll,
    BDmap,
    // CenterSwiper,
  },
  props: {},
  data() {
    return {
      slides:[{
        src:require('@/assets/images/dog1.jpg'),
        href:'../../assets/images/dog1.jpg',
        title:'dog1'
      }, {
        // src: "img/dog2.eceeaad6.jpg",
        // href:'img/dog2.eceeaad6.jpg',
        src:require('../../assets/images/dog2.jpg'),
        href:'../../assets/images/dog2.jpg',
        title:'dog2'
      }
      ],
      fullScreenStatus: {
        map: false,
      },
      allData: {},
      currentNums: {},
      currentMessage: "",
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
    getname(val1) {
      console.log(val1);
      this.$router.push({
        name: "monitor",
        params: {
          name: val1,
        },
      });
    },
    async getData() {
          const { data: ret } = await this.$http.get("center");
          this.allData = ret;
          this.currentNums = this.allData.datas;
          this.currentMessage = this.allData.message;
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
.swiper_content {

  padding-top: 5px;
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
  /* background: url(~@/assets/1images/title-bg-left.png) no-repeat center center; */
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
  /* background: url(~@/assets/1images/title-bg-right.png) no-repeat center center; */
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
  width: 30%;
}
.layout-left-top {
  left: 0;
  top: 0;
  height: 30%;
  overflow: hidden;
}
.layout-left-center {
  left: 0;
  top: 33.33%;
  height: 33.33%;
}
.layout-left-bottom {
  left: 0;
  top: 66.66%;
  height: 33.33%;
}
.layout-center-top {
  top: 0;
  left: 30%;
  right: 30%;
  height: 30%;
  width: 40%;
}
.layout-center-bottom {
  top: 30%;
  left: 0%;
  right: 30%;
  bottom: 0;
  width: 70%;
}
.layout-right-top {
  top: 0;
  right: 0;
  height: 100%;
}
.layout-right-center {
  top: 33.3%;
  right: 0;
  height: 33.3%;
}
.layout-right-bottom {
  top: 66.6%;
  right: 0;
  bottom: 0;
}
.panel {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  right: 0.5rem;
  bottom: 0.5em;
}
.panel.border-left-top:before,
.panel.border-all:before {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  content: "";
  border-top: 2px solid #26c6f0;
  border-left: 2px solid #26c6f0;
  left: -1px;
  top: -1px;
}
.panel.border-right-top:after,
.panel.border-all:after {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  content: "";
  border-top: 2px solid #26c6f0;
  border-right: 2px solid #26c6f0;
  right: -1px;
  top: -1px;
}
.panel.border-left-bottom .border-foot:before,
.panel.border-all .border-foot:before {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  content: "";
  border-bottom: 2px solid #26c6f0;
  border-left: 2px solid #26c6f0;
  left: -1px;
  bottom: -1px;
}
.panel.border-right-bottom .border-foot:after,
.panel.border-all .border-foot:after {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  content: "";
  border-bottom: 2px solid #26c6f0;
  border-right: 2px solid #26c6f0;
  right: -1px;
  bottom: -1px;
}
.panel > .title {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 1.8rem;
  color: #257dff;
  background: url(~@/assets/1images/chart-title-bg.png) no-repeat bottom center;
}
.panel .chart {
  position: absolute;
  top: 1.9rem;
  right: 0.3rem;
  bottom: 0.3rem;
  left: 0.3rem;
}
.layout-center-top .panel,
.layout-center-bottom .panel {
  left: 1rem;
  right: 1rem;
}
.layout-center-bottom .panel {
  background: url(~@/assets/1images/chart-bg-1.png) no-repeat;
  background-size: 100% 100%;
}
.layout-center-top .panel .chart,
.layout-center-bottom .panel .chart {
  top: 0.3rem;
}
.layout-center-top .panel .chart {
  width: 30%;
  background: url(~@/assets/1images/chart-bg-0.png) no-repeat center center;
  background-size: 100% 100%;
}
.layout-center-top .panel .chart-left {
  left: 0;
}
.layout-center-top .panel .chart-center {
  left: 35%;
}
.layout-center-top .panel .chart-right {
  left: 70%;
  /* right: 35%; */
  /* width: 30%; */
}
.water {
  width: 30%;
  top: 0.3rem;
  position: absolute;
  /* top: 4.5rem; */
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
