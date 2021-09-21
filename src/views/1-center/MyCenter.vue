<template>
  <div>
    <body>
      <!--            class="fill-parent"-->
      <!--            dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"-->
      <!--            dg-chart-auto-resize="true"-->
      <!--            dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"-->
      <!--    >-->
      <!--    <div class="head">-->
      <!--      <dv-decoration-11 style="width:16%;height:90%;margin:auto;font-weight: bolder;color:greenyellow;font-size: 2em;">-->

      <!--        <my-select-button></my-select-button>-->
      <!--      </dv-decoration-11>-->
      <!--      <dv-decoration-5 style="width:20%;height:25%;margin:auto" />-->
      <!--    </div>-->
      <div class="head">kkkk</div>
      <my-title></my-title>
      <div class="content">
        <div class="layout layout-left">
          <div class="layout layout-left-top">
            <dv-border-box-11 title="宣传视频" backgroundColor="rgb(3,37,102)">
              <video id="video" class="video" autoplay muted controls>
                <source src="../../assets/videos/lupin.mp4" type="video/mp4" />
                您的浏览器不支持Video标签。
              </video>
            </dv-border-box-11>
          </div>
          <div class="layout layout-left-center">
            <dv-border-box-10>
              <div class="layout layout-left-center1">
                <Rotation :slides="slides"></Rotation>
              </div>
              <div class="layout layout-left-center2">
                <CenterScroll :msg="currentMessage"></CenterScroll>
              </div>
            </dv-border-box-10>
          </div>
          <div class="layout layout-left-bottom">
            <!--            人员结构-->
            <dv-border-box-10
              ><people-structure></people-structure
            ></dv-border-box-10>
          </div>
        </div>
        <div class="layout layout-right">
          <div class="layout layout-right-top2">
            <dv-border-box-10> <Data></Data></dv-border-box-10>
          </div>

          <div class="layout layout-right-center">
            <div class="layout layout-right-center1">
              <div class="layout layout-right-center1-top">
                <dv-border-box-12
                  ><BarChart main_id="main1"></BarChart
                ></dv-border-box-12>
              </div>
              <div class="layout layout-right-center1-bottom">
                <dv-border-box-12
                  ><FanChart main_id="main3"></FanChart
                ></dv-border-box-12>
              </div>
            </div>

            <div class="layout layout-right-center2">
              <div class="layout layout-right-center2-top">
                <dv-border-box-12
                  ><FanChart2 main_id="main4"></FanChart2
                ></dv-border-box-12>
              </div>
              <div class="layout layout-right-center2-bottom">
                <dv-border-box-12
                  ><BarChart2 main_id="main2"></BarChart2
                ></dv-border-box-12>
              </div>
            </div>
            <div class="layout layout-right-center3">
              <dv-border-box-10><newmap3></newmap3></dv-border-box-10>
              <!--              <BDmap v-on:getname="getname"></BDmap>-->
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>


<script>
import Rotation from "../../components/Rotation";
import CenterScroll from "./childComps/CenterScroll";
import newmap3 from "../../components/newmap3";
// import BDmap from "../../components/BDmap";
// import videoplay from "../../components/videoplay";
import Data from "./childComps/Data";
import PeopleStructure from "./child/PeopleStructure";
import FanChart from "./child/FanChart";
import FanChart2 from "./child/FanChart2";
import BarChart from "./child/BarChart";
import myTitle from "../../components/myTitle";
// import mySelectButton from "../../components/MySelectButton"
import ScreenMixin from "../../mixins/ScreenMixin";
import BarChart2 from "./child/BarChart2";
export default {
  name: "MyCenter",
  mixins: [ScreenMixin],
  components: {
    // Select,
    // mySelectButton,
    myTitle,
    BarChart,
    BarChart2,
    Rotation,
    CenterScroll,
    Data,
    PeopleStructure,
    FanChart,
    FanChart2,
    newmap3,
    // BDmap,
  },
  data() {
    return {
      url: require("@/assets/videos/lupin.mp4"),
      video: null,
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
        map: false,
      },
      allData: {},
      currentNums: {},
      currentMessage: "",
    };
  },
  methods: {
    play() {
      this.video = document.getElementById("video");
      this.video.load();
      this.video.play();
      this.video.addEventListener("ended", function () {
        this.play();
      });
    },
    // 视频时长
    subVideoDuration(duration) {
      console.log(duration);
    },
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
    this.$store.commit("setData", "中心级");
  },
  mounted() {
    setTimeout(() => {
      this.play();
    }, 5000);
    setTimeout(function () {
      // this.play();
      document.getElementById("video").removeAttribute("muted");
    }, 5000);
  },
};
</script>

<style scoped>
/*.video{*/
/*  position: absolute;*/
/*  top: 30%;*/
/*  left: 12%;*/
/*  width: 75%;*/
/*  height:65%*/
/*}*/
video {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  /*bottom: 0;*/
  top: 22%;
  width: 90%;
  height: 70%;
}

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
/*div {*/
/*  border: 1px solid red;*/
/*}*/
/*.head {*/
/*  height: 4rem;*/
/*  padding-left: 1.5rem;*/
/*  padding-right: 1.5rem;*/
/*}*/
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
  margin-top: -2rem;
  top: 0;
  left: 0%;
  width: 100%;
  height: 25%;
  height: 30%;
  /*  高度修改，不知道是否适配*/
}
.layout-left-center {
  top: 25%;
  left: 0%;
  width: 100%;
  height: 45%;
}
.layout-left-center1 {
  width: 100%;
  height: 50%;
}
.layout-left-center2 {
  top: 50%;
  width: 100%;
  height: 50%;
}
.layout-left-bottom {
  top: 70%;
  left: 0%;
  width: 100%;
  height: 30%;
}
.layout-right-top2 {
  top: 0%;
  left: 0%;
  width: 100%;
  height: 25%;
}
.layout-right-center {
  top: 25%;
  left: 0%;
  width: 100%;
  height: 75%;
}

.layout-right-center1 {
  top: 0%;
  left: 0%;
  width: 25%;
  height: 100%;
}
.layout-right-center1-top {
  top: 0%;
  left: 0%;
  width: 100%;
  height: 50%;
}
.layout-right-center1-bottom {
  top: 50%;
  left: 0%;
  width: 100%;
  height: 50%;
}
.layout-right-center2 {
  top: 0%;
  left: 25%;
  width: 25%;
  height: 100%;
}
.layout-right-center2-top {
  top: 0%;
  left: 0%;
  width: 100%;
  height: 50%;
}
.layout-right-center2-bottom {
  top: 50%;
  left: 0%;
  width: 100%;
  height: 50%;
}
.layout-right-center3 {
  top: 0%;
  left: 50%;
  width: 50%;
  height: 99%;
  bottom: 1%;
}
</style>
