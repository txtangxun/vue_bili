<template>
  <div class="nav">
      <div class="logo">
          <img src="@/assets/logo.png"/>
      </div>
      <div>
          <van-icon name="search" />
          <div class="ser">请输入内容</div>
      </div>
      <div>
          <img :src="imgUrl" @click="$router.push('/edit')" v-if="imgUrl"/> 
          <img src="@/assets/default_img.jpg" v-else/> 
          <div>下载APP</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:""
        }
    },
    methods:{
        async NavInit(){
            if(localStorage.getItem('token')){
                const res = await this.$http.get("/user/"+localStorage.getItem('id'))
                this.imgUrl = res.data[0].user_img
            }
        }
    },
    mounted(){
        this.NavInit()
    }
}
</script>

<style lang="less">
.nav {
    height: 12.5vw;
    background-color: white;
    display: flex;
    .logo {
        display: flex;
        justify-content:center;
        align-items: center;
        width:27.778vw;
        img {
            width:100%;
            height:80%
        }
    }
    div:nth-child(2){
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4.167vw 0;
        .ser {
            background-color: rgb(235, 235, 235);
            width: 80%;
            height: 0.278vw;
            margin: 1.389vw;
            border-radius: 4.167vw;
            font-size: 1.389vw;
            color: rgb(102, 107, 110);
        }


    }
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            height: 6.667vw;
            width: 6.667vw;
        }
        >div {
            background-color: pink;
            color: white;
            font-size: 3.167vw;
            margin: 0 2.778vw;
            padding: 2.167vw 1.389vw;
            border-radius: 2.778vw;
        }
    }
}
</style>