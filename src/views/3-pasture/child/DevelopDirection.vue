<template>
  <div id="deve"></div>
</template>
<script>
export default {
  name: "DevelopDirection",
  data() {
    return {
      data: {
        color: [
          "#91cc75",
          "#fac858",
          "#ee6666",
          "#73c0de",
          "#3ba272",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc",
        ],
        textStyle: {
          fontSize: 14,
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "培育方向",
            type: "pie",
            radius: ["40%", "60%"],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: "6%",
            },
            label: {
              position: "outer",
              distanceToLabelLine: 15,
              formatter: "{b} : {d}%",
              fontSize: 14,
              fontWeight: "bold",
            },
            data: [
              { value: 999, name: "未指定" },
              { value: 322, name: "育肥牛" },
              { value: 456, name: "基础母牛" },
            ],
          },
        ],
      },
      myChart: {},
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      this.myChart = this.$echarts.init(document.getElementById("deve"));
      this.data && this.myChart.setOption(this.data);
    },
  },
};
</script>
<style lang="less" scoped>
#deve {
  width: 100%;
  height: 100%;
}
</style>

