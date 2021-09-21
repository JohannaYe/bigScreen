<template>
    <div class="home">
        <!--创建地图容器-->
        <div id="container2" class="allmap"></div>
        <div class="selects">
            <div class="select">
              <span class="iconfont" @click="showChoice = !showChoice"><Button2></Button2></span>
                <div class="select-con" v-show="showChoice">
                    <ul>
                        <li class="li" v-for="(item,index) in pastures" :key="index" @click="click(item.name)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="select2">
            <div class="select">
                <span class="iconfont" @click="showChoice2 = !showChoice2"><Button3></Button3></span>
                <div class="select-con" v-show="showChoice2">
                    <ul>
                        <li  class="li" v-for="(item,index) in pastures" :key="index" @click="click2(item.name)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bigger" >
            <a-button icon="drag" @click="bigmap()"  style="float: right"></a-button>
        </div>
    </div>
</template>

<script>
    import Button2 from "./Button2";
    import Button3 from "./Button3";
    import { BMPGL } from "@/bmpgl.js"
    import router from "@/router";
    import {MP} from '@/map.js'
    export default {
        name: "home",
        components: {
            Button2,
            Button3
        },
        props:{
            isbig:{
                default:false
            }
        },
        data() {
            return {
                map:null,
                BMapGL:null,
                pastures:[{
                       name:'awei牧场',
                       jing:111.87548,
                        wei:41.11757,
                       message:"地址：内蒙古呼和浩特市，联系电话：119"
                   },
                    {
                        name:'kailong牧场',
                        jing:111.47548,
                        wei:41.11757,
                        message:"地址：山西省临汾市，联系电话：110"
                    },
                    {
                        name:'zelong牧场',
                        jing:111.87548,
                        wei:41.41757,
                        message:"地址：长治市上党区，联系电话：17391652499"
                    }],
                showChoice: false,
                showChoice2: false,
                ak: "EGn9jFZP3OprtlX1TqIWn5diFvqFLTX7", // 百度的地图密钥
                myMap: null
            };
        },
        mounted() {
            this.initMap()
            // this.$nextTick(() => {
            //     const _this = this
            //     MP(_this.ak).then(BMap => {
            //         _this.initMap()
            //     })
            // })
        },
        methods: {
            bigmap(){
                if(this.isbig==false) {
                    router.push({
                        name: "bigmap",
                        // params: {
                        //     name: item.name,
                        // },
                    });

                }
                if(this.isbig==true){
                    router.push({
                        name: "mypasture",
                        // params: {
                        //     name: item.name,
                        // },
                    });
                }
            },
            click(item){
                this.showChoice=false
                var point = null;
                this.pastures.forEach(i=>{
                    if(i.name==item)
                    {
                        point =new this.BMapGL.Point(i.jing, i.wei);
                        this.map.setCenter(point)
                    }
                })
                // var point = new BMapGL.Point(lng, lat);
                // map.setCenter(point); // 设置地图中心点
            },
            click2(item){
                this.showChoice2=false
                this.$store.commit('setData2',item)
                // var point = null;
                // this.pastures.forEach(i=>{
                //     if(i.name==item)
                //     {
                //         point =new this.BMapGL.Point(i.jing, i.wei);
                //         this.map.setCenter(point)
                //     }
                // })
                // var point = new BMapGL.Point(lng, lat);
                // map.setCenter(point); // 设置地图中心点
            },
            initMap() {
                // 传入密钥获取地图回调。
                BMPGL(this.ak).then((BMapGL) => {
                    this.BMapGL=BMapGL
                    this.map = new BMapGL.Map("container2", {
                        minZoom: 4,
                        maxZoom: 20
                    })
                    // 创建地图实例
                    this.map.centerAndZoom(new BMapGL.Point(111.87548, 41.11757), 13);
                    // this.map.addControl(new BMapGL.NavigationControl());
                    // this.map.addControl(new BMapGL.ScaleControl());
                    // this.map.addControl(new BMapGL.OverviewMapControl());
                    // 创建牛头图标
                    var myIcon = new BMapGL.Icon("https://tse3-mm.cn.bing.net/th?id=OIP.EAKq2g7CeL5j4PbhVqvceAHaHa&pid=1.7&w=225&h=225&c=8&dpr=1.25", new BMapGL.Size(50, 50));

                    let point =null
                    this.pastures.forEach(item=>{
                       point=new BMapGL.Point(item.jing, item.wei)
                        var infoWindow = new BMapGL.InfoWindow(item.message, {
                            width : 200,     // 信息窗口宽度
                            height: 100,     // 信息窗口高度
                            title : item.name, // 信息窗口标题
                            message:item.message
                        });  // 创建信息窗口对象
                        var marker= new BMapGL.Marker(point, {
                            icon: myIcon
                        });
                        this.map.addOverlay(marker);
                        marker.addEventListener("mouseover", function(){
                                this.map.openInfoWindow(infoWindow,new BMapGL.Point(item.jing, item.wei)); //开启信息窗口

                            marker.addEventListener("mouseout", function(){
                                this.map.closeInfoWindow(infoWindow,new BMapGL.Point(item.jing, item.wei)); //关闭信息窗口
                            });
                            marker.addEventListener("click", function() {
                                router.push({
                                    name: "monitor",
                                    params: {
                                        name: item.name,
                                    },
                                });
                            })
                        })
                    })

                    // 设置地图样式
                    this.map.setMapStyleV2({
                        styleId: 'ed8ec985a54d709239be719f33e677d3'
                    });
                    //设置地图允许滚轮缩放
                    this.map.enableScrollWheelZoom(true);
                    // 覆盖区域图层测试
                    // this.map.addTileLayer(new BMap.PanoramaCoverageLayer());
                    // var stCtrl = new BMap.PanoramaControl(); //构造全景控件
                    // stCtrl.setOffset(new BMap.Size(20, 20));
                    // this.map.addControl(stCtrl);//添加全景控件

                })




            .catch((err)=>{
                        console.log(err)
                    })
            },
        }
    };
</script>
<style lang="scss" scoped>
    /*.iconfont{*/
    /*    top: 3%;*/
    /*    left: 3%; */
    /*}*/
    .li{
        list-style: none;
    }
    .select {
        text-align: left;
        position: absolute;
        font-size: 1rem;
        z-index: 99;
        color:deepskyblue;
        cursor: pointer;
        top: 3%;
        left: 3%;
    }
    .item {
        color: #03e9f4;
    }
    .select-con {
        background: rgb(14, 14, 34);
    }
    .allmap {
        left: 1.5%;
        width: 97%;
        top: 3%;
        height: 94%;
        position: absolute;
        z-index: 1;
    }
    .selects{
        left: 3%;
        width: 25%;
        top: 3%;
        height: 8%;
        position: absolute;
        z-index: 2;
        /*border: 2px solid #8fee50;*/
    }
    .select2{
        right: 3%;
        width: 25%;
        top: 3%;
        height: 8%;
        position: absolute;
        z-index: 2;
    }
    .bigger {
        right: 3%;
        width: 25%;
        bottom: 3%;
        height: 8%;
        position: absolute;
        z-index: 2;

    }
    .BMap_cpyCtrl {
        display: none;
    }

    .anchorBL {
        display: none;
    }
</style>

