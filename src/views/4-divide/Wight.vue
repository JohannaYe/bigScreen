<template>
  <div>
    <body
      dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
      dg-chart-auto-resize="true"
      dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"
    >
      <header></header>
      <main>
        <div class="left">
          <div class="top">
            <rotation></rotation>
          </div>
          <div class="bottom"></div>
        </div>
        <div class="right">
          <div class="top"></div>
          <div class="bottom">
            <div class="left"></div>
            <div class="right">
              <div class="top"></div>
              <div class="bottom">
                <div class="left"></div>
                <div class="right"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </body>
  </div>
</template>

<script>
import Rotation from "../../components/Rotation.vue";
export default {
  name: "Wight",
  components: { Rotation },
  data() {
    return {
      url: {},
    };
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  border: 1px solid pink;
}
body {
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(~@/assets/2images/bg.png);
}

header {
  height: 4rem;
}
main {
  position: absolute;
  top: 4.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  .left {
    flex-grow: 2.5;
    display: flex;
    flex-direction: column;
    .top {
      flex-grow: 3;
    }
    .bottom {
      flex-grow: 7;
    }
  }
  .right {
    flex-grow: 7.5;
    display: flex;
    flex-direction: column;
    .top {
      flex-grow: 1;
    }
    .bottom {
      flex-grow: 1;
      display: flex;
      .left {
        flex-grow: 6.5;
      }
      .right {
        flex-grow: 3.5;
        .bottom {
          .left {
            flex-grow: 1;
          }
          .right {
            flex-grow: 1;
          }
        }
      }
    }
  }
}
</style>