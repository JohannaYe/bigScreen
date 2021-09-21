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
        <tr v-for="item in this.msg.data.index" :key="item.id">
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
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      allData: null,
      tableHeaderData: [
        { name: "测定日期", fieldname: "time" },
        { name: "重量", fieldname: "weight" },
        { name: "十字部高", fieldname: "height" },
        { name: "体高", fieldname: "body" },
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
