<template>
  <div class="logintop">
      <div></div>
      <div>{{middletop}}</div>
      <div>
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props:['middletop']
}
</script>

<style lang="less">
.logintop {
    height: 50px;
    background-color: white;
    display: flex;
    div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4.444vw;
    }
}


</style>