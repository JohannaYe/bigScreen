<template>
  <div>
    <div class="num2">{{ 555 }}</div>
    <div class="content2">今日离场</div>
    <div class="num">{{ this.screen2.total }}</div>
    <div class="content3">存栏总数</div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    // msg: {
    //   type: Number,
    //   default() {
    //     return 0;
    //   },
    // },
  },
  data() {
    return {

    };
  },
  watch: {},
  computed: {
    screen2(){
      return this.$store.state.screen2
    }
  },
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
.content3 {
  /*margin-top: 9%;*/
  margin-left: 7.3%;
  /*text-align: center;*/
  padding-top: 1%;
  display: inline-block;
  font-size: 2rem;
  float:left;
  color: white;
}
.num {
  /*margin-left: 15%;*/
  /*text-align: center;*/
  padding-top: 0.9%;
  display: inline-block;
  font-size: 2.5rem;
  color: #ffeb7b;
  font-family: electronicFont;
  float:right;
  margin-right: 20%;
}
.content2 {
 padding-top: 1%;
  /*margin-left: 20%;*/
  /*text-align: center;*/
  display: inline-block;
  font-size: 2rem;
  float:right;
  color: white;
}
.num2 {
  padding-top: 0.5%;
  /*margin-left: 15%;*/
  /*text-align: center;*/
  display: inline-block;
  font-size: 2.5rem;
  color: #ffeb7b;
  font-family: electronicFont;
  float:right;
  margin-right: 10%;
}
</style>
