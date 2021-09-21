<template>
  <div>
    <button>切换</button>
    <div class="map">
      <div class="gmap"></div>
      <div class="bmap">
        <bmap />
      </div>
    </div>
  </div>
</template>

<script>
import bmap from "../../demo/demo1";
export default {
  components: {
    bmap,
  },
  props: {},
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
<style scoped></style>
