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
        { name: "牛舍名称", fieldname: "name" },
        { name: "配方类型", fieldname: "type" },
        { name: "配方牛头数", fieldname: "num" },
        { name: "饲喂比例", fieldname: "ratio" },
        { name: "计划总量（KG）", fieldname: "total" },
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
