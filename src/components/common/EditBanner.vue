<template>
<div>
    <div @click="bannerClick" class="editBanner">
        <span>{{item}}</span>
        <span><slot name="eve"></slot></span>
    </div>
</div>

</template>

<script>
export default {
    props:['item'],
    methods:{
        bannerClick(){
            this.$emit('bannerClick')
        }
    }
}
</script>

<style>
.editBanner{
    background-color: white;
    border-bottom: 0.278vw solid #ccc;
    padding: 2.778vw;
    font-size: 4.167vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>