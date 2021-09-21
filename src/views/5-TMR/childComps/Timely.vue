<template>
  <div class="com-container">
    <div class="com-chart" ref="timely_chart"></div>
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
      allData: null,
    };
  },
  watch: {
    theme() {
      this.chartInstance.dispose();
      this.initChart();
      this.screenAdapter();
    },
    msg() {
      const date = this.msg.map((item) => {
        return item.name;
      });
      const timely = this.msg.map((item) => {
        return item.value;
      });
      const dataOption = {
        xAxis: [
          {
            data: date,
          },
        ],
        series: [
          {
            name: "及时率",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 13,
            lineStyle: {
              normal: {
                color: "#6c50f3",
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#6c50f3",
              },
            },
            itemStyle: {
              color: "#6c50f3",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(108,80,243,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(108,80,243,0)",
                    },
                  ],
                  false
                ),
                shadowColor: "rgba(108,80,243, 0.9)",
                shadowBlur: 20,
              },
            },
            data: timely,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
  computed: {},
  methods: {
    initChart() {
      // var bg1 =
      // var back1 = new Image();
      // back1.src = bg1;
      this.chartInstance = this.$echarts.init(this.$refs.timely_chart);
      const initOption = {
        // backgroundColor: "#080b30",
        // title: {
        //   text: "哎呦,不错哦",
        //   textStyle: {
        //     align: "center",
        //     color: "#fff",
        //     fontSize: 20,
        //   },
        //   top: "5%",
        //   left: "center",
        // },
        legend: {
          show: true,
          x: "center",
          top: "0",
          itemWidth: 50,
          textStyle: {
            color: "#fff",
          },
          data: ["及时率"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        grid: {
          top: "15%",
          left: "10%",
          right: "5%",
          bottom: "15%",
          // containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
            },
            splitArea: {
              // show: true,
              color: "#f00",
              lineStyle: {
                color: "#f00",
              },
            },
            axisLabel: {
              color: "#fff",
            },
            splitLine: {
              show: false,
            },
            boundaryGap: false,
          },
        ],

        yAxis: [
          {
            name: "百分率：%",
            nameTextStyle: {
              color: "#fff",
              fontSize: 15,
              lineHeight: 0,
            },
            type: "value",
            // show: true,
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              show: true,
            },
            axisLabel: {
              show: true,
              margin: 20,
              textStyle: {
                color: "#d1e6eb",
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.timely_chart.offsetWidth / 100) * 2.3;
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
