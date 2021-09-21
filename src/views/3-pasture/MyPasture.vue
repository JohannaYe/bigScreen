<template>
  <div>
        <body
          class="fill-parent"
          dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
          dg-chart-auto-resize="true"
          dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"
        >
          <div class="head">

              <dv-decoration-11 style="width:16%;height:90%;margin:auto;font-weight: bolder;color:greenyellow;font-size: 2em;float:right;right:41.8%">
              </dv-decoration-11>
            <dv-decoration-7 class="pasture">{{pastrue}}</dv-decoration-7>
          </div>
    <div class="content">
      <div class="layout layout-left">
        <div class="layout layout-left-top">
          <dv-border-box-12>
            <feed-type></feed-type>
          </dv-border-box-12>
        </div>
        <div class="layout layout-left-center">
          <dv-border-box-12>
            <develop-direction></develop-direction>
          </dv-border-box-12>
        </div>
        <div class="layout layout-left-center2">
          <dv-border-box-12></dv-border-box-12>
          <div id="fattenCow" class="chart"></div>
        </div>
        <div class="layout layout-left-bottom">
          <dv-border-box-12></dv-border-box-12>
          <div id="baseCow" class="chart"></div>
        </div>
      </div>
      <div class="layout layout-center">
        <div class="layout layout-center-top">
          <dv-border-box-1>
            <Numcl ></Numcl
            ></dv-border-box-1>
        </div>
        <div class="layout layout-center-center">
          <dv-border-box-13> <newmap2 ></newmap2></dv-border-box-13>
        </div>
        <div class="layout layout-center-bottom">
          <dv-border-box-13>
            <people-structure></people-structure>
          </dv-border-box-13>
        </div>
      </div>
      <div class="layout layout-right">
        <div class="layout layout-right-top">
          <dv-border-box-12></dv-border-box-12>
          <div id="sCow" class="chart"></div>
        </div>
        <div class="layout layout-right-center">
          <dv-border-box-12></dv-border-box-12>
          <div id="age" class="layout layout-right-centera"></div>
          <div id="sex" class="layout layout-right-centerb"></div>
        </div>
        <div class="layout layout-right-center2">
          <dv-border-box-12></dv-border-box-12>
          <div id="variety" class="chart"></div>
        </div>
        <div class="layout layout-right-bottom">
          <dv-border-box-12></dv-border-box-12>
          <div id="insure" class="chart"></div>
        </div>
      </div>
    </div>
        </body>
  </div>
</template>

<script>
  import Numcl from "./childComps/Numcl";
  import newmap2 from "../../components/newmap2";
  import router from "@/router";
  import echarts from "echarts";
  import PeopleStructure from "./child/PeopleStructure";
  import FeedType from "./child/FeedType";
  import DevelopDirection from "./child/DevelopDirection";
  import ScreenMixin from "../../mixins/ScreenMixin";
  const colorList = [
    "#03DDFF",
    "#835CFF",
    "#FDD56A",
    "#2ab323",
    "#FD866A",
    "#AE87FF",
    "#1b2fff",
  ];
  const colorArr = [
    {
      top: "#fc00ff",
      bottom: "#00dbde",
    },
    {
      top: "#eebd89",
      bottom: "#d13abd",
    },
    {
      top: "#f9957f",
      bottom: "#f2f5d0",
    },
    {
      top: "#c973ff",
      bottom: "#aebaf8",
    },
    {
      top: "#ef33b1",
      bottom: "#f6e6bc",
    },
    {
      top: "#ccfbff",
      bottom: "#ef96c5",
    },
    {
      top: "#eae5c9",
      bottom: "#6cc6cb",
    },
  ];

  export default {
    name: "MyPasture",
    mixins: [ScreenMixin],
    components: {
      newmap2,
      Numcl,
      PeopleStructure,
      FeedType,
      DevelopDirection,
    },
    mounted() {
      // this.drawChart();
      // window.addEventListener('resize',()=>{
      //   this.drawChart();
      // })
        this.$store.commit('setData','牧场级')
    },
    data() {
      return {
        msg: {
          topic: 'pasture',
          params: {
            pastureId: '1371082482853961729'
          }
        },
        // pastrue:this.$store.state.nowpastrue,
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
    watch: {
        screen2(){
            deep:true,
                    console.log(this.$store.state.screen2.fat.chuLan)
                this.drawChart()
            window.addEventListener('resize',()=>{
            this.drawChart();
          })
        },
      pastrue(){
          if(this.pastrue!='请选择牧场')
          this.msg.params.pastureId="1406174767303663617"
      }
    },
    computed: {
        screen2(){
            return this.$store.state.screen2
        },
      pastrue(){
        return this.$store.state.nowpastrue
      }
    },
    methods: {
      autoHover(myChart, option, num, time) {
        var defaultData = { //设置默认值
          time: 2000,
          num: 0
        };
        if (!time) {
          time = defaultData.time;
        }
        if (!num) {
          num = defaultData.num;
        }

        var count = 0;
        var timeTicket = null;
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0 ,//serieIndex的索引值   可以触发多个
            dataIndex: (count+num-1)%num
          });
          count =count  % num;//增加
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: count
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: count
          });

          count++;
          if (count >= num) {
            count = 0
          }
        }, time);
        myChart.on("mouseover", function (params) {
          clearInterval(timeTicket);
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: params.dataIndex
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 0,
            dataIndex: params.dataIndex
          });
        });

        myChart.on("mouseout", function () {
          timeTicket && clearInterval(timeTicket);
          timeTicket = setInterval(function () {
            myChart.dispatchAction({
              type: "downplay",
              seriesIndex: 0 //serieIndex的索引值   可以触发多个
            });
            myChart.dispatchAction({
              type: "highlight",
              seriesIndex: 0,
              dataIndex: count
            });
            myChart.dispatchAction({
              type: "showTip",
              seriesIndex: 0,
              dataIndex: count
            });
            count++;
            if (count >= 8) {
              count = 0
            }
          }, 1000);
        });
      },
      fontSize(res) {
        let docEl = document.documentElement,
                clientWidth =
                        window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
      },
      drawChart() {
        let ageop={
          title: {
            text: "年龄结构",
                    x: "center",
                    y: "center",
                    textStyle: {
              fontSize: 15,
                      color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: ["45%", "70%"],
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[(params.dataIndex + 1) % 7];
                  },
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                {
                  name: "3岁以上",
                  value: this.$store.state.screen2.byAge.AboveThree,
                },
                {
                  name: "2-3岁",
                  value: this.$store.state.screen2.byAge.TwoThree,
                },
                {
                  name: "1-2岁",
                  value: this.$store.state.screen2.byAge.OneTwo,
                },
                {
                  name: "0-1岁",
                  value: this.$store.state.screen2.byAge.ZeroOne
                },
              ],
            },
          ],
        };

        let baseCowop= {
                  title: {
                    text: "基础母牛",
                    x: "center",
                    y: "center",
                    textStyle: {
                      fontSize: 15,
                      color: "#fff",
                    },
                  },
                  tooltip: {
                    trigger: "item",
                  },
                  series: [
                    {
                      type: "pie",
                      center: ["50%", "50%"],
                      radius: ["45%", "70%"],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                        normal: {
                          color: function (params) {
                          return colorList[params.dataIndex];
                        },
                      },
                    },
                    label: {
                  // show: false,
                  position: "outside",
                  formatter: "{b|{b}}\n{a|{d}%}\n{hr|}",
                  rich: {
                    hr: {
                      backgroundColor: "t",
                      width: 3,
                      height: 3,
                      borderRadius: 3,
                      padding: [3, 3, 0, -12],
                    },
                    a: {
                      align: "center",
                      padding: [-20, 10, 0, 10],
                      height: 20,
                    },
                    b: {
                      padding: [-20, 10, -30, 10],
                    },
                  },
                },
                labelLine: {
                  normal: {
                    // show: false,
                    length: 10,
                    length2: 30,
                    lineStyle: {
                      width: 1,
                    },
                  },
                },
                data: [
                  {
                    name: "现存栏数",
                    value: 10,
                  },
                  {
                    name: "怀孕母牛数量",
                    value: this.$store.state.screen2.baseCow.cowNum,
                  },
                  {
                    name: "空怀母牛数量",
                    value: this.$store.state.screen2.baseCow.pregnancyCowNum,
                  },
                ],
                },
                ],
                };
        let fattenCowop={
          title: {
            text: "育肥牛",
                    x: "center",
                    top: "3%",
                    textStyle: {
              fontSize: 20,
                      color: "#ff7e27",
            },
          },
          grid: {
            top: "20%",
                    right: "5%",
                    left: "15%",
                    bottom: "20%",
          },
          legend: {
            orient: "vertical",
                    top: "30%",
                    left: "70%",
                    data: ["现存栏数", "已出栏数"],
                    textStyle: {
              color: "red",
            },
          },
          xAxis: [
            {
              type: "category",
              color: "rgb(39,255,40)",
              data: ["现存栏数", "已出栏数"],
              axisLabel: {
                margin: 10,
                color: "rgb(39,255,40)",
                textStyle: {
                  fontSize: 14,
                  fontWeight: "bold",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "rgb(39,255,40)",
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
                  yAxis: [
            {
              min: 0,
              axisLabel: {
                formatter: "{value}",
                color: "rgb(39,255,40)",
                textStyle: {
                  fontSize: 14,
                  fontWeight: "bold",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "rgb(39,255,40)",
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  color: "#888",
                  type: "dashed",
                },
              },
            },
          ],
                  tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "bar",
              data: [
                {
                  name: "现存栏数",
                  value:this.$store.state.screen2.fat.InNum,
                },
                {
                  name: "已出栏数",
                  // value: this.$store.state.screen.fat && this.$store.state.screen.fat.chuLan,
                  value:this.$store.state.screen2.fat.chuLan,
                },
              ],
              barWidth: "40px",
              itemStyle: {
                normal: {
                  color: function (params) {
                    let num = colorArr.length;
                    return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              {
                                offset: 0,
                                color: colorArr[params.dataIndex % num].top, // 0% 处的颜色
                              },
                              {
                                //可根据具体情况决定哪根柱子显示哪种颜色
                                offset: 1,
                                color: colorArr[params.dataIndex % num].bottom, // 100% 处的颜色
                              },
                            ],
                            false
                    );
                  },
                  barBorderRadius: [30, 30, 0, 0],
                },
              },
              label: {
                normal: {
                  show: true,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "rgb(3,243,255)",
                  position: "top",
                },
              },
            },
          ],
        };

        let sCowop={
          title: {
            text: "犊牛",
                    x: "center",
                    y: "center",
                    textStyle: {
              fontSize: 15,
                      color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: ["45%", "70%"],
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[params.dataIndex];
                  },
                },
              },
              label: {
                // show: false,
                position: "outside",
                formatter: "{b|{b}}\n{a|{d}%}\n{hr|}",
                rich: {
                  hr: {
                    backgroundColor: "t",
                    width: 3,
                    height: 3,
                    borderRadius: 3,
                    padding: [3, 3, 0, -12],
                  },
                  a: {
                    align: "center",
                    padding: [-20, 10, 0, 10],
                    height: 20,
                  },
                  b: {
                    padding: [-20, 10, -30, 10],
                  },
                },
              },
              labelLine: {
                normal: {
                  // show: false,
                  length: 10,
                  length2: 30,
                  lineStyle: {
                    width: 1,
                  },
                },
              },
              data: [
                {
                  name: "犊牛1",
                  value: 100,
                },
                {
                  name: "犊牛2",
                  value: 200,
                },
                {
                  name: "犊牛3",
                  value: 300,
                },
                {
                  name: "犊牛4",
                  value: 400,
                },
              ],
            },
          ],
        };
        let sexop={
          title: {
            text: "性别",
                    x: "center",
                    y: "center",
                    textStyle: {
              fontSize: 15,
                      color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: ["45%", "70%"],
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[(params.dataIndex + 6) % 7];
                  },
                },
              },
              label: {
                show: false,
              },
              labelLine: {
                normal: {
                  show: false,
                },
              },
              data: [
                {
                  name: "公牛",
                  value: this.$store.state.screen2.bySex.bullNum,
                },
                {
                  name: "母牛",
                  value:this.$store.state.screen2.bySex.cowNum,
                },
                {
                  name: "阉牛",
                  value:this.$store.state.screen2.bySex.steerNum,
                },
              ],
            },
          ],
        };
       let varietyop={
          title: {
            text: "品种",
                    x: "center",
                    top: "3%",
                    textStyle: {
              fontSize: 20,
                      color: "#ff7e27",
            },
          },
          grid: {
            top: "18%",
                    right: "5%",
                    left: "15%",
                    bottom: "20%",
          },
          xAxis: [
            {
              type: "category",
              color: "rgb(39,255,40)",
              data: ["安格斯", "何坦斯", "西门塔尔","海福德","布朗" ,"其它"],
              axisLabel: {
                margin: 10,
                color: "rgb(39,255,40)",
                textStyle: {
                  fontSize: 11,
                  fontWeight: "bold",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "rgb(39,255,40)",
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
                  yAxis: [
            {
              min: 0,
              // max: 5000,
              axisLabel: {
                formatter: "{value}",
                color: "rgb(39,255,40)",
                textStyle: {
                  fontSize: 14,
                  fontWeight: "bold",
                },
              },
              axisLine: {
                lineStyle: {
                  color: "rgb(39,255,40)",
                },
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                lineStyle: {
                  color: "#888",
                  type: "dashed",
                },
              },
            },
          ],
                  tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "bar",
              data: [this.$store.state.screen2.byVariety.pAngus, this.$store.state.screen2.byVariety.pHolstein, this.$store.state.screen2.byVariety.pSimmental, this.$store.state.screen2.byVariety.pHayford,this.$store.state.screen2.byVariety.pBrown,this.$store.state.screen2.byVariety.pOther],
              barWidth: "40px",
              itemStyle: {
                normal: {
                  color: function (params) {
                    let num = colorArr.length;
                    return new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                              {
                                offset: 0,
                                color: colorArr[params.dataIndex % num].top, // 0% 处的颜色
                              },
                              {
                                //可根据具体情况决定哪根柱子显示哪种颜色
                                offset: 1,
                                color: colorArr[params.dataIndex % num].bottom, // 100% 处的颜色
                              },
                            ],
                            false
                    );
                  },
                  barBorderRadius: [30, 30, 0, 0],
                },
              },
              label: {
                normal: {
                  show: true,
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "rgb(3,243,255)",
                  position: "top",
                },
              },
            },
          ],
        };
        let insureop={
          title: {
            text: "投保汇总",
                    x: "center",
                    y: "center",
                    textStyle: {
              fontSize: 15,
                      color: "#fff",
            },
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: ["45%", "70%"],
              clockwise: true,
              avoidLabelOverlap: true,
              hoverOffset: 15,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[(params.dataIndex + 4) % 7];
                  },
                },
              },
              label: {
                // show: false,
                position: "outside",
                formatter: "{b|{b}}\n{a|{d}%}\n{hr|}",
                rich: {
                  hr: {
                    backgroundColor: "t",
                    width: 3,
                    height: 3,
                    borderRadius: 3,
                    padding: [3, 3, 0, -12],
                  },
                  a: {
                    align: "center",
                    padding: [-20, 10, 0, 10],
                    height: 20,
                  },
                  b: {
                    padding: [-20, 10, -30, 10],
                  },
                },
              },
              labelLine: {
                normal: {
                  // show: false,
                  length: 10,
                  length2: 30,
                  lineStyle: {
                    width: 1,
                  },
                },
              },
              data: [
                {
                  name: "已投保",
                  value: this.$store.state.screen2.insurance.insurance,
                },
                {
                  name: "未投保",
                  value: this.$store.state.screen2.insurance.unInsurance,
                },
              ],
            },
          ],
        };























































        //基础母牛
        let baseCow = this.$echarts.init(document.getElementById("baseCow"));
        // this.baseCow.title.textStyle.fontSize = this.fontSize(0.2)
        baseCow.setOption(baseCowop);
        //育肥牛
        let fattenCow = this.$echarts.init(document.getElementById("fattenCow"));
        // this.fattenCow.title.textStyle.fontSize = this.fontSize(0.2)
        fattenCow.setOption(fattenCowop);
        this.autoHover(fattenCow,fattenCowop,4,1000)
        //犊牛
        let sCow = this.$echarts.init(document.getElementById("sCow"));
        // this.sCow.title.textStyle.fontSize = this.fontSize(0.2)
        sCow.setOption(sCowop);
        //年龄结构
        let age = this.$echarts.init(document.getElementById("age"));
        // this.age.title.textStyle.fontSize = this.fontSize(0.2)
        age.setOption(ageop);
        //品种
        let variety = this.$echarts.init(document.getElementById("variety"));
        // this.variety.title.textStyle.fontSize = this.fontSize(0.2)
        variety.setOption(varietyop);
        this.autoHover(variety,varietyop,4,1000)
        //性别
        let sex = this.$echarts.init(document.getElementById("sex"));
        // this.sex.title.textStyle.fontSize = this.fontSize(0.2)
        sex.setOption(sexop);
        //投保汇总
        let insure = this.$echarts.init(document.getElementById("insure"));
        // this.insure.title.textStyle.fontSize = this.fontSize(0.2)
        insure.setOption(insureop);

        // window.addEventListener("resize", () => {
        //   sCow.resize();
        // });
      },
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
        this.currentData = this.allData.find(
                (item) => item.name === this.currentName
        );
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
      this.$store.commit('setData2','请选择牧场')
    },
  };
</script>

<style scoped>
  .pasture{
    top: 20%;
    width: 20%;
    height: 100%;
    color:  mediumpurple;
    float:left
  }
  .chart {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
  /*div {*/
  /*  border: 1px solid red*/
  /*}*/
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
  .layout {
    position: absolute;
  }
  .layout-left {
    top: 0;
    left: 0%;
    width: 30%;
    height: 100%;
  }
  .layout-left-top {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-left-center {
    top: 25%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-left-center2 {
    top: 50%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-left-bottom {
    top: 75%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-center {
    top: 0;
    left: 30%;
    width: 40%;
    height: 100%;
  }
  .layout-center-top {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 10%;
  }
  .layout-center-center {
    top: 10%;
    left: 0%;
    width: 100%;
    height: 65%;
  }
  .layout-center-bottom {
    top: 75%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-right {
    top: 0;
    left: 70%;
    width: 30%;
    height: 100%;
  }
  .layout-right-top {
    top: 0%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-right-center {
    top: 25%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-right-centera {
    top: 0%;
    left: 0%;
    width: 50%;
    height: 100%;
  }
  .layout-right-centerb {
    top: 0%;
    left: 50%;
    width: 50%;
    height: 100%;
  }
  .layout-right-center2 {
    top: 50%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
  .layout-right-bottom {
    top: 75%;
    left: 0%;
    width: 100%;
    height: 25%;
  }
</style>
