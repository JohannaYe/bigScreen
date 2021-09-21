<template>
    <div class="home">
        <!--创建地图容器-->
        <div id="container" class="allmap"></div>
    </div>
</template>

<script>
    import { BMPGL } from "@/bmpgl.js"
    export default {
        name: "home",
        data() {
            return {
                ak: "EGn9jFZP3OprtlX1TqIWn5diFvqFLTX7", // 百度的地图密钥
                myMap: null
            };
        },
        mounted() {
            this.initMap()
        },
        methods: {
            initMap() {
                // 传入密钥获取地图回调。
                BMPGL(this.ak).then((BMapGL) => {
                    var map = new BMapGL.Map("container", {
                        minZoom: 4,
                        maxZoom: 20
                    });
                    // 创建地图实例
                    var point = new BMapGL.Point(111.87548, 41.11757);
                    // 创建点坐标
                    map.centerAndZoom(point, 13);
                   // 初始化地图，设置中心点坐标和地图级别
                   // 设置地图样式
                    map.setMapStyleV2({
                        styleId: 'ed8ec985a54d709239be719f33e677d3'
                    });
                    //设置地图允许滚轮缩放
                    map.enableScrollWheelZoom(true);
                    // var marker = new BMapGL.Marker(point);  // 创建标注
                    // 创建牛头图标
                    var myIcon = new BMapGL.Icon("https://tse3-mm.cn.bing.net/th?id=OIP.EAKq2g7CeL5j4PbhVqvceAHaHa&pid=1.7&w=225&h=225&c=8&dpr=1.25", new BMapGL.Size(50, 50));
                    // 创建Marker标注，使用小车图标
                    var marker= new BMapGL.Marker(point, {
                        icon: myIcon
                    });
                    map.addOverlay(marker);              // 将标注添加到地图中

                    var opts = {
                        width : 200,     // 信息窗口宽度
                        height: 100,     // 信息窗口高度
                        title : "安凯隆牧场" , // 信息窗口标题
                        message:"这里是安凯隆"
                    }
                    var infoWindow = new BMapGL.InfoWindow("地址：内蒙古呼和浩特市，联系电话：17391652499", opts);  // 创建信息窗口对象
                    marker.addEventListener("click", function(){
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                    })



                })



            .catch((err)=>{
                        console.log(err)
                    })
            },
        }
    };
</script>
<style lang="scss" scoped>
    .allmap {
        left: 1%;
        width: 98%;
        top: 1vh;
        height: 90vh;
        position: absolute;
        z-index: 1;
        bottom:9vh;
    }
</style>

