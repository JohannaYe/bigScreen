<template>
    <div class="boss">
        <div id="head">
            <div class="p" style="padding-left: 0.3%;color: orange;top:0;">当前位置：{{company}} > {{farm}} > 牛只信息</div>
            <div class="p" style="color: #16ebff;top:50%;">
                <div class="span" style="padding-left: 0.3%;width:10%;left: 0;top: 0;">
                    <a-icon type="file-search" />
                    牛只信息
                </div>
                <div class="button span" @mouseover="h1=true" @mouseout="h1=false" @click="click1" :style="s1" style="width:4%;left: 75%;">公牛</div>
                <div class="button span" @mouseover="h2=true" @mouseout="h2=false" @click="click2" :style="s2" style="width:4%;left: 80%;">母牛</div>
                <div class="button span" @mouseover="h3=true" @mouseout="h3=false" @click="click3" :style="s3" style="padding-left: 0.35%;width:4%;left: 85%;">阉割牛</div>
                <div class="span" style="width:10%;left: 90%;">
                    <a-input-search size="small" enter-button placeholder="耳标号" style="width: 100%;height: 100%;" @search="onSearch" />
                </div>
            </div>
        </div>
        <div class="lb">
            <dv-scroll-board @click="click" :config="config" style="width: 100%;height:100%"/>
        </div>
    </div>

</template>s

<script>
    export default {
        name: "CarouselTable",
        components: {},
        // created() {
        //     this.config = {
        //         header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
        //         headerBGC: 'rgb(4,108,196)',
        //         align:['center','center','center','center','center','center','center'],
        //         data: this.preData
        //     }
        // },
        data(){
          return {
              company: 'zl集团',
              farm: 'aw牧场',
              state1: false,
              state2: false,
              state3: false,
              h1:false,
              h2:false,
              h3:false,
              config:{},
              preData: '',
          }
        },
        watch:{
            screen(){
                let n=0;
                //下面这句为真数据
              //this.preData = this.screen.allCattle.map((item)=>([item.earMark,item.cowshedId,item.sex,item.identification,item.variety,item.entryTime,item.birthDate]))
              //以下为半假数据，仅用于展示
                this.preData = this.screen.allCattle.map((item)=>{
                  n++
                  return [
                      item.earMark,
                      (n>=0&&n<=4)?'A001':((n>5&&n<=10)?'B002':'C003'),
                      (n>=0&&n<=4)?'公':((n>5&&n<=10)?'母':'阉割牛'),
                      (n>=0&&n<=4)?'公牛':((n>5&&n<=10)?'母牛':'种公牛'),
                      (n>=0&&n<=4)?'安格斯':((n>5&&n<=10)?'何坦斯':'西门塔尔'),
                      (n>=0&&n<=4)?'2021.09.01':((n>5&&n<=10)?'2021.09.07':'2021.09.15'),
                      (n>=0&&n<=4)?'2021.01.01':((n>5&&n<=10)?'2021.02.01':'2021.03.01'),
                  ]
              })
              this.config = {
                  header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                  headerBGC: 'rgb(4,108,196)',
                  align:['center','center','center','center','center','center','center'],
                  data: this.preData,
                  waitTime:1000
              }
          }
        },
        methods:{
            click(e){
                this.$store.commit('earId',e.row[0])
            },
            click1(){
                if (this.state1){
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData,
                        waitTime:1000
                    }
                } else {
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData.filter(item=>item[2]=='公'),
                        waitTime:1000
                    }
                }
                this.state1 = !this.state1;
                this.state2 = false;
                this.state3 = false;
            },
            click2(){
                if (this.state2){
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData,
                        waitTime:1000
                    }
                } else {
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData.filter(item=>item[2]=='母'),
                        waitTime:1000
                    }
                }
                this.state2 = !this.state2;
                this.state1 = false;
                this.state3 = false;
            },
            click3(){
                if (this.state3){
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData,
                        waitTime:1000
                    }
                } else {
                    this.config = {
                        header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期'],
                        headerBGC: 'rgb(4,108,196)',
                        align:['center','center','center','center','center','center','center'],
                        data: this.preData.filter(item=>item[2]=='阉割牛'),
                        waitTime:1000
                    }
                }
                this.state3 = !this.state3;
                this.state1 = false;
                this.state2 = false;
            },
            onSearch(e){
                let data
                if (!this.state1 && !this.state2 && !this.state3){
                    data = this.preData
                } else {
                    data = this.preData.filter(item=>item[1]==(this.state1?'公':(this.state2?'母':'阉割牛')))
                }
                this.config = {
                    header: ['耳标号', '牛舍', '性别','养殖种类','品种','进场日期','出生日期','center','center'],
                    headerBGC: 'rgb(4,108,196)',
                    align:['center','center','center','center','center'],
                    data: data.filter(item=>item[0].indexOf(e)==0),
                    waitTime:1000
                }
            },
        },
        computed:{
            s1(){
                return {
                    backgroundColor:this.state1?'#0a60ff':'',
                    border: this.h1?'1px solid #0a60ff':''
                }
            },
            s2(){
                return {
                    backgroundColor:this.state2?'#0a60ff':'',
                    border: this.h2?'1px solid #0a60ff':''
                }
            },
            s3(){
                return {
                    backgroundColor:this.state3?'#0a60ff':'',
                    border: this.h3?'1px solid #0a60ff':''
                }
            },
            screen(){
              return this.$store.state.screen
            },
        }
    }
</script>

<style lang="less">
    /*.button:hover{*/
    /*    background-color: #ff3cf8;*/
    /*}*/
    .row-item:hover {
        color: rgb(255,0,0);
    }
    .boss{
        left: 1%;
        top: 1%;
        width: 98%;
        height: 96%;
        position: absolute;
    }
    #head {
        position: absolute;
        width: 100%;
        height: 24%;
        top:0;
        left: 0;

    }
    .p {
        display: flex;
        align-items: center;
        position: absolute;
        font-size: 0.9em;
        height: 50%;
        width: 100%;
        margin: 0;
    }
    .span{
        text-align: center !important;
        display: flex;
        align-items: center;
        position: absolute;
        height: 100%;
        top: 0;
        border-radius: 15%;
        padding-left: 0.9%;
    }
    .lb {
        position: absolute;
        width:100%;
        height:76%;
        top:24%;
        left: 0;
    }
</style>
