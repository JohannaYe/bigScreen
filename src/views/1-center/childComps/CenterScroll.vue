<template>
  <div class="scrolltop">
    <vue-loop-scroll direction="up" :speed="30" :index="0" :mouseStop="false">
      {{ this.msg }}
      {{ this.msg }}
      {{ this.msg }}
      {{ this.msg }}
      {{ this.msg }}
      {{ this.msg }}
    </vue-loop-scroll>
  </div>
</template>

<script>
import VueLoopScroll from "../../../common/vueloopscroll";
import "../../../assets/css/vueloopscroll.css";
export default {
  components: {
    VueLoopScroll,
  },
  props: {
    // msg: {
    //   type: String,
    //   default() {
    //     return "";
    //   },
    // },
  },
  data() {
    return {
      msg:'该公司成立于1999年，旗下有16个牧场，生产产奶牛肉牛等'
    };
  },
};
</script>

<style scoped="scoped" lang="scss">
  *{
    padding: 0;
    margin:0;
  }
.scrolltop {
    height: 100%;
    width: 90%;
    position: absolute;
  font-size: 20px;
  color: #03e9f4;
  padding-right: 10%;
  /*padding: 10px 0px 0px 0px;*/
  .vue-loop-scroll-box {
    height: 100%;
  }
}
</style>
