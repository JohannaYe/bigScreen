<template>
  <div class="com-container">
    <AESMap class="map4"></AESMap>
    <div class="com-chart" ref="history_chart"><AESMap></AESMap></div>
  </div>
</template>

<script>
import AESMap from "@/common/map/AESMap";
export default {
  components: {
    AESMap,
  },
  props: {},
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
  },
  computed: {},
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.history_chart);
      const initOption = {};
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
