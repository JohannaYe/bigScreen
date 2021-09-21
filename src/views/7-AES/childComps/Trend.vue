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
        return {};
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
      const time = this.msg.map((item) => {
        return item.time;
      });
      const num1 = this.msg.map((item) => {
        return item.num1;
      });
      const num2 = this.msg.map((item) => {
        return item.num2;
      });
      const num3 = this.msg.map((item) => {
        return item.num3;
      });
      const num4 = this.msg.map((item) => {
        return item.num4;
      });
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {
        color: ["#ff5100", "#ffeb7b", "#8fee50", "#666666"],
        title: {
          text: "疫情发展趋势",
          fontSize: "30px",
          x: "center",
          top: 0,
          textStyle: { color: "#FFF", fontSize: "16", fontWeight: "bold" },
        },
        legend: {
          top: "14%",
          data: ["确诊", "疑似", "治愈", "死亡"],
          textStyle: { color: "#fff" },
        },
        tooltip: {
          // show: true
          trigger: "axis",
          axisPointer: { type: "cross" },
        },
        grid: {
          left: "0",
          right: "0",
          top: "15%",
          bottom: "0",
          containLabel: true,
        },
        xAxis: {
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: "#fff", fontSize: 14 },
          },
          axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: "#cccccc" },
          },
          data: time,
        },
        yAxis: {
          name: "    单位：个",
          nameTextStyle: {
            color: "#fff",
            fontSize: 14,
          },
          axisLabel: {
            textStyle: { color: "#fff", fontSize: 14 },
            showMaxLabel: false,
          },
          axisLine: {
            symbol: ["none", "arrow"],
            symbolOffset: [0, 4],
            lineStyle: { color: "#fff" },
          },
          splitLine: { show: false },
          boundaryGap: [0, 0.1],
        },
        series: [
          {
            name: "确诊",
            type: "line",
            symbolSize: 10,
            data: num1,
          },
          {
            name: "疑似",
            type: "line",
            symbolSize: 10,
            data: num2,
          },
          {
            name: "治愈",
            type: "line",
            symbolSize: 10,
            data: num3,
          },
          {
            name: "死亡",
            type: "line",
            symbolSize: 10,
            data: num4,
          },
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
