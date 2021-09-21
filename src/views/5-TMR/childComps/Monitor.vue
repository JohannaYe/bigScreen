<template>
  <div class="com-container">
    <div class="com-chart" ref="accuracy_chart"></div>
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
      const time = this.msg.map((item) => {
        return item.time;
      });
      const mor = this.msg.map((item) => {
        return item.mor;
      });
      const noon = this.msg.map((item) => {
        return item.noon;
      });
      const night = this.msg.map((item) => {
        return item.night;
      });
      const dataOption = {
        xAxis: [
          {
            data: time,
          },
        ],
        series: [
          {
            name: "早上",
            data: mor,
            type: "line",
            step: "start",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 12,
            itemStyle: {
              color: "#FFFA58",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
          },
          {
            name: "中午",
            data: noon,
            type: "line",
            step: "start",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 12,
            itemStyle: {
              color: "#F85CC1",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
          },
          {
            name: "晚上",
            data: night,
            type: "line",
            step: "start",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 12,
            itemStyle: {
              color: "#7E42FF",
              borderColor: "#fff",
              borderWidth: 3,
              shadowColor: "rgba(0, 0, 0, .3)",
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
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
      this.chartInstance = this.$echarts.init(this.$refs.accuracy_chart);
      const initOption = {
        title: {
          text: "投料过程监控",
          textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 19,
          },
          top: "1%",
          left: "center",
        },
        legend: {
          show: true,
          top: "10%",
          icon: "rect",
          x: "center",
          textStyle: {
            color: "#fff",
          },
          data: ["早上", "中午", "晚上"],
        },
        grid: {
          top: "20%",
          left: "10%",
          right: "5%",
          bottom: "15%",
          // containLabel: true
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#19224D",
          padding: 15,
          axisPointer: {
            type: "none",
          },
        },
        xAxis: {
          type: "category",
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#d1e6eb",
          },
        },
        yAxis: {
          name: "千克",
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            lineHeight: 0,
          },
          color: "#fff",
          splitLine: {
            show: true,
            lineStyle: {
              color: "#383E56",
              width: 1,
            },
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            color: "#d1e6eb",
          },
        },
      };
      this.chartInstance.setOption(initOption);
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.accuracy_chart.offsetWidth / 100) * 2.3;
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
