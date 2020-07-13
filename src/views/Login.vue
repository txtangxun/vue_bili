<template>
  <div>
    <logintop middletop="登录bilibili">
         <div slot="right" style="font-size:3.478vw" @click="$router.push('/register')">注册</div>
    </logintop>
    <logintext label="用户名" style="margin:15px 0" placeholder="请输入用户名" @inputChange="res=>this.username=res"  rule="^.{6,15}$" ></logintext>
    <logintext label="密码" type="password" placeholder="请输入密码" @inputChange="res=>this.password=res"  rule="^.{6,15}$" ></logintext>
    <loginbtn label="登录" @registerEmit="registerEmit"></loginbtn>
  
  </div>

</template>

<script>
import logintop from "@/components/common/LoginTop.vue"
import logintext from "@/components/common/LoginText.vue"
import loginbtn from "@/components/common/LoginBtn.vue"
export default {
    data(){
      return{
        username:'',
        password:''
      }
    },
    components:{logintop,logintext,loginbtn},
    methods:{
      async registerEmit(){
        let rule = new RegExp('^.{6,16}$');
        if(rule.test(this.password)&&rule.test(this.username)){
            const res = await this.$http.post("/login",{
            username:this.username,
            password:this.password
          })
          this.$msg.fail(res.data.msg);
          if(res.data.code==301||res.data.code==302)return;
          localStorage.setItem('id',res.data.id);
          localStorage.setItem('token',res.data.token);
          setTimeout(()=>{
            this.$router.push('/userinfo');
          },1000)
        }else{
          this.$msg.fail("输入格式错误")
        }
      }
    }

}
</script>

<style>

</style>