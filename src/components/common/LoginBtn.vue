<template>
  <div class="btn" @click="btnclick">
      <div class="loginbtn">{{label}}</div>
  </div>
</template>

<script>
export default {
    props:["label"],
    methods:{
        btnclick(){
            this.$emit('registerEmit')
        }
    }
}
</script>

<style>
.loginbtn{
    background-color: pink;
    color: white;
    font-size: 4.167vw;
    height: 13.889vw;
    text-align: center;
    line-height: 13.889vw;
    border-radius: 3.333vw;
}
.btn {
    padding: 15px 10px;
}
</style>