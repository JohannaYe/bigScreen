<template>
    <div style="width: 90%;height: 90%;top:5%;left:5%"  :id="main_id">
    </div>
</template>

<script>
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
            autoHover(myChart, option, num, time) {
                var defaultData = { //设置默认值
                    time: 2000,
                    num: 0
                };
                if (!time) {
                    time = defaultData.time;
                }
                if (!num) {
                    num = defaultData.num;
                }

                var count = 0;
                var timeTicket = null;
                timeTicket && clearInterval(timeTicket);
                timeTicket = setInterval(function () {
                    myChart.dispatchAction({
                        type: "downplay",
                        seriesIndex: 0 ,//serieIndex的索引值   可以触发多个
                        dataIndex: (count+num-1)%num
                    });
                    count =count  % num;//增加
                    myChart.dispatchAction({
                        type: "highlight",
                        seriesIndex: 0,
                        dataIndex: count
                    });
                    myChart.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: count
                    });

                    count++;
                    if (count >= num) {
                        count = 0
                    }
                }, time);
                myChart.on("mouseover", function (params) {
                    clearInterval(timeTicket);
                    myChart.dispatchAction({
                        type: "downplay",
                        seriesIndex: 0
                    });
                    myChart.dispatchAction({
                        type: "highlight",
                        seriesIndex: 0,
                        dataIndex: params.dataIndex
                    });
                    myChart.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: params.dataIndex
                    });
                });

                myChart.on("mouseout", function () {
                    timeTicket && clearInterval(timeTicket);
                    timeTicket = setInterval(function () {
                        myChart.dispatchAction({
                            type: "downplay",
                            seriesIndex: 0 //serieIndex的索引值   可以触发多个
                        });
                        myChart.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: count
                        });
                        myChart.dispatchAction({
                            type: "showTip",
                            seriesIndex: 0,
                            dataIndex: count
                        });
                        count++;
                        if (count >= 8) {
                            count = 0
                        }
                    }, 1000);
                });
            },
            //初始化echarts
            echartsInit() {
                //柱形图
                //因为初始化echarts 的时候，需要指定的容器 id='main'
                let mychart=this.$echarts.init(document.getElementById(this.main_id))
                this.$echarts.init(document.getElementById(this.main_id)).setOption({
                    // backgroundColor: '#00265f',
                    title:{
                        text:'养殖种类',
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        top: '15%',
                        // right: '3%',
                        left: '20%',
                        bottom: '12%'
                    },
                    xAxis: [{
                        type: 'category',
                        data:['母牛','种公牛','公牛','阉牛'],
                        //data: ['unknownNum','HolsteinNum','SimmentalNum','AngusNum','HerefordNum','BrownNum'],//Object.keys(this.$store.state.screen.countsByVariety),
                        axisLine: {
                            lineStyle: {
                                color: '#FFFFFF'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            color: '#e2e9ff',
                            textStyle: {
                                fontSize: 14
                            },
                        },
                        axisTick: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        axisLabel: {
                            formatter: '{value}',
                            color: '#e2e9ff',
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(0,186,255,.6)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.12)'
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data:[706,35,31,11],
                        //data: [this.$store.state.screen.countsByVariety.unknownNum,this.$store.state.screen.countsByVariety.HolsteinNum,this.$store.state.screen.countsByVariety.SimmentalNum,this.$store.state.screen.countsByVariety.AngusNum,this.$store.state.screen.countsByVariety.HerefordNum,this.$store.state.screen.countsByVariety.BrownNum],//Object.values(this.$store.state.screen.countsByVariety),
                        barWidth: '28px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                                }], false),
                                shadowColor: 'rgba(0,160,221,1)',
                                shadowBlur: 4,
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                lineHeight: 30,
                                formatter: '{c}',
                                position: 'top',
                                textStyle: {
                                    color: '#00D6F9',
                                    fontSize: 20
                                }

                            }
                        }
                    }]
                })
                this.autoHover(mychart,{
                    // backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        top: '15%',
                        // right: '3%',
                        left: '20%',
                        bottom: '12%'
                    },
                    xAxis: [{
                        type: 'category',
                        data: [],//Object.keys(this.$store.state.screen.countsByVariety),
                        axisLine: {
                            lineStyle: {
                                color: '#FFFFFF'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            color: '#e2e9ff',
                            textStyle: {
                                fontSize: 14
                            },
                        },
                        axisTick: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        axisLabel: {
                            formatter: '{value}',
                            color: '#e2e9ff',
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: 'rgba(0,186,255,.6)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0.12)'
                            }
                        }
                    }],
                    series: [{
                        type: 'bar',
                        data: [],//Object.values(this.$store.state.screen.countsByVariety),
                        barWidth: '28px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                                }], false),
                                shadowColor: 'rgba(0,160,221,1)',
                                shadowBlur: 4,
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                lineHeight: 30,
                                formatter: '{c}',
                                position: 'top',
                                textStyle: {
                                    color: '#00D6F9',
                                    fontSize: 20
                                }

                            }
                        }
                    }]
                },4,1000)




            }

        }
    }
</script>
