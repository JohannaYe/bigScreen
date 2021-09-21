<template>
  <div class="com-container">
    <div class="com-chart" ref="ox_own_chart"></div>
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
      startValue: 0,
      endValue: 4,
      timerId: null,
    };
  },
  watch: {
    msg() {
      const name = this.msg.map((item) => {
        return item.name;
      });
      const value = this.msg.map((item) => {
        return item.value;
      });
      const colorArr = [
        ["rgba(0,77,167,1)", "rgba(0,244,255,1)"],
        ["rgba(0,77,167,1)", "rgba(0,244,255,1)"],
        ["rgba(0,77,167,1)", "rgba(0,244,255,1)"],
      ];
      const dataOption = {
        xAxis: {
          data: name,
        },
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue,
        },
        series: [
          {
            data: value,
            itemStyle: {
              shadowColor: "rgba(0,160,221,1)",
              shadowBlur: 4,
              color: (reg) => {
                let targetColorArr = null;
                if (reg.data > 1000) {
                  targetColorArr = colorArr[0];
                } else if (reg.data > 500) {
                  targetColorArr = colorArr[1];
                } else {
                  targetColorArr = colorArr[2];
                }
                return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: targetColorArr[0],
                  },
                  {
                    offset: 1,
                    color: targetColorArr[1],
                  },
                ]);
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    theme() {
      this.chartInstance.dispose();
      this.initChart();
      this.screenAdapter();
    },
  },
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.ox_own_chart);
      const initOption = {
        tooltip: {},
        grid: {
          top: "20%",
          left: "2%",
          right: "2%",
          bottom: "2%",
          containLabel: true,
        },
        legend: {
          data: ["销量"],
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#ccc",
              width: "2",
            },
          },
          axisLabel: {
            textStyle: {
              // fontSize: 20,
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#ccc",
              width: "2",
            },
          },
          splitLine: {
            show: false,
          },
        },
        dataZoom: [
          {
            show: false,
            // height: 10,
            // xAxisIndex: [0],
            // bottom: 0,

            // "start": 10,
            // "end": 80,
            // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            // handleSize: '110%',
            // handleStyle: {
            //     color: "#5B3AAE",
            // },
            // textStyle: {
            //     color: "rgba(204,187,225,0.5)",
            // },
            // fillerColor: "rgba(67,55,160,0.4)",
            // borderColor: "rgba(204,187,225,0.5)",
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35,
          },
        ],
        series: [
          {
            type: "bar",
          },
        ],
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("mouseover", () => {
        clearInterval(this.timeID);
      });
      this.chartInstance.on("mouseout", () => {
        this.setInterval();
      });
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.ox_own_chart.offsetWidth / 100) * 2.3;
      const adapterOption = {
        // title: {
        //   textStyle: {
        //     fontSize: titleFontSize,
        //   },
        // },
        series: [
          {
            barWidth: titleFontSize + 20,
            itemStyle: {
              barBorderRadius: [titleFontSize / 2 + 10, titleFontSize / 2 + 10, 0, 0],
            },
          },
        ],
      };
      this.chartInstance.setOption(adapterOption);
      this.chartInstance.resize();
    },
    setInterval() {
      if (this.timeID) {
        clearInterval(this.timeID);
      }
      this.timeID = setInterval(() => {
        this.startValue++;
        this.endValue++;
        if (this.endValue > 6) {
          this.startValue = 0;
          this.endValue = 4;
        }
      }, 2000);
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
    clearInterval(this.timeID);
  },
};
</script>
<style scoped></style>
