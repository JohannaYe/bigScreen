<template>
  <div>
    <table frame="hsides" rules="rows" class="table">
      <thead>
        <tr>
          <th v-for="item in tableHeaderData" :key="item.id">
            {{ item.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.msg" :key="item.id">
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
        { name: "发病日期", fieldname: "time" },
        { name: "疾病类型", fieldname: "type" },
        { name: "疾病名称", fieldname: "name" },
        { name: "发病状态", fieldname: "status" },
        { name: "主治兽医", fieldname: "doctor" },
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
  width: 100%;
  text-align: center;
}
</style>
