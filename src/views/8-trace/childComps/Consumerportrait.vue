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
      this.initChart();
    },
  },
  computed: {},
  methods: {
    initChart() {
      const mdata = this.msg.map((item) => {
        return item.mdata;
      });
      const wdata = this.msg.map((item) => {
        return item.wdata;
      });
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {
        // backgroundColor: '#fff',
        title: {
          text: "消费者画像",
          left: "15%",
          top: "5%",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
        },
        grid: {
          top: "20%",
          bottom: "17%",
        },
        legend: {
          show: true,
          icon: "circle",
          top: "5%",
          right:"20%",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 25,
          textStyle: {
            color: "#fff",
            fontSize: 15,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            type: "category",
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#fff",
              },
              margin: 15,
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            name:"单位：人",
            nameTextStyle:{
            fontSize:14,  
            },
            type: "value",
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "男",
            type: "line",
            data: mdata,
            symbolSize: 6,
            symbol: "circle",
            smooth: true,
            lineStyle: {
              color: "#00b3f4",
            },
            itemStyle: {
              normal: {
                color: "#00b3f4",
                borderColor: "#00b3f4",
              },
            },
          },
          {
            name: "女",
            type: "line",
            data: wdata,
            symbolSize: 6,
            symbol: "circle",
            smooth: true,
            lineStyle: {
              color: "#9E87FF",
            },
            itemStyle: {
              normal: {
                color: "#9E87FF",
                borderColor: "#9E87FF",
              },
            },
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
