<template>
  <div class="select">
    <span class="iconfont" @click="showChoice = !showChoice"
      ><Button></Button
    ></span>
    <div class="select-con" v-show="showChoice">
      <div class="item" @click="itemClick1">中心级</div>
      <div class="item" @click="itemClick3">牧场级</div>
      <div class="item" @click="itemClick2">牛级</div>
      <div class="item" @click="itemClick4">称重级</div>
      <div class="item" @click="itemClick5">TMR</div>
      <div class="item" @click="itemClick6">地磅级</div>
      <div class="item" @click="itemClick8">溯源</div>
      <div class="item" @click="itemClick7">疫情监测</div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button,
  },
  props: {},
  data() {
    return {
      showChoice: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemClick1() {
      this.$router.replace("/mycenter");
      this.showChoice = false;
    },
    itemClick2() {
      this.$router.replace("/ox");
      this.showChoice = false;
    },
    itemClick3() {
      this.$router.replace("/pasture");
      this.showChoice = false;
    },
    itemClick4() {
      this.$router.replace("/myweight");
      this.showChoice = false;
    },
    itemClick5() {
      this.$router.replace("/TMR");
      this.showChoice = false;
    },
    itemClick6() {
      this.$router.replace("/myweight");
      this.showChoice = false;
    },
    itemClick7() {
      this.$router.replace("/AES");
      this.showChoice = false;
    },
    itemClick8() {
      this.$router.replace("/trace");
      this.showChoice = false;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.select {
  position: absolute;
  font-size: 25px;
  z-index: 99;
  color: white;
  cursor: pointer;

  top: 0%;
  left: 2%;
  .iconfont {
    margin-left: 10px;
    margin-top: 100px;
  }
}
.item {
  color: #03e9f4;
}
.select-con {
  background: rgb(14, 14, 34);
}
</style>
