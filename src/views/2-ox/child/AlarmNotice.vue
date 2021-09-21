<template>
  <div id="an"></div>
</template>
<script>
export default {
  name: "AlarmNotice",
  components: [],
  mixins: [],
  data() {
    return {
      myChart: {},
      option: {
        color: [
          "#4992ff",
          "#7cffb2",
          "#fddd60",
          "#ff6e76",
          "#05c091",
          "#ff8a45",
          "#8d48e3",
          "#dd79ff",
        ],
        title: {
          text: "预警统计",
          left: "center",
          textStyle: {
            color: "#EEF1FA",
            fontSize: 18,
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["去势预警", "发情配种预警", "牛舍密度预警"],
          textStyle: {
            color: "#EEF1FA",
            fontSize: 12,
            fontWeight: "bold",
          },
        },
        series: [
          {
            name: "预警类别",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            label: {
              formatter: "{b} : {c}",
              fontSize: 12,
            },
            grid: {
              left: "5%",
              right: "8%",
              bottom: "8%",
              containLabel: true,
            },
            data: [
              {
                value: 12,
                name: "去势预警",
              },
              { value: 13, name: "发情配种预警" },
              { value: 5, name: "牛舍密度预警" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("an"));
    if (this.option && typeof this.option === "object") {
      this.myChart.setOption(this.option);
    }
  },
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 15pt;
  font-weight: bold;
}
#an {
  width: 100%;
  height: 100%;
}
</style>