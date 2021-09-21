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
      type: Number,
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
      this.updataChart();
    },
  },
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {
        polar: {
          radius: ["60%", "90%"],
          center: ["50%", "47%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      };
      this.chartInstance.setOption(initOption);
    },
    updataChart() {
      const dataOption = {
        title: [
          {
            text: "疑似确诊率",
            x: "center",
            top: "52%",
            textStyle: {
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: "100",
            },
          },
          {
            text: this.msg + "%",
            x: "center",
            top: "30%",
            textStyle: {
              fontSize: "20",
              color: "#FFFFFF",
              fontFamily: "DINAlternate-Bold, DINAlternate",
              foontWeight: "600",
            },
          },
        ],
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 90,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [this.msg],
            coordinateSystem: "polar",

            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "#ffc493",
                  },
                  {
                    offset: 1,
                    color: "#bd4500",
                  },
                ]),
              },
            },
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["58%"],
            hoverAnimation: false,
            center: ["50%", "47%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#5269EE",
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            startAngle: 80,
            radius: ["92%"],
            hoverAnimation: false,
            center: ["50%", "47%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#5269EE",
            },
            data: [100],
          },
        ],
      };
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
