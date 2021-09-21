<!-- 布局 -->
<template>

    <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
        <!-- v-for="item in slides" -->

        <div class="slide-img" >
            <a :href="slides[nowIndex].href" >

                <!-- 动画 -->
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src" :alt="slides[nowIndex].title">
                </transition>


            </a>
        </div>
        <h3>{{ slides[nowIndex].title }}</h3>

        <ul class="slide-page" >
            <li @click="goto(preIndex)">&lt;</li>
            <li v-for="(item,index) in slides" @click="goto(index)" :key="index">
                <a :class="{on:index == nowIndex}">{{index + 1}}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>

    </div>
</template>
<script>
    export default {
        // props:子组件接受的什么属性
        props:{
                slides: Array,
                inv:{//父级传递
                type:Number,
                default:1000
            }
        },
        data(){
            return{
                // slides:[{
                //     src:require('../assets/images/dog1.jpg'),
                //     href:'../assets/images/dog1.jpg',
                //     title:'dog1'
                //     }, {
                //     // src: "img/dog2.eceeaad6.jpg",
                //     // href:'img/dog2.eceeaad6.jpg',
                //     src:require('../assets/images/dog2.jpg'),
                //     href:'../assets/images/dog2.jpg',
                //     }
                //     ],
                nowIndex:1,
                isShow:true
            }
        },
        computed:{
            preIndex(){
                if(this.nowIndex == 0){
                    return this.slides.length-1
                }else{
                    return this.nowIndex - 1
                }
            },
            nextIndex(){
                if(this.nowIndex == this.slides.length-1){
                    return 0
                }else{
                    return this.nowIndex + 1
                }
            }
        },
        methods:{
            goto(index){
                this.isShow = false
                setTimeout(()=>{
                    this.isShow = true
                    this.nowIndex = index
                    //index传给父组件，实现交互
                    // this.$emit('onchange',index)
                    //
                },10)
            },
            //幻灯片自动切换
            runInv(){
                this.invId = setInterval(()=>{
                    this.goto(this.nextIndex)
                },this.inv)
            },
            clearInv(){
                clearInterval(this.invId)
            }
        },
        mounted(){
            this.runInv()
        }
    }
</script>
<style scoped>
    .slide-trans-enter-active{
        transition: all 1s;
    }
    .slide-trans-enter{
        transform: translateX(100%);
    }
    .slide-trans-old-leave-active{
        transition: all 1s;
        transform: translateX(-100%);
    }
    /* 淘宝css初始化 */
    body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button,
    input, textarea, th, td { margin:0; padding:0; }
    body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
    h1, h2, h3, h4, h5, h6{ font-size:100%; }
    address, cite, dfn, em, var { font-style:normal; }
    code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
    small{ font-size:12px; }
    ul, ol { list-style:none; }
    a { text-decoration:none; }
    a:hover { text-decoration:underline; }
    sup { vertical-align:text-top; }
    sub{ vertical-align:text-bottom; }
    legend { color:#000; }
    fieldset, img { border:0; }
    button, input, select, textarea { font-size:100%; }
    table { border-collapse:collapse; border-spacing:0; }


    .slide-show{
        left:5%;
        top:5%;
        height: 90%;
        width: 90%;
        position: absolute;
        overflow: hidden;
    }
    .slide-show h3{
        width: 100%;
        position: absolute;
        color: #fff;
        background-color: #000;
        opacity: 0.7;
        bottom: 0px;
        padding: 10px 0px;
        text-indent: 20px;
        font-weight: 500;
    }
    .slide-img img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    .slide-page{
        right: 15px;
        bottom: 0px;
        position: absolute;
    }
    .slide-page .on{
        text-decoration: underline;
    }
    .slide-page li{
        list-style: none;
        float: left;
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        height: 32px;
    }
    .slide-page li a{

        display: block;
        float:left;
        color: #fff;
        text-decoration: none;
    }
    .slide-page li:hover{
        color: #1fdd88;
    }
    .slide-page a:hover{
        color: #1fdd88;
    }
</style>
