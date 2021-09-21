<template>
  <div class="com-container">
    <div class="com-chart" ref="ox_own_chart"></div>
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
      this.initChart();
    },
  },
  computed: {},
  methods: {
    initChart() {
      const name = this.msg.map((item) => {
        return item.name;
      });
      const value = this.msg.map((item) => {
        return item.value;
      });
      this.chartInstance = this.$echarts.init(this.$refs.ox_own_chart);
      const initOption = {
        tooltip: {},
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 30,
              edgeLength: 24,
            },
            roam: true,
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}" + "\n\n" + "{b}",
                fontSize: 16,
                fontStyle: "400",
              },
            },
            data: [
              {
                name: name[0],
                value: value[0],
                x: 80,
                y: 6,
                symbolSize: 75,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#ff8400",
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: "#ff8400",
                    color: "#11213b",
                  },
                },
              },
              {
                name: name[1],
                value: value[1],
                x: 0,
                y: 0,
                symbolSize: 75,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#03fc62",
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: "#03fc62",
                    color: "#11213b",
                  },
                },
              },
              {
                name: name[2],
                value: value[2],
                x: 0,
                y: 0,
                symbolSize: 75,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#aa61b2",
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: "#aa61b2",
                    color: "#11213b",
                  },
                },
              },
              {
                name: "肉牛价格指数",
                value: "前四",
                symbolSize: 120,
                x: 0,
                y: 0,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#0a95e6",
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: "#0a95e6",
                    color: "#11213b",
                  },
                },
              },
              {
                name: name[3],
                value: value[3],
                x: 0,
                y: 0,
                symbolSize: 75,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#00fff7",
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: "#00fff7",
                    color: "#11213b",
                  },
                },
              },
            ],
            links: [
              {
                source: name[0],
                target: "肉牛价格指数",
              },
              {
                source: name[1],
                target: "肉牛价格指数",
              },
              {
                source: name[2],
                target: "肉牛价格指数",
              },
              {
                source: name[3],
                target: "肉牛价格指数",
              },
            ],
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
      const titleFontSize = (this.$refs.ox_own_chart.offsetWidth / 100) * 2.3;
      const adapterOption = {
        series: [
          {
            barWidth: titleFontSize + 20,
            itemStyle: {
              barBorderRadius: [titleFontSize / 2 + 10, titleFontSize / 2 + 10, 0, 0],
            },
          },
        ],
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
