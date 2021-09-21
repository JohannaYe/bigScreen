<template>
    <div style="width: 90%;height: 90%;top:5%;left:5%"  :id="main_id">
    </div>
</template>

<script>
    import tools from '../../../tool.js';
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
                    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
                    title:{
                        text:'年龄结构',
                        textStyle:{
                            color:'#fff',
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                    },
                    toolbox: {
                        show: false,
                    },
                    // legend: {
                    //     type: 'scroll',
                    //     orient: 'vertical',
                    //     left: '10%',
                    //     align: 'left',
                    //     shou:false,
                    //     top: 'middle',
                    //     textStyle: {
                    //         color: '#8C8C8C',
                    //     },
                    //     height: 100,
                    // },
                    series: [
                        {
                            name: '年龄组成',
                            type: 'pie',
                            radius: [0, 60],

                            data: [
                                { value: this.$store.state.screen.countsByAge.AboveThree, name: '3岁以上' },
                                { value: this.$store.state.screen.countsByAge.TwoThree, name: '2-3岁' },
                                { value: this.$store.state.screen.countsByAge.OneTwo, name: '1-2岁' },
                                // { value: 12, name: '0-1岁' },
                                { value: this.$store.state.screen.countsByAge.ZeroOne, name: '0-1岁' },
                            ],
                        },
                    ],
                })
                console.log(mychart)
                this.autoHover(mychart, {
                    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                    },
                    toolbox: {
                        show: false,
                    },
                    // legend: {
                    //     type: 'scroll',
                    //     orient: 'vertical',
                    //     left: '10%',
                    //     align: 'left',
                    //     shou:false,
                    //     top: 'middle',
                    //     textStyle: {
                    //         color: '#8C8C8C',
                    //     },
                    //     height: 100,
                    // },
                    series: [
                        {
                            name: '业务警种',
                            type: 'pie',
                            radius: [0, 60],

                            data: [
                                { value: 20, name: '国宝' },
                                { value: 30, name: '治安' },
                                { value: 25, name: 'rose3' },
                                { value: 25, name: 'rose4' },
                                { value: 20, name: 'rose5' },
                                { value: 35, name: 'rose6' },
                                { value: 30, name: 'rose7' },
                                { value: 40, name: 'rose8' },
                            ],
                        },
                    ],
                }, 8, 1000);
            }

        }
    }
</script>
