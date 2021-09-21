<template>
  <div>
    <div class="content">{{ this.msg.num1 }}</div>
    <div class="content">{{ this.msg.num2 }}</div>
    <div class="content">{{ this.msg.num3 }}</div>
    <div class="content">{{ this.msg.num4 }}</div>
    <div class="content">{{ this.msg.num5 }}</div>
    <div class="content">{{ this.msg.num6 }}</div>
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
.content {
  margin-top: -4%;
  margin-bottom: 27%;
  text-align: center;
  font-size: 20px;
  border: rgb(39, 161, 218) dashed 2px;
}
</style>
