<template>
  <div class="chart">
    <div class="div1">
      <div class="ox-item" align="center">耳标号</div>
      <div class="ox-item" align="center">{{ this.msg.id }}</div>
      <div class="ox-item">月龄：{{ this.msg.month }}</div>
      <div class="ox-item">性别：{{ this.msg.sex }}</div>
      <div class="ox-item">品种：{{ this.msg.variety }}</div>
      <div class="ox-item">毛色：{{ this.msg.color }}</div>
    </div>
    <div class="div2">
      <div class="ox-item" align="center">重量</div>
      <div class="ox-item" align="center">{{ this.msg.weight }}</div>
      <div class="ox-item">采集时间：{{ this.msg.time }}</div>
      <div class="ox-item">上次重量：{{ this.msg.lastWeight }}</div>
      <div class="ox-item">上次时间：{{ this.msg.lastTime }}</div>
    </div>
    <div class="div3"></div>
    <div class="div4">
      <div class="ox-item" align="center">分群</div>
      <div class="ox-item hhhh" align="center">{{ this.msg.export }}</div>
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
    return {
      allData: null,
      currentId: "",
      currentMessage: {},
    };
  },
  watch: {},
  computed: {},
  methods: {
    // async getData() {
    //   const { data: ret } = await this.$http.get("divide");
    //   this.allData = ret[0].message;
    //   this.currentId = this.allData[0].id;
    //   this.currentMessage = this.allData[0];
    // },
  },
  created() {
    // this.getData();
  },
  mounted() {},
};
</script>
<style scoped>
.chart {
  display: flex;
  margin-top: 5%;
  font-size: 20px;
}
.div1 {
  flex: 1;
}
.div2 {
  flex: 1;
}
.div3 {
  flex: 1;
  background-color: blue;
}
.div4 {
  flex: 1;
}
.hhhh {
  padding-top: 30%;
}
.ox-item {
  margin-bottom: 10px;
}
</style>
