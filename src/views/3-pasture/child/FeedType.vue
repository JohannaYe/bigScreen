<template>
  <div>
    <div id="title">养殖种类</div>
    <dv-capsule-chart id="content" :config="config" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "公牛",
            value: 0,
          },
          {
            name: "母牛",
            value: 0,
          },
          {
            name: "种公牛",
            value: 0,
          },
          {
            name: "阉牛",
            value: 0,
          },
        ],
        colors: ["#e062ae", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "头",
        showValue: true,
      },
    };
  },
  watch:{
    screen2(){
      deep:true,
             this.config={
               data: [
                 {
                   name: "公牛",
                   value: this.$store.state.screen2.byCultured.bull,
                 },
                 {
                   name: "母牛",
                   value: this.$store.state.screen2.byCultured.cow,
                 },
                 {
                   name: "种公牛",
                   value: this.$store.state.screen2.byCultured.kindbull,
                 },
                 {
                   name: "阉牛",
                   value:this.$store.state.screen2.byCultured.steer,
                 },
               ],
               colors: ["#e062ae", "#e690d1", "#32c5e9", "#96bfff"],
               unit: "头",
               showValue: true,
             }
    }
  },
  computed: {
    screen2(){
      return this.$store.state.screen2
    }
  }
};
</script>
<style scoped>
#title {
  position: absolute;
  top: 8%;
  left: 12%;
  font-size: 15pt;
  color: burlywood;
  font-weight: bold;
}
#content {
  position: absolute;
  top: 20%;
  width: 95%;
  height: 80%;
}
</style>
