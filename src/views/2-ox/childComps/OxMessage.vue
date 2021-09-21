<template>
  <div class="chart">
    <div class="head">
      单个牛只信息显示
<!--      <input v-model="message" placeholder="请输入耳标号" />-->
<!--      <button type="button" @click="select()">搜索</button>-->

        <a-input-search size="small" enter-button placeholder="请输入耳标号" v-model="message" style="width: 20%;height: 100%;" @search="select()" />

    </div>
      <div class="body">
    <div class="div1">
      <img class="img" src="../../../assets/swiper/ox/4.jpg">
    </div>
    <div class="div2">
      <div class="ox-item">耳标号：{{ this.cow.earnmask }}</div>
      <div class="ox-item">牧场：{{ this.cow.pasture }}</div>
      <div class="ox-item">牛舍{{ this.cow.cowshed }}</div>
      <div class="ox-item">进场日期：{{ this.cow.enterdate }}</div>
      <div class="ox-item">出生日期：{{ this.cow.birthdate }}</div>
      <div class="ox-item">品种：{{ this.cow.variety }}</div>
      <div class="ox-item">性别：{{ this.cow.sex}}</div>
      <div class="ox-item">养殖种类：{{ this.cow.breedingspecies }}</div>
    </div>
    <div class="div3">
      <div class="ox-item">生长状态：{{ this.cow.growthstatus }}</div>
      <div class="ox-item">最近称重时间：{{ this.cow.recentweighingtime }}</div>
      <div class="ox-item">最近称重（kg）：{{ this.cow.recentweight }}</div>
      <div class="ox-item">繁育状态：{{ this.cow.breedingstatus }}</div>
      <div class="ox-item">参配次数 ：{{ this.cow.participationsnumber}}</div>
      <div class="ox-item">当前胎次：{{ this.cow.currenttire }}</div>
    </div>
    <div class="div4">
      <div class="div41">
        <div>我</div>
        <div class="id div5">{{this.cow.earnmask }}</div>

      </div>
      <div class="div42">
        <div>父母系</div>
        <div class="fid div5"><a-icon type="man" style="color: #1cc9ff"/>{{ this.cow.father }}</div>
        <div class="mid div5"><a-icon type="woman" style="color: #ff0000"/>{{ this.cow.mother }}</div>
      </div>
      <div class="div43">
        <div>外/祖父母系</div>
        <div class="ffid div5"><a-icon type="man" style="color: #1cc9ff"/>{{ this.cow.grandfather}}</div>
        <div class="fmid div5"><a-icon type="woman" style="color: #ff0000"/>{{ this.cow.grandmother }}</div>
        <div class="mfid div5"><a-icon type="man" style="color: #1cc9ff"/>{{ this.cow.motherfather}}</div>
        <div class="mmid div5"><a-icon type="woman" style="color: #ff0000"/>{{ this.cow.mothermother }}</div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message:'',
      cow: {},
      allData: null,
      currentId: "",
      currentMessage: {},
    };
  },
  watch: {
    screen(){
      //以下为真数据
      // this.cow = {
      //   imgsrc:'',
      //   earnmask: this.$store.state.screen.oneCattle.earMark,
      //   pasture: this.$store.state.screen.oneCattle.pastureId,
      //   cowshed: this.$store.state.screen.oneCattle.cowshedId,
      //   enterdate: this.$store.state.screen.oneCattle.entryTime,
      //   birthdate: this.$store.state.screen.oneCattle.birthDate,
      //   variety: this.$store.state.screen.oneCattle.variety,
      //   sex: this.$store.state.screen.oneCattle.sex,
      //   breedingspecies: this.$store.state.screen.oneCattle.culturedSpecies,
      //   growthstatus: this.$store.state.screen.oneCattle.growthStatus,
      //   recentweighingtime: '',
      //   recentweight: '',
      //   breedingstatus: '',
      //   participationsnumber: '',
      //   currenttire: '',
      //   // father:'',
      //   // mother:'',
      //   // grandfather:'',
      //   // grandmother:'',
      //   // motherfather:'',
      //   // mothermother:'',
      //   father:this.$store.state.screen.pedigree.father,
      //   mother:this.$store.state.screen.pedigree.mother,
      //   grandfather:this.$store.state.screen.pedigree.fatherGrandfather,
      //   grandmother:this.$store.state.screen.pedigree.fatherGrandmother,
      //   motherfather:this.$store.state.screen.pedigree.motherGrandfather,
      //   mothermother:this.$store.state.screen.pedigree.motherGrandmother,
      // }

      //以下为半假数据，仅用于展示
      const a = ['南分牧场','张家村牧场','三期牧场','李家寨牧场','zl牧场','awei牧场']
      const b = ['A001','B002','C003','D004','E005','F006']
      const c = ['2021.09.01','2021.09.03','2021.09.05','2021.09.07','2021.09.09']
      const d = ['2021.01.01','2021.02.01','2021.03.01','2021.04.01','2021.05.01']
      const e = ['安格斯','何坦斯','西门塔尔','其它']
      const f = ['公','母','阉割']
      const g = ['公牛','种公牛','阉牛']
      const h = ['赎牛','青年牛','成年牛']
      const i = ['2021.09.17','2021.09.16','2021.09.15']
      const j = ['300','310','320','330','340','350']
      const k = ['1001','2002','3003','4004','5005','6006','7007','8008','9009','1002','2003','3004','4005','5006','6007','7008','8009','9001']
      this.cow = {
        imgsrc:'',
        earnmask: this.$store.state.screen.oneCattle.earMark,
        pasture: a[Math.floor(Math.random() * 1000)%6],
        cowshed: b[Math.floor(Math.random() * 1000)%6],
        enterdate: c[Math.floor(Math.random() * 1000)%5],
        birthdate: d[Math.floor(Math.random() * 1000)%5],
        variety: e[Math.floor(Math.random() * 1000)%4],
        sex: f[Math.floor(Math.random() * 1000)%3],
        breedingspecies: (this.sex=='母')?'母牛':g[Math.floor(Math.random() * 1000)%3],
        growthstatus: h[Math.floor(Math.random() * 1000)%3],
        recentweighingtime: i[Math.floor(Math.random() * 1000)%3],
        recentweight: j[Math.floor(Math.random() * 1000)%6],
        breedingstatus: '未知',
        participationsnumber: '未知',
        currenttire: '未知',
        // father:'',
        // mother:'',
        // grandfather:'',
        // grandmother:'',
        // motherfather:'',
        // mothermother:'',
        father:k[Math.floor(Math.random() * 1000)%18],
        mother:k[Math.floor(Math.random() * 1000)%18],
        grandfather:k[Math.floor(Math.random() * 1000)%18],
        grandmother:k[Math.floor(Math.random() * 1000)%18],
        motherfather:k[Math.floor(Math.random() * 1000)%18],
        mothermother:k[Math.floor(Math.random() * 1000)%18],
      }
    }
  },
  computed: {
    screen(){
      return this.$store.state.screen
    }
  },
  methods: {
    select() {
      // this.msg = this.cowlist.find((item) => item.id === this.message);
      // if (this.findMessage == null) {
      //   this.findMessage = text;
      // }
      this.$store.commit('earId',this.message)
    },
  },
};
</script>
<style scoped>
/*.chart {*/
/*  display: flex;*/
.img{
  top: 2%;
  left: 2%;
  height: 96%;
  width: 96%;
}
/*}*/
.chart{
  left: 1%;
  top: 1%;
  width: 98%;
  height: 98%;
  position: absolute;
}
.head{
  color: mediumspringgreen;
  font-weight: bolder;
  left: 0%;
  top: 3%;
  height:14%;
  width:100%;
  position: absolute;
}
.body{
  top:15%;
  height:85%;
  width:100%;
  position: absolute;
}
.div1 {
  left: 0%;
  height:100%;
  width:30%;
  position: absolute;

}
.div2 {
  margin-left: 3%;
  left: 30%;
  height:100%;
  width:20%;
  position: absolute;
}
.ox-item {
  margin-bottom: 0.2rem;
  color: #03e9f4;
}
.div3 {
  top: 0%;
  left: 50%;
  height:95%;
  width:20%;
  position: absolute;
  line-height: 1.8rem;
}
.div4 {
  text-align: center;
  color:white;
  display: flex;
  left: 70%;
  height:100%;
  width:30%;
  position: absolute;
  font-weight: bolder;
}
.div5 {
  font-size: 0.8rem;
  margin: auto;
  width: 95%;
}
.div41 {
  flex: 1;
  font-size: 1rem;
}
.div42 {
  flex: 1;
  font-size: 1rem;
}
.div43 {
  flex: 1;
  font-size: 1rem;
}
.id {
  margin-top: 55%;
  border: rgb(23, 245, 23) dashed 2px;
}
.fid {
  margin-top: 28%;
  border: rgb(16, 19, 240) dashed 2px;
}
.mid {
  margin-top: 35%;
  border: rgb(240, 50, 43) dashed 2px;
}
.ffid {
  margin-top: 10%;
  border: rgb(16, 19, 240) dashed 2px;
}
.fmid {
  margin-top: 10%;
  border: rgb(240, 50, 43) dashed 2px;
}
.mfid {
  margin-top: 10%;
  border: rgb(16, 19, 240) dashed 2px;
}
.mmid {
  margin-top: 10%;
  border: rgb(240, 50, 43) dashed 2px;
}
</style>
