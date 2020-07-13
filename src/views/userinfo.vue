<template>
  <div>
    <NavBar></NavBar>
    <img src="@/assets/headline.jpg" alt="">
    <!-- <img src="@/assets/timg.jpg"/> -->
    <userDetail :userInfo="model"></userDetail>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import userDetail from "@/components/userComponent/userDetail.vue"
export default {
    data(){
        return{
            model:{}
        }
    },
    components:{
        NavBar,
        userDetail
    },
    methods:{
        async userData(){
            const res = await this.$http.get("/user/"+localStorage.getItem('id'))
            this.model = res.data[0]
        }
    },
    created(){
        this.userData();
    }
}
</script>

<style>
img{
    width: 100%;
    height: 27.778vw;
}
</style>