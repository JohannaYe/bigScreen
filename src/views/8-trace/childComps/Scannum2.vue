<template>
  <div>
    <p class="content">今日扫码量</p>
    <div class="num">{{ this.msg }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Number,
      default() {
        return 0;
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
  float: left;
  text-align: center;
  margin-top: 0;
  margin-left: 10%;
  font-size: 25px;
}
.num {
  text-align: center;
  font-size: 35px;
  color: #ffeb7b;
  font-family: electronicFont;
}
</style>
