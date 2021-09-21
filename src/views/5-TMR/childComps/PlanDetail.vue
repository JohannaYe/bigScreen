<template>
  <div>
    <table frame="hsides" rules="rows" class="table">
      <thead class="thead">
        <tr>
          <th v-for="item in tableHeaderData" :key="item.id">
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in msg" :key="item.id">
          <td v-for="field in tableHeaderData" :key="field.id">
            {{ item[field.fieldname] }}
          </td>
        </tr>
      </tbody>
    </table>
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
      tableHeaderData: [
        { name: "班次", fieldname: "classes" },
        { name: "饲料名称", fieldname: "name" },
        { name: "计划量（KG）", fieldname: "planKG" },
        { name: "执行量（KG）", fieldname: "realKG" },
        { name: "执行情况", fieldname: "situation" },
        { name: "操作时间", fieldname: "time" },
      ],
      tableData: [],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.table {
  width: 95%;
  text-align: center;
  margin-right: 20px;
  margin-left: 10px;
}
.thead {
  background-color: rgb(74, 142, 231);
}
</style>
