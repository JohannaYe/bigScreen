<template>
    <div>
    <div class="lunbo"  >
        <dv-scroll-board :config="config" style="width:100%;height:100%" @click="f1"  />
    </div>
<!--    <div class="lunbo2"  @mouseleave="f2()" >-->
<!--    </div>-->
    </div>
</template>

<script>
    export default {
        name: "mylunbo",
        data(){
           return {
               list:[],
               config:{
                   waitTime:800,
                   header: ['牛舍', '耳标号', '品种','体重','估值','采集时间','体高','月龄','性别'],
                   data: [
                       // ['123', '1001', '安格斯牛','700kg','15000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1002', '安格斯牛','600kg','16000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1003', '安格斯牛','500kg','10000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1004', '安格斯牛','400kg','12000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1005', '安格斯牛','300kg','10000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1006', '安格斯牛','200kg','16000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1007', '安格斯牛','100kg','10000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1008', '安格斯牛','800kg','18000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1009', '安格斯牛','900kg','10000元','2020.8.20','1.5m','3','公'],
                       // ['123', '1010', '安格斯牛','1000kg','20000元','2020.8.20','1.5m','3','公']
                   ],
                   align:['center','center','center','center','center','center','center'],
               }
           }
        },
        created() {

        },
        watch: {
            screen() {
                this.$store.state.screen.summary.forEach(i => {
                    if(i.weight==undefined){
                        i.weight=450
                    }
                        this.list.push([
                             i.cowshedId,
                            i.earMark,
                             i.variety,
                          i.weight,
                            '???',
                             '2021.6.17',
                            150,
                            i.monthAge,
                             i.sex
                        ])
                    })
                console.log(this.list)
                this.config = {
                    header: ['牛舍', '耳标号', '品种', '体重', '估值', '采集时间', '体高', '月龄', '性别'],
                    data: this.list,
                    waitTime: 800,
                    align:['center','center','center','center','center','center','center','center','center'],
                }
            },
        },
        computed: {
            screen(){
                return this.$store.state.screen
            }
        },
        methods:{
            f1(e){
                this.$emit('earn',e.row[1])
            },


        }
    }
</script>

<style scoped>
   .lunbo{
      position: absolute;
       height: 92%;
      top: 3%;
       left: 1%;
       bottom: 5%;
       right: 1%;
       z-index: 2;
   }
   .lunbo2{
       position: absolute;
       height:76.6%;
       top: 18.3%;
       left: 1%;
       bottom: 5%;
       right: 1%;
       z-index: 1;
   }
</style>
