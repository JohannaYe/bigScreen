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
      const data = [
        {
          name: "北京",
          value: 0,
        },
        {
          name: "天津",
          value: 0,
        },
        {
          name: "上海",
          value: 0,
        },
        {
          name: "重庆",
          value: 0,
        },
        {
          name: "河北",
          value: 0,
        },
        {
          name: "河南",
          value: 0,
        },
        {
          name: "云南",
          value: 0,
        },
        {
          name: "辽宁",
          value: 0,
        },
        {
          name: "黑龙江",
          value: 0,
        },
        {
          name: "湖南",
          value: 0,
        },
        {
          name: "安徽",
          value: 0,
        },
        {
          name: "山东",
          value: 0,
        },
        {
          name: "新疆",
          value: 0,
        },
        {
          name: "江苏",
          value: 0,
        },
        {
          name: "浙江",
          value: 0,
        },
        {
          name: "江西",
          value: 0,
        },
        {
          name: "湖北",
          value: 0,
        },
        {
          name: "广西",
          value: 0,
        },
        {
          name: "甘肃",
          value: 0,
        },
        {
          name: "山西",
          value: 0,
        },
        {
          name: "内蒙古",
          value: 0,
        },
        {
          name: "陕西",
          value: 0,
        },
        {
          name: "吉林",
          value: 0,
        },
        {
          name: "福建",
          value: 0,
        },
        {
          name: "贵州",
          value: 0,
        },
        {
          name: "广东",
          value: 0,
        },
        {
          name: "青海",
          value: 0,
        },
        {
          name: "西藏",
          value: 0,
        },
        {
          name: "四川",
          value: 0,
        },
        {
          name: "宁夏",
          value: 0,
        },
        {
          name: "海南",
          value: 0,
        },
        {
          name: "台湾",
          value: 0,
        },
        {
          name: "香港",
          value: 0,
        },
        {
          name: "澳门",
          value: 0,
        },
        {
          name: "南海诸岛",
          value: 0,
        },
      ];
      const initOption = {
        title: {
          text: "疫情分布",
          top: "10%",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "20",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["疫情分布"],
        },
        visualMap: {
          textStyle: {
            color: "#fff",
            fontSize: "13",
          },
          type: "piecewise",
          pieces: [
            {
              min: 1000,
              max: 1000000,
              label: "大于等于1000头",
              color: "#ff0000",
            },
            { min: 500, max: 999, label: "确诊500-999头", color: "#ff590b" },
            { min: 100, max: 499, label: "确诊100-499头", color: "#fa920b" },
            { min: 10, max: 99, label: "确诊10-99头", color: "#f3f022" },
            { min: 0, max: 9, label: "确诊0-9头", color: "#0aff99" },
          ],
          color: ["#E0022B", "#E09107", "#A3E00B"],
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        roamController: {
          show: true,
          left: "right",
          //   mapTypeControl: {
          //     china: true,
          //   },
        },
        // bmap: {
        //   //
        // },
        geo: {
          //地理坐标系组件用于地图的绘制
          map: "china",
          roam: false, //不开启缩放和平移
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#F3B329", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            name: "确诊数",
            type: "map", //图表类型
            geoIndex: 0,
            data: data, //图表的数据
          },
          //   {
          //     name: "确诊数",
          //     // type: "scatter",
          //     // coordinateSystem: "bmap",
          //     type: "map",
          //     mapType: "china",
          //     data: data,
          //     // symbolSize: function (val) {
          //     //   return val[2] / 10;
          //     // },
          //     // encode: {
          //     //   value: 2,
          //     // },
          //     // label: {
          //     //     formatter: '{b}',
          //     //     position: 'right',
          //     //     show: false
          //     // },
          //     itemStyle: {
          //       color: "purple",
          //     },

          // emphasis: {
          //   label: {
          //     show: true,
          //   },
          // },
          //   },
          //   {
          //     name: "确诊数",
          //     type: "map",
          //     mapType: "china",
          //     roam: false,
          //     label: {
          //       show: true,
          //       color: "rgb(249, 249, 249)",
          //     },

          //   },
        ],
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
      const dataOption = {};
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
