<template>
  <div>
    <div class="num">{{ this.msg }}</div>
    <div class="content">确诊</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Number,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
@font-face {
  font-family: electronicFont;
  src: url(~@/assets/font/DS-DIGIT.TTF);
}
.content {
  margin-top: 5%;
  margin-left: 30%;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  color: #ff5100;
}
.num {
  margin-top: 5%;
  margin-left: 40%;
  text-align: center;
  display: inline-block;
  font-size: 35px;
  color: #ff5100;
  font-family: electronicFont;
}
</style>
