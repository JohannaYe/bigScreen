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
      const date = this.msg.map((item) => {
        return item.date;
      });
      const value1 = this.msg.map((item) => {
        return item.value1;
      });
      const value2 = this.msg.map((item) => {
        return item.value2;
      });
      const value3 = this.msg.map((item) => {
        return item.value3;
      });
      const dataOption = {
        title: [
          {
            text: "育肥牛",
            top: "5%",
            left: "2%",
            textStyle: {
              color: "#fff",
              fontSize: "15",
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          top: "20%",
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        legend: {
          data: ["计划出栏数", "现已出栏数", "现存栏数"],
          top: "8%",
          textStyle: {
            fontSize: 14,
            color: "#fff",
          },
          itemWidth: 12,
          itemHeight: 12,
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          data: date,
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: "Microsoft YaHei",
            },
          },
        },

        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "white",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
            },
          },
          axisLabel: {},
        },
        dataZoom: [
          {
            show: false,
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
            name: "计划出栏数",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#fccb05",
                  },
                  {
                    offset: 1,
                    color: "#f5804d",
                  },
                ]),
                barBorderRadius: 12,
              },
            },
            data: value1,
          },
          {
            name: "现已出栏数",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#8bd46e",
                  },
                  {
                    offset: 1,
                    color: "#09bcb7",
                  },
                ]),
                barBorderRadius: 11,
              },
            },
            data: value2,
          },
          {
            name: "现存栏数",
            type: "bar",
            barWidth: "15%",
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#248ff7",
                  },
                  {
                    offset: 1,
                    color: "#6851f1",
                  },
                ]),
                barBorderRadius: 11,
              },
            },
            data: value3,
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
