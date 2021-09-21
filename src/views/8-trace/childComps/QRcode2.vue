<template>
  <div>
    <div class="num"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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
  text-align: center;
  font-size: 25px;
}
.num {
  text-align: center;
  font-size: 40px;
  color: #000000;
  font-family: electronicFont;
}
</style>