<template>
<!--    <div>-->
<!--        <h2 id="bar-title">{{title}}</h2>-->
        <div id="bar-basic" ></div>
<!--    </div>-->
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "myBar",
        data() {
            return {
                title: '柱状图',
                option: {
                    // xAxis:{},
                    // yAxis:{},
                    // series:[]
                },
                myBar :{}//= echarts.init(document.getElementById("bar-basic"))
            }
        },
        mounted() {
            // let this__ = this;
            this.myBar = echarts.init(document.getElementById("bar-basic"))
            this.option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };
            this.myBar.setOption(this.option);

            //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            window.addEventListener('resize', function () {
                this.myBar.resize()
            });


        },
        methods: {},
        watch: {},
        created() {

        }
    }
</script>

<style scoped>

    h2 {
        text-align: center;
        line-height: 20px;
    }

    #bar-basic {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        /*border: #8fee50 2px solid;*/
    }

</style>
