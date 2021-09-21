<template>
  <div>
    <dv-scroll-board :config="config" style="width: 100%; height: 19rem" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    msg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      allData: null,
      config: {},
      currentName: "",
      currentData: {},
    };
  },
  watch: {
    msg() {
      let arrlistresult = [];
      this.msg.map((item) => {
        let arrlist = [
          item.id,
          item.weight,
          item.time,
          item.month,
          item.sex,
          item.export,
        ];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: ["耳标号", "体重", "采集时间", "月龄", "性别", "分群出口"],
        rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
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
      const { data: ret } = await this.$http.get("ox");
      this.allData = ret;
      let arrlistresult = [];
      this.msg.map((item) => {
        let arrlist = [
          item.id,
          item.weight,
          item.time,
          item.month,
          item.sex,
          item.export,
        ];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: ["耳标号", "体重", "采集时间", "月龄", "性别", "分群出口"],
        rowNum: 5, //表格行数
        headerHeight: 35,
        headerBGC: "#0f1325", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: false,
        // columnWidth: [50],
        align: ["center"],
        data: arrlistresult,
      };
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>
<style scoped></style>
