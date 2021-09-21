<template>
  <div class="div0">
    <div class="div1 line">平均日增重</div>
    <div class="div2 line sum">{{ this.msg[0] }}</div>
    <div class="div3 line">月称重数</div>
    <div class="div4 line sum">{{ this.msg[1] }}</div>
    <div class="div5 line">估值</div>
    <div class="div6 line sum">{{ this.msg[2] }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Array,
      default() {
        return [];
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
.div0 {
  height: 100%;
}
.line {
  height: 16.6%;
  text-align: center;
  font-size: 20px;
  /* border: 1px dashed #000; */
}
.sum {
  color: #ffeb7b;
  font-size: 30px;
  font-family: electronicFont;
}
</style>
