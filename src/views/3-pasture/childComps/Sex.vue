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
    },
    msg() {
      const dataOption = {
        series: [
          {
            name: "性别比例",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["25%", "60%"],
            color: ["#259adf", "#e78326"],
            label: { show: false },
            labelLine: { show: false },
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
      const initOption = {
        title: [
          {
            text: "性别比例",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: "20",
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
          top: "75%",
          itemWidth: 15,
          itemHeight: 15,
          data: ["公", "母"],
          textStyle: {
            color: "rgba(255,255,255,2)",
            fontSize: "20",
          },
        },
      };
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
