<template>
  <div class="div0">
    <div class="div1">
      <div class="child1">
        牧场总数&nbsp;:
        <div class="num">{{ this.msg.num1 }}</div>
      </div>
      <div class="child2">
        牛只总数&nbsp;:
        <div class="num">{{ this.msg.num2 }}</div>
      </div>
    </div>
    <div class="div4">
      <div class="child41">
        年计划产犊数量&nbsp;:
        <div class="num">{{ this.msg.num3 }}</div>
      </div>
      <div class="child42">
        已完成产犊数量&nbsp;:
        <div class="num">{{ this.msg.num4 }}</div>
      </div>
    </div>
    <div class="div2">
      <div class="child21">育肥牛&nbsp;:</div>
      <div class="child22">
        现已出栏数&nbsp;:
        <div class="num">{{ this.msg.num5 }}</div>
      </div>
      <div class="child23">
        现存栏数&nbsp;:
        <div class="num">{{ this.msg.num6 }}</div>
      </div>
    </div>
    <div class="div3">
      <div class="child31">基础母牛&nbsp;:</div>
      <div class="child32">
        计划年存栏数&nbsp;:
        <div class="num">{{ this.msg.num7 }}</div>
      </div>
      <div class="child33">
        现存栏数&nbsp;:
        <div class="num">{{ this.msg.num8 }}</div>
      </div>
    </div>
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
.color {
  color: #ffeb7b;
}
.num {
  display: inline-block;
  color: #67c23a;
  font-size: 30px;
}
.div0 {
  margin: 0;
  padding: 10px 0px 0px 20px;
  margin-bottom: 40px;
  /* padding: 20px; */
  height: 92%;

  font-family: electronicFont;
  font-size: 25px;
}
.div1 {
  height: 25%;
  display: flex;
}
.child1 {
  flex: 1;
}
.child2 {
  flex: 1;
}
.div2 {
  height: 25%;
  display: flex;
}
.child21 {
  flex: 2;
}
.child22 {
  flex: 3;
}
.child23 {
  flex: 3;
  text-align: center;
}
.div3 {
  height: 25%;
  display: flex;
}
.child31 {
  flex: 2;
}
.child32 {
  flex: 3;
}
.child33 {
  flex: 3;
  text-align: center;
}
.div4 {
  height: 25%;
  display: flex;
}
.child41 {
  flex: 1;
}
.child42 {
  flex: 1;
}
</style>
