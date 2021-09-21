<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:1080px" @click="getClickInfo" :scroll-wheel-zoom='true' animation="BMAP_ANIMATION_BOUNCE">
    </baidu-map>
<!--    <baidu-map :center="{lng:117.181753,lat:36.676514}" :zoom="13" :scroll-wheel-zoom="true" class="map">-->
<!--        <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" />-->
<!--        <bm-marker :position="{lng:117.181753,lat:36.676514}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">-->
<!--            <bm-label :label-style="{color:'red',fontSize:'12px'}" :offset="{width:-35,height:30}" content="富友慧明" />-->
<!--        </bm-marker>-->
<!--        <bm-overview-map :is-open="true" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" />-->
<!--    </baidu-map>-->

</template>
<script>
    export default {
        name: 'TestBaiDu',
        data () {
            return {
                center: {lng: 109.45744048529967, lat: 36.49771311230842},
                zoom: 13
            }
        },
        methods: {
            handler({BMap, map}) {
                var point = new BMap.Point(109.49926175379778, 36.60449676862417)
                map.centerAndZoom(point, 13)
                map.setMapStyle({
                    styleId: 'ed8ec985a54d709239be719f33e677d3'
                });
                var marker = new BMap.Marker(point) // 创建标注
                map.addOverlay(marker) // 将标注添加到地图中
                marker.setAnimation("BMAP_ANIMATION_BOUNCE");
                var circle = new BMap.Circle(point, 6, {
                    strokeColor: 'Red',
                    strokeWeight: 6,
                    strokeOpacity: 1,
                    Color: 'Red',
                    fillColor: '#f03'
                })
                map.addOverlay(circle)
                map.addTileLayer(new BMap.PanoramaCoverageLayer());

                var stCtrl = new BMap.PanoramaControl(); //构造全景控件
                stCtrl.setOffset(new BMap.Size(20, 20));
                map.addControl(stCtrl);//添加全景控件

            },
            getClickInfo(e) {
                console.log(e.point.lng)
                console.log(e.point.lat)
                this.center.lng = e.point.lng
                this.center.lat = e.point.lat
            }
        }
        }
    </script>
