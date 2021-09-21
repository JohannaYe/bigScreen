<template>
  <div id="app">
    <div class="head">
      <my-select-button></my-select-button>
<!--      <my-title></my-title>-->
      <IsTime></IsTime>
    </div>
    <router-view />
  </div>
</template>
<script>
  import IsTime from "@/components/NowTime";
  import MyTitle from "./components/myTitle";
  import MySelectButton from "./components/MySelectButton";
  export default {
    name: 'App',
    components: {
      // MyTitle,
      MySelectButton,
      IsTime
    }
  }
</script>

<style>
  .head {
    height: 5%;
    min-height: 4rem;
    width: 100%;
    /*padding-left: 1.5rem;*/
    /*padding-right: 1.5rem;*/
    position: relative;
  }
  body {
    color: #fff;
    margin: 0 0;
    padding: 0 0;
    background: url(~@/assets/2images/bg.png);
  }
</style>
