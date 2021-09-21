<template>
  <div>
    <p class="btn">
      菜单
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </p>
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
.btn {
  margin: 0;
  padding: 2px 25px;
  overflow: hidden;
  color: #03e9f4;

  position: relative;
  letter-spacing: 2px;
  font-size: 25px;
}
.btn:hover {
  background-color: #03e9f4;
  border-radius: 5px;
  color: #fff;
  box-shadow: 0 0 5px 0 #03e9f4, 0 0 25px 0 #03e9f4, 0 0 50px 0 #03e9f4,
    0 0 100px 0 #03e9f4;
}
.btn span {
  position: absolute;
}
.btn span:nth-child(1) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, transparent, #03e9f4);

  left: -100%;
  top: 0;
  animation: line1 1s linear infinite;
}
@keyframes line1 {
  50%,
  100% {
    left: 100%;
  }
}
.btn span:nth-child(2) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);

  right: 0;
  top: -100%;
  animation: line2 1s 0.25s linear infinite;
}
@keyframes line2 {
  50%,
  100% {
    top: 100%;
  }
}
.btn span:nth-child(3) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(right, transparent, #03e9f4);

  right: -100%;
  bottom: 0;
  animation: line3 1s 0.5s linear infinite;
}
@keyframes line3 {
  50%,
  100% {
    right: 100%;
  }
}
.btn span:nth-child(4) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(bottom, transparent, #03e9f4);

  left: 0;
  bottom: -100%;
  animation: line4 1s 0.75s linear infinite;
}
@keyframes line4 {
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
