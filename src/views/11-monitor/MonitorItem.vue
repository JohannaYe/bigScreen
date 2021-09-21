<template>
  <div class="monitor-item">
    <video width="100%" height="80%" controls="controls" autoplay="autoplay">
      <source :src="showVideo" type="video/mp4" />
    </video>
    <div class="monitor-info">
      <!-- <p>{{ monitorItem.title }}</p> -->
      <p style="text-align: center">
        <span class="area">{{ monitorItem.cowsh }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    monitorItem: {
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
  computed: {
    showVideo() {
      return this.monitorItem.src;
    },
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.monitor-item {
  margin-left: 2%;
  margin-right: 1.2%;
  margin-top: 4%;
  width: 30%;
  height: 40%;
  position: relative;
  float: left;
}
.monitor-info {
  /* 信息 */
  font-size: 20px;
  /* text-align: center; */
  margin: auto;
  left: 0;
  right: 0;
}
.monitor-info p {
  /* 标题 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.name {
  /* 价格 */
  margin-right: 0.85rem;
}
</style>
