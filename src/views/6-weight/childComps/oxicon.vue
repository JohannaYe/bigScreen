<template>
    <div class="layout">
        <div class="layout decoration">
            <div class="text">生长测定</div>
            <img src="@/assets/images/bk.png" alt="装饰" style="width: 100%;height: 60%;margin-top: 25%" />
        </div>
        <div class="layout img mark">
            <div class="text2">耳标号</div>
            <div class="ig1">
                <dv-decoration-9  dur="24" :color="['skyblue', 'silver  ']" style="width:110%;height:80%;top: 5%;right:5%" >耳标号</dv-decoration-9>
            </div>
            <div class="ig2">
                <img src="@/assets/images/jt.png" alt="装饰" style="width: 180%;height: 60%;padding-top: 70%;padding-right: 80%" />
            </div>
<!--            <img src="@/assets/images/3211.png" alt="装饰" style="width: 70%;height: 80%;padding-left: 0%;padding-top: 15%" />-->
<!--            <img src="@/assets/images/jt.png" alt="装饰" style="width: 30%;height: 20%;padding-left: 70%;padding-top: 40%" />-->
        </div>
        <div class="layout img weight">
            <div class="text2">重量</div>
            <div class="ig1">
<!--                <img src="@/assets/images/3211.png" alt="装饰" style="width: 100%;height: 80%;padding-left: 0%;padding-top: 15%" />-->
                <dv-decoration-9  :color="['skyblue', 'turquoise  ']" style="width:110%;height:80%;top: 5%;right:5%" >重量</dv-decoration-9>
            </div>
            <div class="ig2">
                <img src="@/assets/images/jt.png" alt="装饰" style="width: 180%;height: 60%;padding-top: 70%;padding-right: 80%" />
            </div>
        </div>
        <div class="layout img value">
            <div class="text2">估值</div>
            <div class="ig1">
                <dv-decoration-9 dur="24"  :color="['skyblue', 'silver  ']" style="width:110%;height:80%;top: 5%;right:5%" >估值</dv-decoration-9>
            </div>
            <div class="ig2">
                <img src="@/assets/images/jt.png" alt="装饰" style="width: 180%;height: 60%;padding-top: 70%;padding-right: 80%" />
            </div>
        </div>
        <div class="layout img photo">
            <div class="text2">照片</div>
            <div class="ig1">
                <dv-decoration-9  :color="['skyblue', 'turquoise  ']" style="width:110%;height:80%;top: 5%;right:5%" >照片</dv-decoration-9>
            </div>
            <div class="ig2">
                <img src="@/assets/images/jt.png" alt="装饰" style="width: 180%;height: 60%;padding-top: 70%;padding-right: 80%" />
            </div>
        </div>
        <div class="layout img divide">
            <div class="text2">分群</div>
            <div class="ig1">
                <dv-decoration-9 :color="['skyblue', 'silver  ']" style="width:110%;height:80%;top: 5%;right:5%" >分群</dv-decoration-9>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "oxicon"
    }
</script>

<style scoped>
    /*div{*/
    /*    border: 1px solid green*/
    /*}*/
    .text{
        width:100%;
        top: 37%;
        position: absolute;
        text-align: center;
        z-index: 2;
        font-weight: bolder;
        font-size: 1rem;
    }
    .text2{
        color: greenyellow;
        width:100%;
        top: 30%;
        position: absolute;
        text-align: center;
        z-index: 2;
        font-weight: bolder;
        font-size: 2rem;
    }
    .ig1{
        position: absolute;
        width: 70%;
        height: 100%;
        top: 0;
        left: 15%;
        z-index: 1;
    }
    .ig2{
        position: absolute;
        width: 30%;
        height: 100%;
        top: 0;
        left: 85%;
        z-index: 1;
    }
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
   .mark {
       width: 18%;
       left: 10%;
   }
   .weight {
       width: 18%;
       left: 28%;
   }
   .value {
       width: 18%;
       left: 46%;
   }
   .photo {
       width: 18%;
       left: 64%;
   }
   .divide {
       width: 18%;
       left: 82%;
   }
</style>
