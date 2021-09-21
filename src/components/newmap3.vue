<template>
    <div class="home">
        <!--创建地图容器-->
        <div id="container2" class="allmap"></div>
        <div class="selects">
            <div class="select">
                    <a-select
                            show-search
                            size="small"
                            placeholder="输入搜索牧场"
                            option-filter-prop="children"
                            style="width: 9rem; "
                            :filter-option="filterOption"
                            @focus="handleFocus"
                            @blur="handleBlur"
                            @change="handleChange"
                            overlayClassName="bgc_tooltip"

                    >
                        <a-select-option v-for="(i,index) in pastures" :key="index"  @click="click(i.name)"  :value="i.name">{{i.name}}
                        </a-select-option>
                    </a-select>
            </div>
        </div>
        <div class="bigger" >
            <a-button icon="drag" @click="bigmap()" id="button"></a-button>
        </div>
    </div>
</template>

<script>
    // import Button2 from "./Button2";
    import { BMPGL } from "@/bmpgl.js"
    import router from "@/router";
    import {MP} from '@/map.js'
    export default {
        name: "home",
        components: {
            // Button2,
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
                ak: "EGn9jFZP3OprtlX1TqIWn5diFvqFLTX7", // 百度的地图密钥
                myMap: null
            };
        },
        mounted() {
            this.initMap()

        },
        methods: {
            bigmap(){
                let name = (this.$store.state.selectName=='中心级'?'mycenter':'myox')
                if(this.isbig==false) {
                    router.push({
                        name: "bigmap3",
                        // params: {
                        //     name: item.name,
                        // },
                    });
                }
                if(this.isbig==true){
                    router.push({
                        name: name,
                        // params: {
                        //     name: item.name,
                        // },
                    });
                }
            },
            handleChange(value) {
                console.log(`selected ${value}`);
            },
            handleBlur() {
                console.log('blur');
            },
            handleFocus() {
                console.log('focus');
            },
            filterOption(input, option) {
                return (
                    option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
                );
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
            initMap() {
                // 传入密钥获取地图回调。
                BMPGL(this.ak).then((BMapGL) => {
                    this.BMapGL=BMapGL
                    this.map = new BMapGL.Map("container2", {
                        minZoom: 4,
                        maxZoom: 20
                    });
                    // 创建地图实例
                    this.map.centerAndZoom(new BMapGL.Point(111.87548, 41.11757), 13);
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
                        marker.addEventListener("click", function(){
                            this.map.openInfoWindow(infoWindow,new BMapGL.Point(item.jing, item.wei)); //开启信息窗口

                            // marker.addEventListener("mouseout", function(){
                            //     this.map.closeInfoWindow(infoWindow,new BMapGL.Point(item.jing, item.wei)); //关闭信息窗口
                            // });
                            // marker.addEventListener("click", function() {
                            //     router.push({
                            //         name: "monitor",
                            //         params: {
                            //             name: item.name,
                            //         },
                            //     });
                            // })
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
<style lang="scss" >
    /*.iconfont{*/
    /*    top: 3%;*/
    /*    left: 3%; */
    /*}*/
    .home{
        left: 1%;
        top: 1%;
        width: 98%;
        height: 98%;
        position: absolute;
    }
    .ant-select-selection {
        font-size:1rem;background-color: #07417a!important;
        color: white!important;
    }
    .ant-select-selection__placeholder{
        color: white!important;
    }

    .select {
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
        width: 50%;
        top: 6%;
        height: 10%;
        position: absolute;
        z-index: 2;
    }
    .BMap_cpyCtrl {
        display: none;
    }

    .anchorBL {
        display: none;
    }

    #button{
        float: right;
        margin-right: 20px;
        margin-top: 20px;
        z-index: 10;
    }
</style>

