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
      type: Object,
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
      const dataOption = {
        grid: {
          bottom: 0,
        },
        series: [
          {
            name: "设计进度",
            min: 0,
            max: this.msg.num1,
            splitNumber: 10,
            type: "gauge",
            radius: "100%",
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#FFA500",
                      },
                      {
                        offset: 0.5,
                        color: "#FFA500",
                      },
                      {
                        offset: 1,
                        color: "#FFA500",
                      },
                    ]),
                  ],
                ],
              },
            },
            splitLine: {
              length: -10,
            },
            axisTick: {
              splitNumber: 0,
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["0%", "90%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 15,
                color: "#fff",
              },
            },
            detail: {
              show: false,
            },

            data: [
              {
                value: this.msg.num1,
                name: "年计划产犊数量:" + this.msg.num1,
              },
            ],
          },
          {
            name: "设计进度",
            type: "gauge",
            radius: "70%",
            min: 0,
            max: this.msg.num1,
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [0.1, "#203add"],
                  [1, "#203add"],
                ],
              },
            },
            splitLine: {
              length: 10,
              color: "#203add",
            },
            axisLabel: {
              // 坐标轴小标记
              show: false,
              textStyle: {
                // 属性lineStyle控制线条样式
                color: "#000",
                fontSize: 15, //改变仪表盘内刻度数字的大小
                shadowColor: "#000", //默认透明
              },
            },
            axisTick: {
              splitNumber: 0,
              color: "#0d1758",
            },
            pointer: {
              width: 5,
            },
            title: {
              offsetCenter: ["0%", "80%"],
              textStyle: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: "bolder",
                fontSize: 15,
                color: "#fff",
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: this.msg.num2,
                name: "已完成:" + this.msg.num2,
              },
            ],
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {};
      this.chartInstance.setOption(initOption);
    },
    async getData() {
      const { data: ret } = await this.$http.get("pasture");
      this.allData = ret.plan1;
      this.updataChart();
    },
    updataChart() {},
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
    this.getData();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.screenAdapter);
  },
};
</script>
<style scoped></style>
