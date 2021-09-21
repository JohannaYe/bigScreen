<template>
  <div>
    <dv-scroll-board
      :config="config"
      style="width: 100%; height: 8rem"
      @click="getCurrentData"
    />
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
          item.short,
          item.name,
          item.brith,
          item.into,
          item.variety,
          item.status,
        ];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: [
          "耳标号",
          "耳标短号",
          "牛舍名称",
          "出生日期",
          "进场日期",
          "品种",
          "繁殖状态",
        ],
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
          item.short,
          item.name,
          item.brith,
          item.into,
          item.variety,
          item.status,
        ];
        arrlistresult.push(arrlist);
      });
      this.config = {
        header: [
          "耳标号",
          "耳标短号",
          "牛舍名称",
          "出生日期",
          "进场日期",
          "品种",
          "繁殖状态",
        ],
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
    getCurrentData(row) {
      this.$emit("getCurrentData", row);
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>
<style scoped></style>
