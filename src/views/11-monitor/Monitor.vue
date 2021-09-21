<template>
  <div>
    <body
      class="fill-parent"
      dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
      dg-chart-auto-resize="true"
      dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#0d1e5c'}"
    >
      <div class="head">
        <div class="title">
          <div class="goback" @click="goback">
            <dv-border-box-8>返回</dv-border-box-8>
          </div>
          <div class="title-left"></div>
<!--          <div class="title-value">监控录像</div>-->
          <div class="title-right"></div>
        </div>
      </div>
      <div class="content">
        <dv-border-box-9 class="text">
          <div class="cowshelist">
            <p class="p">{{name}}</p>
            <ul >
              <li class="liset" @click="click('所有牛舍')">所有牛舍</li>
              <li class="liset" v-for="(i,index) in cowshlist" :key="index" @click="click(i)">{{i}}</li>
            </ul>
          </div>
          <div class="all">
            <dv-border-box-11 :title="name">
              <div style="position: absolute;overflow-y: scroll;width: 99.3%;height: 88%;top: 8%;left: 0%;">
                <MonitorItem v-for="(item,index) in filterMonitors" :key="index" :monitor-item="item"></MonitorItem>
              </div>
            </dv-border-box-11>
          </div>
        </dv-border-box-9>
      </div>
    </body>
  </div>
</template>

<script>
import MonitorItem from "./MonitorItem";
export default {
  components: {
    MonitorItem,
  },
  props: {},
  data() {
    return {
      cowshname:'牛舍监控',
      source:'',
      fullScreenStatus: {
        Areaspread: false,
      },
      // name: this.$route.params.name,
      name: this.$route.params.name,
      cowshlist:[],
      monitors: [
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍1'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍2'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍2'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍3'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍3'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍3'
        },
        {
          pasture:'awei牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍3'
        },
        {
          pasture:'kailong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍a'
        },
        {
          pasture:'kailong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍b'
        },
        {
          pasture:'kailong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍c'
        },
        {
          pasture:'zelong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍+'
        },
        {
          pasture:'zelong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍-'
        },
        {
          pasture:'zelong牧场',
          src: require("../../assets/videos/lupin.mp4"),
          cowsh:'牛舍*'
        },
      ],
      filterMonitors:[],
    };
  },
  watch: {},
  computed: {},
  methods: {
    click(e){
      this.filterMonitors = []
      if (e=='所有牛舍'){
        this.monitors.forEach(item=>{
          if(this.name==item.pasture){
            this.filterMonitors.push(item)
          }
        })
        return
      }
        this.monitors.forEach(item=> {
          if(e==item.cowsh){
            this.filterMonitors.push(item)
          }
        })
    },
    setname() {
      this.cowshlist=[]
      this.name = this.$route.params.name;
      this.monitors.forEach(item=>{
        if(this.name==item.pasture){
          this.filterMonitors.push(item)
          this.cowshlist.push(item.cowsh)
          this.cowshlist = this.cowshlist.reduce((pre,item)=>(!pre.includes(item))?[...pre,item]:pre,[])
        }
      })
    },
    goback() {
      this.$router.go(-1);
    },
  },
  created() {
    this.setname();
    this.$store.state.selectName= '监控中心'
  },
  mounted() {},
};
</script>
<style scoped>
.text {
  padding-top: 20px;
  font-size: 1.5rem;
  color: #257dff;
}
/*div {*/
/*  border: 1px solid red*/
/*}*/
.p{
 text-align: center;
  color: #8fee50;
  font-size: 2rem;
}
.liset{
  list-style: none;
}
.video{
  position: absolute;
  top: 15%;
  left: 12%;
  width: 75%;
  height:60%
}
.title {
  position: relative;
}
.goback {
  top: 120px;
  right: 60px;
  height: 40px;
  width: 80px;
  position: absolute;
  z-index: 99;
}
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
.cowshelist{
  /*text-align: center;*/
  margin:auto;
  position: absolute;
  height: 100%;
  width: 20%;

}
.monitors {
  position: absolute;
  left: 20%;
  height: 95%;
  width: 80%;
  bottom:5%
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-around;*/
  /*overflow: auto;*/
}
.all {
  position: absolute;
  left: 20%;
  height: 95%;
  width: 80%;
  bottom:5%
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-around;*/
  /*overflow: auto;*/
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
