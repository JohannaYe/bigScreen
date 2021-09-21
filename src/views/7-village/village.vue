<template>
    <div>
        <body
                class="fill-parent"
                dg-chart-options="{title:{show:false},legend:{top:0},grid:{top:25}}"
                dg-chart-auto-resize="true"
                dg-chart-theme="{color:'#F0F0F0',backgroundColor:'transparent',actualBackgroundColor:'#000c3b'}"
        >
        <div class="head">
            <dv-decoration-11 style="width:16%;height:90%;margin:auto;font-weight: bolder;color:greenyellow;font-size: 2em;">

            </dv-decoration-11>
        </div>
        <div class="content">
            <div class="layout layout-left">
                <div class="layout layout-left-top"></div>
                <div class="layout layout-left-center">
                    <threepillar main_id="main33"></threepillar>
                </div>
                <div class="layout layout-left-bottom"></div>
            </div>
            <div class="layout layout-center">
            </div>
            <div class="layout layout-right">
                <div class="layout layout-right-top"></div>
                <div class="layout layout-right-center"></div>
                <div class="layout layout-right-bottom"></div>
            </div>
        </div>
        </body>
    </div>
</template>

<script>
    import threepillar from "./child/threepillar";
    export default {
        name: "village",
        components:{
            threepillar
        },
        created() {
            this.$store.commit('setData','乡村振兴')
        }
    }
</script>

<style scoped>
    body {
        color: #fff;
        margin: 0 0;
        padding: 0 0;
        background: url(~@/assets/2images/bg.png);
    }
    .fill-parent {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    div {
        border: 1px solid red
    }
    .head {
        height: 4rem;
    }
    .content {
        position: absolute;
        top: 4.5rem;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .layout {
        position: absolute;
        width: 30%;
    }
    .layout-left {
        top: 0;
        left: 0%;
        width: 25%;
        height: 100%;
    }
    .layout-center {
        top: 0;
        left: 25%;
        width: 50%;
        height: 100%;
    }
    .layout-right {
        top: 0;
        left: 75%;
        width: 25%;
        height: 100%;
    }
    .layout-left-top{
          top: 0;
          left: 0%;
          width: 100%;
          height: 33%;
      }
    .layout-left-center{
        top: 33%;
        left: 0%;
        width: 100%;
        height: 33%;
    }
    .layout-left-bottom {
        top: 66%;
        left: 0%;
        width: 100%;
        height: 33%;
    }
    .layout-right-top{
        top: 0;
        width: 100%;
        height: 33%;
    }
    .layout-right-center{
        top: 33%;
        width: 100%;
        height: 33%;
    }
    .layout-right-bottom {
        top: 66%;
        width: 100%;
        height: 33%;
    }

</style>
