<template>
  <div>
    <span>{{ weather }}</span
    ><span v-if="lower">{{ lower }}~{{ higher }}</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      lower: "",
      higher: "",
      weather: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    getWeather() {
      this.$axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=郑州")
        .then((res) => {
          this.weather = res.data.data.forecast[0].type
            ? res.data.data.forecast[0].type
            : "";
          this.lower = res.data.data.forecast[0].low.substr(2);
          this.higher = res.data.data.forecast[0].high.substr(2);
          console.log(res.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getTianQi() {
      var result = await this.$axios.get(
        "http://wthrcdn.etouch.cn/weather_mini?city=" + "郑州"
      );
      console.log(result.data.data.forecast);
      this.City = result.data.data.forecast[0];
      console.log(this.City);
    },
  },
  created() {
    // this.getWeather();
    this.getTianQi();
  },
  mounted() {},
};
</script>
<style scoped></style>
