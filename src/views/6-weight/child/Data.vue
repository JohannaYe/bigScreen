<template>
    <div class="layout">
        <div class="layout decoration">
            <dv-decoration-12 style="width:80%;height:80%;top:10% ;position: absolute" />
<!--            <img src="@/assets/decoration/装饰.png" alt="装饰" style="width: 100%;height: 60%;margin-top: 45%" />-->
        </div>
        <div class="layout img mark">
            <p class="p">{{e}}</p>
        </div>
        <div class="layout img weight">
            <p class="p">{{w}}</p>
        </div>
        <div class="layout img value">
            <p class="p">{{m}}</p>
        </div>
        <div class="layout img value2">

        </div>
        <div class="layout  photo"></div>
        <div class="layout img divide">
            <p class="p">{{p}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Data",
        props:{
            e:{
                type:String,
                default:''
            },

        },
        watch:{
            screen(){
                this.e = this.$store.state.screen.history[0].earMark
                this.w = this.$store.state.screen.history[0].weight + 'Kg'
                this.flag=true

                //照片（接口未定义）
                //this.photo = this.$store.state.screen.history[0].photo
                //分群（接口未定义）
                //this.divide = this.$store.state.screen.history[0].divide
            },
            e(){
                if(this.flag==true) {

                    this.weightlist.forEach(i => {
                        if (this.e == i.earMark) {
                            this.w = i.weight
                        }
                    })
                }
            }
        },
        computed:{

            screen(){
                return this.$store.state.screen
            },
            weightlist() {
                return this.$store.state.screen.summary
            }
        },
        data(){
           return{
               flag:false,
               w:'',
               m:'???',
               p:'A通道',
        //        weightlist:[
        //     {
        //      earnmark: '1001',
        //         weight:'700kg',
        //         money:'15000元',
        //        img:'',
        //         channel:'A通道'
        //     },
        //     {
        //         earnmark: '1002',
        //             weight:'600kg',
        //         money:'16000元',
        //         img:'',
        //         channel:'B通道'
        //     },
        //     {
        //         earnmark: '1003',
        //             weight:'500kg',
        //         money:'10000元',
        //         img:'',
        //         channel:'B通道'
        //     },
        //     {
        //         earnmark: '1004',
        //             weight:'400kg',
        //         money:'12000元',
        //         img:'',
        //         channel:'A通道'
        //     },
        //     {
        //         earnmark: '1005',
        //             weight:'300kg',
        //         money:'10000元',
        //         img:'',
        //         channel:'A通道'
        //     },
        // ]
           }
        },
        created(){
        //     let i=0
        //     setInterval(()=>{
        //         i++
        //         i=i%this.weightlist.length
        //         console.log(i)
        //         this.e=this.weightlist[i].earnmark
        //     },1000)
         }
    }
</script>

<style scoped>

    .layout{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .decoration{
        width: 10%;
    }
    .img {
        background: url("../../../assets/border/border3.png") center center;
        background-size: 90% 70%;
        color: #ffffff;
        font-weight: bolder;
        font-size: 1rem;
        text-align: center;
        background-repeat: no-repeat;
    }

    .mark{
        width: 18%;
        left: 10%;
    }
    .img .p{
        margin: 0;
        padding: 45% 0% 0 40%;
    }
    .weight {
        width: 18%;
        left: 28%;
    }
    .value {
        width: 18%;
        left: 46%;
    }
    .value2{
        width: 18%;
        left: 64%;
    }
    .photo {
        width: 13%;
        height: 70%;
        top: 15%;
        left: 66.5%;
        background-image: url("../../../assets/images/dog2.jpg");
        background-size: 100% 100%;
        border-radius: 50% 50% 50%;
    }
    .divide {
        width: 18%;
        left: 82%;
    }
</style>
