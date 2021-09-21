<template>
  <div id="main"></div>
</template>
<script>
export default {
  name: "PeopleStructure",
  data() {
    return {
      myChart: null,
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.drawChart();
    window.addEventListener("resize", () => {
      this.myChart.resize();
      this.drawChart();
    });
  },
  beforeDestroy() {
    window.onresize = null;
  },
  methods: {
    nowSize(val, initWidth = 1920) {
      let fonval = val * (document.documentElement.clientWidth / initWidth);
      return fonval;
    },
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          top: "10%",
          left: "10%",
          text: "牧场人员结构",
          textStyle: {
            color: "#EEF1FA",
            fontSize: this.nowSize(25),
            fontWeight: "bold",
          },
        },
        textStyle: {
          color: "#B9B8CE",
          fontFamily: "Microsoft YaHei",
          fontSize: this.nowSize(10),
          margin: 0,
          padding: 0,
        },
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#5052EE", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#AB6EE5", // 100% 处的颜色
            },
          ],
          global: false,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "18%",
          left: "8%",
          right: "8%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.1],
        },
        yAxis: {
          type: "category",
          data: ["其他", "信息员", "饲喂员", "兽医", "场长"],
        },
        series: [
          {
            type: "bar",
            data: [14, 4, 2, 5, 1],
          },
        ],
      };

      if (option && typeof option === "object") {
        this.myChart.setOption(option);
      }
    },
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
}
</style>
