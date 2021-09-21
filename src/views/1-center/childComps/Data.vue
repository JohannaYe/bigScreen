<template>
    <div class="layout layout-right-top">
        <div id="pasture" class="layout layout-right-top1"></div>
        <div id="statistic" class="layout layout-right-top2"></div>
        <div id="cowshed" class="layout layout-right-top3"></div>
        <div id="cow1" class="layout layout-right-top4"></div>
        <div id="cow2" class="layout layout-right-top5"></div>
        <div id="cow3" class="layout layout-right-top6"></div>
        <div class="layout layout-right-top7">
            <div id="community" class="layout layout-right-top7-top"></div>
            <div id="user" class="layout layout-right-top7-bottom"></div>
        </div>
    </div>
</template>

<script>
    import WatchState from "../../../mixins/WatchState";
    import { mapActions, mapGetters } from 'vuex'
    const colorList = ['#03DDFF', '#835CFF', '#FDD56A', '#2ab323', '#FD866A', '#AE87FF', '#1b2fff']
    function addDt(a,b){
        let currentIndex = -1;
        setInterval(function () {
            var dataLength = b.series[0].data.length;
            // 取消之前高亮的图形
            a.dispatchAction({
                type: "downplay",
                seriesIndex: 0,
                dataIndex: currentIndex,
            });
            currentIndex = (currentIndex + 1) % dataLength;
            // 高亮当前图形
            a.dispatchAction({
                type: "highlight",
                seriesIndex: 0,
                dataIndex: currentIndex,
            });
            // 显示 tooltip
            a.dispatchAction({
                type: "showTip",
                seriesIndex: 0,
                dataIndex: currentIndex,
            });
        }, 1000);
    }
    export default {
        name: "Data",
        // watch:{
        //     screen(){
        //         deep:true,
        //        this.drawChart()
        //     }
        // },
        mixins: [WatchState],
        created(){

        },
        mounted(){
            setTimeout(()=>{
                this.drawChart()
                window.addEventListener('resize',()=>{
                    this.drawChart();
                })
            })
        },
        data(){
          return {
              screendata:{
            }
          }
        },
        // computed:{
        //     screen(){
        //         return this.$store.state.screen
        //     }
        // },
        methods:{
            fontSize(res){
                let docEl = document.documentElement,
                    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
                if (!clientWidth) return;
                let fontSize = 100 * (clientWidth / 1920);
                return res*fontSize;
            },
          drawChart(){
              let pastureOption = {
                  title: {
                      text: '牧场总数',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: this.fontSize(0.2),
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[params.dataIndex]
                              }
                          }
                      },
                      label: {
                          show: false,
                          // position: 'outside',
                          // formatter: '{b|{b}}\n{a|{d}%}\n{hr|}',
                          // rich: {
                          //     hr: {
                          //         backgroundColor: 't',
                          //         width: 3,
                          //         height: 3,
                          //         borderRadius: 3,
                          //         padding: [3,3,0,-12]
                          //     },
                          //     a: {
                          //         align: 'center',
                          //         padding: [-20,10,0,10],
                          //         height: 20
                          //     },
                          //     b: {
                          //         padding: [-20,10,-30,10]
                          //     }
                          // }
                      },
                      labelLine: {
                          normal: {
                              show: false,
                              // length: 20,
                              // length2: 30,
                              // lineStyle: {
                              //     width: 1
                              // }
                          }
                      },
                      data: [{
                          'name': '牧场',
                          'value':this.$store.state.screen.countPasture
                      }],
                  }]
              }
              let statisticOption = {
                  title: {
                      text: '统计数',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 15,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+2)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '统计数',
                          'value':this.$store.state.screen.countCattle
                      }],
                  }]
              }
              let cowshedOption = {
                  title: {
                      text: '总存栏',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 15,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+4)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '总存栏',
                          'value': this.$store.state.screen.countOnHand
                      }],
                  }]
              }
              let cow1Option = {
                  title: {
                      text: '公牛',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 15,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+5)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '育肥牛',
                          'value': this.$store.state.screen.oxType.yuFei
                      },{
                          'name': '已出栏',
                          'value': this.$store.state.screen.oxType.chuLan
                      },{
                          'name': '计划存栏',
                          'value': 500
                      }],
                  }]
              }
              let cow2Option = {
                  title: {
                      text: '母牛',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 15,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+6)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '繁育母牛',
                          'value': this.$store.state.screen.calfPlan.historyCalfNum
                      },{
                          'name': '计划存栏数',
                          'value': 500
                      }],
                  }]
              }
              let cow3Option = {
                  title: {
                      text: '犊牛',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 15,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 15,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+1)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '计划产犊',
                          'value': this.$store.state.screen.calfPlan.planCalfNum
                      },{
                          'name': '完成产犊',
                          'value': this.$store.state.screen.calfPlan.addCalfNum
                      }],
                  }]
              }
              let communityOption = {
                  title: {
                      text: '合作社',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: this.fontSize(0.2),
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 12,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+5)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '合作社',
                          'value': this.$store.state.screen.cooperativeCount.cooperativeCount
                      }],
                  }]
              }
              let userOption = {
                  title: {
                      text: '养殖户',
                          x: 'center',
                          y: 'center',
                          textStyle: {
                          fontSize: 12,
                              color: '#fff',
                      }
                  },
                  tooltip: {
                      trigger: 'item'
                  },
                  series: [{
                      type: 'pie',
                      center: ['50%', '50%'],
                      radius: ['45%', '70%'],
                      clockwise: true,
                      avoidLabelOverlap: true,
                      hoverOffset: 12,
                      itemStyle: {
                          normal: {
                              color: function(params) {
                                  return colorList[(params.dataIndex+3)%7]
                              }
                          }
                      },
                      label: {
                          show: false,
                      },
                      labelLine: {
                          normal: {
                              show: false,
                          }
                      },
                      data: [{
                          'name': '养殖户',
                          'value': 2000
                      }],
                  }]
              }
              //牧场总数
              let pasture = this.$echarts.init(document.getElementById('pasture'))
              pastureOption.title.textStyle.fontSize = this.fontSize(0.2)
              pasture.setOption(pastureOption);
              addDt(pasture,pastureOption)
              //统计数
              let statistic = this.$echarts.init(document.getElementById('statistic'))
              statisticOption.title.textStyle.fontSize = this.fontSize(0.2)
              statistic.setOption(statisticOption)
              addDt(statistic,statisticOption)
              //总存栏
              let cowshed = this.$echarts.init(document.getElementById('cowshed'))
              cowshedOption.title.textStyle.fontSize = this.fontSize(0.2)
              cowshed.setOption(cowshedOption)
              addDt(cowshed,cowshedOption)
              //育肥牛，已出栏，计划出栏
              let cow1 = this.$echarts.init(document.getElementById('cow1'))
              cow1Option.title.textStyle.fontSize = this.fontSize(0.2)
              cow1.setOption(cow1Option)
              addDt(cow1,cow1Option)

              //繁育母牛，计划存栏数
              let cow2 = this.$echarts.init(document.getElementById('cow2'))
              cow2Option.title.textStyle.fontSize = this.fontSize(0.2)
              cow2.setOption(cow2Option)
              addDt(cow2,cow2Option)
              //计划产犊，完成产犊
              let cow3 = this.$echarts.init(document.getElementById('cow3'))
              cow3Option.title.textStyle.fontSize = this.fontSize(0.2)
              cow3.setOption(cow3Option)
              addDt(cow3,cow3Option)
              //合作社
              let community = this.$echarts.init(document.getElementById('community'))
              communityOption.title.textStyle.fontSize = this.fontSize(0.14)
              community.setOption(communityOption)
              addDt(community,communityOption)
              //养殖户
              let user = this.$echarts.init(document.getElementById('user'))
              userOption.title.textStyle.fontSize = this.fontSize(0.14)
              user.setOption(userOption)
              addDt(user,userOption)
              window.addEventListener("resize", () => {
                  pasture.resize();
                  statistic.resize();
                  cowshed.resize();
                  cow1.resize();
                  cow2.resize();
                  cow3.resize();
                  community.resize();
                  user.resize();
              });
          }
        },
    }
</script>

<style scoped>
    /*div {*/
    /*    border: 1px solid blue*/
    /*}*/
    .layout {
        position: absolute;
    }
    .layout-right-top {
        top: 0;
        left: 0%;
        width: 100%;
        height: 100%;
    }
    .layout-right-top1 {
        top: 0%;
        left: 0%;
        width: 15%;
        height: 100%;
    }
    .layout-right-top2 {
        top: 0%;
        left: 15%;
        width: 14%;
        height: 100%;
    }
    .layout-right-top3 {
        top: 0%;
        left: 29%;
        width: 14%;
        height: 100%;
    }
    .layout-right-top4 {
        top: 0%;
        left: 43%;
        width: 14%;
        height: 100%;
    }
    .layout-right-top5 {
        top: 0%;
        left: 57%;
        width: 14%;
        height: 100%;
    }
    .layout-right-top6 {
        top: 0%;
        left: 71%;
        width: 14%;
        height: 100%;
    }
    .layout-right-top7 {
        top: 0%;
        left: 85%;
        width: 15%;
        height: 100%;
    }
    .layout-right-top7-top {
        top: 0%;
        left: 0%;
        width: 100%;
        height: 50%;
    }
    .layout-right-top7-bottom {
        top: 50%;
        left: 0%;
        width: 100%;
        height: 50%;
    }
</style>
