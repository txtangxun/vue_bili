<template>
  <div>
    <logintop middletop="注册bilibili">
      <div slot="right" style="font-size:3.478vw" @click="$router.push('/login')">登录</div>
    </logintop>
    <logintext label="姓名"  placeholder="请输入姓名" rule="^.{6,15}$" @inputChange="res=>this.name=res" style="margin:4.167vw 0"></logintext>
    <logintext label="用户名"  placeholder="请输入用户名" @inputChange="res=>this.username=res"  rule="^.{6,15}$" ></logintext>
    <logintext label="密码" type="password" placeholder="请输入密码" @inputChange="res=>this.password=res"  rule="^.{6,15}$" ></logintext>
    <loginbtn label="注册" @registerEmit="registerEmit"></loginbtn>
  </div>

</template>

<script>
import logintop from "@/components/common/LoginTop.vue"
import logintext from "@/components/common/LoginText.vue"
import loginbtn from "@/components/common/LoginBtn.vue"
export default {
    data(){
      return{
        name:'',
        username:'',
        password:''
      }
    },
    components:{logintop,logintext,loginbtn},
    methods:{
      async registerEmit(){
        let rule = new RegExp('^.{6,16}$');
        if(rule.test(this.name)&&rule.test(this.password)&&rule.test(this.username)){
            const res = await this.$http.post("/register",{
            name:this.name,
            username:this.username,
            password:this.password
          })
          this.$msg.fail(res.data.msg);
        }else{
          this.$msg.fail("输入格式错误")
        }
      }
    }

}
</script>

<style>

</style>