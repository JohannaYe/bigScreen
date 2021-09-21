<template>
  <div>
    <div class="scrolltop">
      <vue-loop-scroll direction="up" :speed="30" :index="0" :mouseStop="true">
        <div v-for="(item, key) in msg" :key="key">
          {{ item }}
          <br /><br />
          <br /><br />
        </div>
      </vue-loop-scroll>
    </div>
  </div>
</template>

<script>
import VueLoopScroll from "@/common/vueloopscroll";

export default {
  props: {
    msg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    VueLoopScroll,
  },
  data() {
    return {};
  },
};
</script>

<style scoped="scoped" lang="scss">
.scrolltop {
  color: #fff;
  padding: 0px 0px 0px 0px;
  left: 0%;
  .vue-loop-scroll-box {
    width: 450px;
    height: 225px;
  }
}
</style>
