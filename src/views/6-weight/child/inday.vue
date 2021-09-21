<template>
    <div style="width: 100%;height: 100%" id="inday">
        <div class="number">{{number}}</div>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
    let myChart = document.getElementById("inday");
    let colors = ['#5470c6']//, '#91cc75', '#fac858', '#ee6666', "#73c0de", '#3ba272', '#fc8452', "#9a60b4", "#ea7ccc"];
    let options = {
        title: {
            text: '在场天数'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
            {
                name: 'inday',
                type: 'pie',
                selectedMode: 'single',
                radius: ['50%', '70%'],
                clockwise: false,
                label: {
                    normal: {
                        position: 'outside',
                        formatter: '{b}\n{c}天({d}%)'
                    }
                },
                data: [
                    {value: 65, name: '使用'},
                    {value: 15, name: '未使用'}
                ]
            }
        ],
        graphic: { // 添加原生图形元素组件
            elements: [{
                type: 'text', // 组件类型
                left: 'center', //定位
                top: '43%', // 定位
                style: { // 样式
                    text: '容量', //文字
                    fontSize: 13, //文字大小
                    textAlign: 'center', //定位
                    width: 30,
                    height: 30,
                    fill: 'blue' // 字体颜色
                }
            },
                {
                    type: 'text',
                    left: 'center',
                    top: '52%',
                    style: {
                        text: '80GB',
                        fontSize: 18,
                        textAlign: 'center',
                        width: 30,
                        height: 25,
                        fill: '#3BA5D9'
                    }
                }]
        }
    };


    //鼠标事件：'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'。

    // myChart.on('mouseover', function(params) {
    //     stopTimer();
    // });
    //
    // myChart.on('mouseout', function(params) {
    //     startTimer();
    // });


    var timer;

    function doing() {
        let option = myChart.getOption();
        option.series[3].startAngle = option.series[3].startAngle - 1;
        option.series[6].data[0].value = option.series[6].data[0].value + 1;
        myChart.setOption(option);

    }

    function startTimer() {

        timer = setInterval(doing, 86400000);

    }

    function stopTimer() {

        clearInterval(timer);

        // xzTimer = null;

    }

    setTimeout(startTimer, 500);
    /*
    window.onload = function() {
        setTimeout(startRotate, 500);
    }
    */
    import echarts from "echarts"

    export default {
        name: "inday",
        data() {
            return {
                // title:'',
                // number:0,
            }
        },
        props: {
            title: {type: String, default: '在场天数'},
            number: {type: Number, default: 10}
        },
        // computed:{
        //     title:'',
        //     number:''
        // },
        mounted() {

            // 在通过mounted调用即可
            //this.echartsInit()
        },
        methods: {
            //初始化echarts
            echartsInit() {
                this.$echarts.init(document.getElementById("inday")).setOption(options);
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: electronicFont;
        src: url(~@/assets/font/DS-DIGIT.TTF);
    }

    .title {
        font-size: 1rem;
        text-align: center;
        color: white;
    }

    .number {
        text-align: center;
        font-size: 35px;
        color: #ffeb7b;
        font-family: electronicFont;
    }
</style>
