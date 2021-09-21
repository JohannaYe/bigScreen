<template>
  <swiper>
    <swiper-item>
      <img src="~@/assets/swiper/ox/3.jpg" alt="" />
    </swiper-item>
    <swiper-item>
      <img src="~@/assets/swiper/ox/4.jpg" alt="" />
    </swiper-item>
    <!-- <swiper-item>
      <img src="@/assets/2images/bg.png" alt="" />
    </swiper-item> -->
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/common/swiper/";
export default {
  //   name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
