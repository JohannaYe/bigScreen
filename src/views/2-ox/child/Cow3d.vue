<template>
  <div class="container">
    <div class="item front">
      <img src="@/assets/swiper/ox/3.jpg" alt="" />
    </div>
    <div class="item back">
      <img src="@/assets/swiper/ox/3.jpg" alt="" />
    </div>
    <div class="item left">
      <img src="@/assets/swiper/ox/3.jpg" alt="" />
    </div>
    <div class="item right">
      <img src="@/assets/swiper/ox/4.jpg" alt="" />
    </div>
    <div class="item top">
      <img src="@/assets/swiper/ox/4.jpg" alt="" />
    </div>
    <div class="item bottom">
      <img src="@/assets/swiper/ox/4.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Cow3d",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  top:2%;
  width: 58.75%;
  height: 96%;
  position: relative;
  left: 20%;
  transform-style: preserve-3d;
  animation: zhuan linear 8s alternate infinite;
  transform: rotateX(-20deg) rotateY(-20deg);
}

.container .item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.container img {
  width: 100%;
  height: 100%;
}
.container .front {
  transform: translateZ(150px);
}
.container .back {
  transform: rotateY(180deg) translateZ(150px);
}
.container .left {
  transform: rotateY(-90deg) translateZ(150px);
}
.container .right {
  transform: rotateY(90deg) translateZ(150px);
}
.container .top {
  transform: rotateX(90deg) translateZ(150px);
}
.container .bottom {
  transform: rotateX(-90deg) translateZ(150px);
}
@keyframes zhuan {
  0%,
  5% {
    transform: rotateY(90deg);
  }
  20%,
  25% {
    transform: rotateY(180deg);
  }
  40%,
  45% {
    transform: rotateY(270deg);
  }
  60%,
  65% {
    transform: rotateX(90deg);
  }
  95%,
  100% {
    transform: rotateX(-90deg);
  }
}
</style>
