<template>
    <div style="width: 93%;height: 90%; top: 5%; left: 3%; position: absolute"  id="ma">

    </div>
</template>

<script>
    let fontColor = '#30eee9';
    let option = {
        backgroundColor: '#11183c',
        grid: {
            left: '5%',
            right: '5%',
            top: '20%',
            bottom: '5%',
            containLabel: true,
        },
        tooltip: {
            show: true,
            trigger: 'item',
        },
        legend: {
            show: true,
            x: 'center',
            y: '35',
            icon: 'stack',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#1bb4f6',
            },
            data: ['公牛', '母牛', '公牛日增重'],
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: fontColor,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#397cbc',
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#195384',
                    },
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            },
        ],
        yAxis: [
            {
                type: 'value',
                name: '体重',
                min: 0,
                max: 1000,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#2ad1d2',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#27b4c2',
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#11366e',
                    },
                },
            },
            {
                type: 'value',
                name: '日增重',
                min: 0,
                max: 1000,
                axisLabel: {
                    formatter: '{value} kg',
                    textStyle: {
                        color: '#186afe',
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#186afe',
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#11366e',
                    },
                },
            },
        ],
        series: [
            {
                name: '母牛',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#0092f6',
                        lineStyle: {
                            color: '#0092f6',
                            width: 1,
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,146,246,0.9)',
                                },
                            ]),
                        },
                    },
                },
                markPoint: {
                    itemStyle: {
                        normal: {
                            color: 'red',
                        },
                    },
                },
                data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
            },
            {
                name: '公牛',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,

                itemStyle: {
                    normal: {
                        color: '#00d4c7',
                        lineStyle: {
                            color: '#00d4c7',
                            width: 1,
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,212,199,0.9)',
                                },
                            ]),
                        },
                    },
                },
                data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
            },
            {
                name: '公牛日增重',
                type: 'line',
                stack: '总量',
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#aecb56',
                        lineStyle: {
                            color: '#aecb56',
                            width: 1,
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(114,144,89,0.9)',
                                },
                            ]),
                        },
                    },
                },
                data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
            },
        ],
    };

    import echarts from 'echarts'
    //通过this.$echarts来使用
    export default {
        name: "FanChart",
        props:{
            main_id:{
                type:String,
                require:true
            }
        },
        mounted(){
            // 在通过mounted调用即可
            this.echartsInit()
        },
        methods: {
            //初始化echarts
            echartsInit() {
                //柱形图
                //因为初始化echarts 的时候，需要指定的容器 id='main'
                this.$echarts.init(document.getElementById("ma")).setOption(option
                    // {
        //             // backgroundColor: '#00265f',
        //             tooltip: {
        //                 trigger: 'axis',
        //                 axisPointer: {
        //                     type: 'shadow',
        //                     xAxis: [{}],
        //                 }
        //             },
        //             grid: {
        //                 top: '15%',
        //                 // right: '3%',
        //                 left: '20%',
        //                 bottom: '12%'
        //             },
        //                 type: 'category',
        //                 data: ['一', '二', '三', '四',],
        //                 axisLine: {
        //                     lineStyle: {
        //                         color: '#FFFFFF'
        //                     }
        //                 },
        //                 axisLabel: {
        //                     margin: 10,
        //                     color: '#e2e9ff',
        //                     textStyle: {
        //                         fontSize: 14
        //                     },
        //                 },
        //                 axisTick: {
        //                     show: false
        //                 }
        //             }],
        //             yAxis: [{
        //                 axisLabel: {
        //                     formatter: '{value}',
        //                     color: '#e2e9ff',
        //                 },
        //                 axisTick: {
        //                     show: false
        //                 },
        //                 axisLine: {
        //                     show: false,
        //                     lineStyle: {
        //                         color: 'rgba(0,186,255,.6)'
        //                     }
        //                 },
        //                 splitLine: {
        //                     lineStyle: {
        //                         color: 'rgba(255,255,255,0.12)'
        //                     }
        //                 }
        //             }],
        //             series: [{
        //                 type: 'bar',
        //                 data: [90, 80, 65, 53, ],
        //                 barWidth: '28px',
        //                 itemStyle: {
        //                     normal: {
        //                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                             offset: 0,
        //                             color: 'rgba(0,244,255,1)' // 0% 处的颜色
        //                         }, {
        //                             offset: 1,
        //                             color: 'rgba(0,77,167,1)' // 100% 处的颜色
        //                         }], false),
        //                         shadowColor: 'rgba(0,160,221,1)',
        //                         shadowBlur: 4,
        //                     }
        //                 },
        //                 label: {
        //                     normal: {
        //                         show: true,
        //                         lineHeight: 30,
        //                         formatter: '{c}',
        //                         position: 'top',
        //                         textStyle: {
        //                             color: '#00D6F9',
        //                             fontSize: 20
        //                         }
        //
        //                     }
        //                 }
        //             }]

                // }
                )
            }

        }
    }
</script>
