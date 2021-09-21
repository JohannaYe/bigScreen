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
            </div>
            <dv-decoration-10 style="width: 90%; height: 5px" />
          </div>
          <div class="title2">
            <div class="title-value">
              <dv-decoration-11 style="width:200px;height:3.5rem;"></dv-decoration-11>
<!--              <dv-decoration-7 style="width: 300px; height: 30px">TMR</dv-decoration-7>-->
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
          <div class="panel swiper_panel">
            <div class="swiper_content">
<!--              <TmrSwiper></TmrSwiper>-->
              <Rotation :slides="slides"></Rotation>
            </div>
          </div>
        </div>
        <div class="layout layout-left-center">
          <div class="panel border-all title-bg">
            <div class="title">地图</div>
            <div class="chart" dg-chart-widget="">
<!--              <BDmap v-on:getname="getname"></BDmap>-->
              <dv-border-box-2 :color="['purple', 'green']">  <newmap3></newmap3></dv-border-box-2>

            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-center-top"
          :class="fullScreenStatus.Stock ? 'fullscreen' : ''"
        >
          <dv-border-box-1>
              <div class="panel border-all title-bg">
                  <div class="title">饲料库存</div>
                  <div class="chart" dg-chart-widget="">
                      <stock ref="Stock" :msg="currentStock"></stock>
                      <div class="resize">
                <span
                        :class="[
                    'iconfont',
                    fullScreenStatus.Timely ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                        @click="changeSize('Timely')"
                ></span>
                      </div>
                  </div>
                  <div class="border-foot"></div>
              </div>
<!--            <stock ref="Stock" :msg="currentStock"></stock>-->
<!--            <div class="resize">-->
<!--              <span-->
<!--                :class="[-->
<!--                  'iconfont',-->
<!--                  fullScreenStatus.Stock ? 'icon-compress-alt' : 'icon-expand-alt',-->
<!--                ]"-->
<!--                @click="changeSize('Stock')"-->
<!--              ></span>-->
<!--            </div>-->
          </dv-border-box-1>
        </div>
        <div
          class="layout layout-center-center"
          :class="fullScreenStatus.PlanDetail ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">饲喂计划明细</div>
            <div class="chart" dg-chart-widget="">
              <lunbo1></lunbo1>
<!--              <PlanDetail :msg="currentDetail"></PlanDetail>-->
              <div class="resize2">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.PlanDetail ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('PlanDetail')"
                ></span>
              </div>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-center-bottom"
          :class="fullScreenStatus.TodayFeed ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">今日各舍饲喂计划</div>
            <div class="chart" dg-chart-widget="">
              <lunbo2></lunbo2>
<!--              <today-feed ref="TodayFeed" :msg="currentFeed"></today-feed>-->
              <div class="resize2">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.TodayFeed ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('TodayFeed')"
                ></span>
              </div>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-right-top"
          :class="fullScreenStatus.Monitor ? 'fullscreen' : ''"
        >
          <dv-border-box-1>
              <div class="panel border-all title-bg">
                  <div class="title">投料过程监控</div>
                  <div class="chart" dg-chart-widget="">
                      <monitor ref="Monitor" :msg="currentMonitor"></monitor>
                      <div class="resize">
                <span
                        :class="[
                    'iconfont',
                    fullScreenStatus.Timely ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                        @click="changeSize('Timely')"
                ></span>
                      </div>
                  </div>
                  <div class="border-foot"></div>
              </div>
<!--            <monitor ref="Monitor" :msg="currentMonitor"></monitor>-->
<!--            <div class="resize">-->
<!--              <span-->
<!--                :class="[-->
<!--                  'iconfont',-->
<!--                  fullScreenStatus.Monitor ? 'icon-compress-alt' : 'icon-expand-alt',-->
<!--                ]"-->
<!--                @click="changeSize('Monitor')"-->
<!--              ></span></div>-->
          </dv-border-box-1>
        </div>
        <div
          class="layout layout-right-center"
          :class="fullScreenStatus.Accuracy ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">投料准确率和误差率</div>
            <div class="chart" dg-chart-widget="">
              <Accuracy ref="Accuracy" :msg="currentAccuracy"></Accuracy>
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.Accuracy ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('Accuracy')"
                ></span>
              </div>
            </div>
            <div class="border-foot"></div>
          </div>
        </div>
        <div
          class="layout layout-right-bottom"
          :class="fullScreenStatus.Timely ? 'fullscreen' : ''"
        >
          <div class="panel border-all title-bg">
            <div class="title">投料及时率</div>
            <div class="chart" dg-chart-widget="">
              <Timely ref="Timely" :msg="currentTimely"></Timely>
              <div class="resize">
                <span
                  :class="[
                    'iconfont',
                    fullScreenStatus.Timely ? 'icon-compress-alt' : 'icon-expand-alt',
                  ]"
                  @click="changeSize('Timely')"
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
  import Rotation from "../../components/Rotation";
import Accuracy from "./childComps/Accuracy";
import lunbo1 from "./childComps/lunbo1";
import lunbo2 from "./childComps/lunbo2";
import Monitor from "./childComps/Monitor.vue";
import PlanDetail from "./childComps/PlanDetail.vue";
import Stock from "./childComps/Stock.vue";
import Timely from "./childComps/Timely";
import TmrSwiper from "./childComps/TmrSwiper.vue";
import TodayFeed from "./childComps/TodayFeed.vue";
import newmap3  from "../../components/newmap3";
import BDmap from "../../components/BDmap.vue";

export default {
  components: {
    Rotation,
    newmap3,
    lunbo2,
    Accuracy,
    Timely,
    // PlanDetail,
    Monitor,
    Stock,
    lunbo1
    // TmrSwiper,
    // TodayFeed,
    // BDmap,
  },
  props: {},
  data() {
    return {
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
      fullScreenStatus: {
        Accuracy: false,
        Timely: false,
        Monitor: false,
        Stock: false,
        TodayFeed: false,
        PlanDetail: false,
      },
      allData: null,
      currentData: null,
      currentName: "",
      currentAccuracy: [],
      currentMonitor: [],
      currentDetail: [],
      currentStock: [],
      currentTimely: [],
      currentFeed: [],
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
      const { data: ret } = await this.$http.get("TMR");
      this.allData = ret;
      this.currentData = this.allData[0];
      this.currentName = this.allData[0].name;
      this.currentAccuracy = this.currentData.data.accuracy;
      this.currentMonitor = this.currentData.data.monitor;
      this.currentDetail = this.currentData.data.planDetail;
      this.currentStock = this.currentData.data.stock;
      this.currentTimely = this.currentData.data.timely;
      this.currentFeed = this.currentData.data.todayFeed;
    },
    getname(val1) {
      console.log(val1);
      this.currentName = val1;
      this.currentData = this.allData.find((item) => item.name === this.currentName);
      this.currentAccuracy = this.currentData.data.accuracy;
      this.currentMonitor = this.currentData.data.monitor;
      this.currentDetail = this.currentData.data.planDetail;
      this.currentStock = this.currentData.data.stock;
      this.currentTimely = this.currentData.data.timely;
      this.currentFeed = this.currentData.data.todayFeed;
    },
  },
  created() {
    this.getData();
      this.$store.commit('setData','TMR')
  },
  mounted() {},
};
</script>

<style scoped>
  /*.blackmap{*/
  /*  height: 110%;*/
  /*  width: 200%;*/
  /*  position: absolute;*/
  /*}*/
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
  top: 0px;
  cursor: pointer;
}
.resize2 {
  position: absolute;
  right: 0px;
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
  left: 33.33%;
  top: 0;
  height: 33.33%;
  width: 33.33%;
}
.layout-left-center {
  left: 33.33%;
  top: 33.33%;
  height: 66.66%;
  width: 33.33%;
}
.layout-center-top {
  top: 0;
  left: 0%;
  right: 30%;
  width: 33.33%;
  height: 33.33%;
}
.layout-center-center {
  top: 33.33%;
  left: 0%;
  right: 30%;
  width: 33.33%;
  height: 33.33%;
}
.layout-center-bottom {
  top: 66.66%;
  left: 0%;
  right: 25%;
  bottom: 0;
  width: 33.33%;
}
.layout-right-top {
  top: 0;
  right: 0;
  width: 33.33%;
  height: 33.33%;
}
.layout-right-center {
  top: 33.33%;
  right: 0;
  bottom: 0;
  width: 33.33%;
  height: 33.33%;
}
.layout-right-bottom {
  top: 66.66%;
  right: 0;
  bottom: 0;
  width: 33.33%;
}
.panel {
  position: absolute;
  left: 0.5rem;
  top: 0.8rem;
  right: 0.5rem;
  bottom: 0.8rem;
  /* border: 1px solid #20558b;
  -webkit-box-shadow: #07417a 0 0 10px;
  -moz-box-shadow: #07417a 0 0 10px;
  box-shadow: inset 0 0 30px #07417a; */
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
  top: 0rem;
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
  top: 0rem;
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
