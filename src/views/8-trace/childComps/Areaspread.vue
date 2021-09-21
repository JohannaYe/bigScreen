<template>
  <div class="com-container">
    <div class="com-chart" ref="history_chart"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      chartInstance: null,
    };
  },
  watch: {
    theme() {
      this.chartInstance.dispose();
      this.initChart();
      this.screenAdapter();
      this.updataChart();
    },
    msg() {
      this.initChart();
    },
  },
  computed: {},
  methods: {
    initChart() {
      const name = this.msg.map((item) => {
        return item.name;
      });
      const value = this.msg.map((item) => {
        return item.value;
      });
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {
        tooltip: {
          trigger: "item",
          padding: 1,
        },
        title: {
          text: "扫码区域分布",
          right: "5%",
          top: "5%",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
        },
        grid: {
          left: "10%",
          top: "22%",
          right: "5%",
          bottom: "15%",
        },
        legend: {
          show: true,
          icon: "circle",
          orient: "horizontal",
          top: "90.5%",
          right: "center",
          itemWidth: 16.5,
          itemHeight: 6,
          // itemGap: 30,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 14,
          },
        },
        xAxis: [
          {
            data: name,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 14,
              },
              margin: 5, //刻度标签与轴线之间的距离。
            },

            axisLine: {
              show: true, //不显示x轴
            },
            axisTick: {
              show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false,
              width: 0.08,
              lineStyle: {
                type: "solid",
                color: "#fff",
              },
            },
          },
        ],
        yAxis: [
          {
            name: "单位：人",
            nameTextStyle: {
              color: "#fff",
              fontSize: 14,
            },
            type: "value",
            splitLine: {
              show: false,
              lineStyle: {
                color: "#fff",
                type: "solid",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            //柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [45, 22], //调整截面形状
            symbolOffset: [0, 0],
            z: 12,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(89,211,255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(23,237,194,1)",
                  },
                ]),
              },
            },
            data: value,
          },

          //柱体
          {
            name: "",
            type: "bar",
            barWidth: 45,
            barGap: "0%",
            itemStyle: {
              normal: {
                color: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  type: "linear",
                  global: false,
                  colorStops: [
                    {
                      //第一节下面
                      offset: 0,
                      color: "rgba(0,255,245,0.5)",
                    },
                    {
                      offset: 1,
                      color: "#43bafe",
                    },
                  ],
                },
              },
            },

            data: value,
          },

          //柱顶圆片
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [45, 22], //调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(89,211,255,1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(23,237,194,1)",
                    },
                  ],
                  false
                ),
              },
            },
            data: value,
          },
          //折线
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    updataChart() {
      const dataOption = {};
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.history_chart.offsetWidth / 100) * 2.3;
      const adapterOption = {
        textStyle: {
          fontSize: titleFontSize,
        },
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
  },
  created() {},
  mounted() {
    this.initChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
};
</script>
<style scoped></style>
