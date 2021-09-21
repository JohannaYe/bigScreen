<template>
  <div>
    <div class="num">{{ this.msg.num1 }}</div>
    <div class="num">{{ this.msg.num2 }}</div>
    <div class="num">{{ this.msg.num3 }}</div>
    <div class="num">{{ this.msg.num4 }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Object,
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
.num {
  margin-top: 12%;
  margin-bottom: 29%;
  text-align: center;
  font-size: 35px;
  color: #ffeb7b;
  font-family: electronicFont;
}
</style>
