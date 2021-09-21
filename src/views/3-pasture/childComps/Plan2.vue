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
      const dataOption = {
        title: [
          {
            text: "基础母牛" + "     计划年存栏数：350" + "     现存栏数：340",
            left: "center",
            top: 0,
            textStyle: {
              color: "#fff",
              fontSize: "15",
            },
          },
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          position: function (p) {
            //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
          },
        },
        legend: {
          top: "85%",
          itemWidth: 15,
          itemHeight: 15,
          data: ["怀孕母牛数量", "空怀母牛数量"],
          textStyle: {
            color: "rgba(255,255,255,2)",
            fontSize: "15",
          },
        },
        series: [
          {
            name: "数量",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["25%", "60%"],
            color: ["#eea34e", "#82f341"],
            label: {
              show: true,
              fontSize: 15,
            },
            labelLine: { show: true },
            data: [
              { value: this.msg[0].value, name: this.msg[0].name },
              { value: this.msg[1].value, name: this.msg[1].name },
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
