<template>
  <div class="com-container">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
    <MapChart class="map4"></MapChart>
    <div class="com-chart" ref="ox_own_chart"><MapChart></MapChart></div>
  </div>
</template>

<script>
import MapChart from "@/common/map/MapChart";
export default {
  components: {
    MapChart,
  },
  props: {},
  data() {
    return {
      chartInstance: null,
    };
  },
  watch: {},
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.ox_own_chart);
      const initOption = {};
      this.chartInstance.setOption(initOption);
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
  created() {

  },
  mounted() {
    this.initChart();
    this.getData();
    window.addEventListener("resize", this.sceenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.sceenAdapter);
  },
};
</script>
<style scoped>
.map4 {
  z-index: 9;
}
.com-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.map1 {
  position: absolute;
  width: 33rem;
  height: 33rem;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background: url(~@/assets/map/map.png) no-repeat;
  opacity: 0.3;
}
.map2 {
  position: absolute;
  width: 40rem;
  height: 40rem;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  background: url(~@/assets/map/lbx.png) no-repeat;
  /* background-position: 50%,50%; */
  /* background-size: 100% 100%; */
  opacity: 0.3;
  animation: rotate1 15s linear infinite;
}
/* @keyframes rotate1 {
  form {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
.map3 {
  position: absolute;
  width: 35.5rem;
  height: 35.5rem;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  background: url(~@/assets/map/jt.png) no-repeat;
  /* background-position: 50%,50%; */
  /* background-size: 100% 100%; */
  opacity: 0.3;
  animation: rotate2 15s linear infinite;
}
/* @keyframes rotate2 {
  form {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
} */
</style>
