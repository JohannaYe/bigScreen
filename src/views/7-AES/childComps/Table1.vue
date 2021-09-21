<template>
  <div>
    <dv-scroll-board :config="config" style="width: 100%; height: 450px" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Array,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      config: {},
    };
  },
  watch: {
    msg() {
      let arrlistresult = [];
      this.msg.map((item) => {
        let arrlist = [item.id, item.area, item.illness, item.result];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: ["耳标号", "养殖场户", "疾病", "处理结果"],
        rowNum: 6, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        // evenRowBGC: "#171c33", //偶数行
        index: false,
        // columnWidth: [50],
        align: ["center"],
        data: arrlistresult,
      };
    },
  },
  computed: {},
  methods: {
    async getData() {
      const { data: ret } = await this.$http.get("aes");

      let arrlistresult = [];
      ret.todayFeed.map((item) => {
        let arrlist = [item.id, item.area, item.illness, item.result];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: ["耳标号", "养殖场户", "疾病", "处理结果"],
        rowNum: 6, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        // evenRowBGC: "#171c33", //偶数行
        index: false,
        // columnWidth: [50],
        align: ["center"],
        data: arrlistresult,
      };
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
