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
    msg() {
      const dataOption = {
        series: [
          {
            name: "年龄分布",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "60%"],
            color: ["#065aab", "#27e982", "#a9ee2a", "#fa9510"],
            label: { show: false },
            labelLine: { show: false },
            data: [
              { value: this.msg[0].value, name: this.msg[0].name },
              { value: this.msg[1].value, name: this.msg[1].name },
              { value: this.msg[2].value, name: this.msg[2].name },
              { value: this.msg[3].value, name: this.msg[3].name },
            ],
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    theme() {
      this.chartInstance.dispose();
      this.initChart();
      this.screenAdapter();
    },
  },
  computed: {},
  methods: {
    initChart() {
      // var bg1 =
      // var back1 = new Image();
      // back1.src = bg1;
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {
        title: [
          {
            text: "年龄结构",
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
          data: ["0-1岁", "1-2岁", "2-3岁", "3岁以上"],
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
