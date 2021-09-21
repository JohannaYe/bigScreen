<template>
  <div class="com-container">
    <div class="com-chart" ref="map_chart"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props: {},
  data() {
    return {
      chartInstance: null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    async initChart() {
      const _this = this;
      this.chartInstance = this.$echarts.init(this.$refs.map_chart);
      const ret = await axios.get("http://localhost:1314/static/map/china.json");
      this.$echarts.registerMap("china", ret.data);
      const initOption = {
        geo: {
          type: "map",
          map: "china",
          itemStyle: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(147, 235, 248, .2)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(147, 235, 248, .7)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            borderColor: "rgba(147, 235, 248, 1)",
          },
        },
      };
      this.chartInstance.setOption(initOption);
      this.chartInstance.on("click", function (params) {
        _this.$emit("getname", params.name);
      });
    },
    getData() {
      this.updataChart();
    },
    updataChart() {
      const dataOption = {
        series: [
          {
            type: "effectScatter",
            rippleEffect: {
              scale: 5,
              brushType: "stroke",
            },
            coordinateSystem: "geo",
            data: [
              {
                name: "轰天战神",
                value: [116.24, 39.55],
              },
              {
                name: "海燃年",
                value: [114.271522, 22.753644],
              },

              {
                name: "雷阵雨",
                value: [106.54, 29.59],
              },
              {
                name: "kks",
                value: [120.19, 30.26],
              },
            ],
            itemStyle: {
              color: "red",
              shadowBlur: 20,
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{b}",
                color: "red",
                fontWeight: "bold",
                fontSize: 18,
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
    screenAdapter() {
      const adapterOption = {};
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
