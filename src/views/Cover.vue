<template>
    <div @click="$router.push('/article/'+detailitem.id)">
    <div class="detailparent"> 
        <img :src="detailitem.img" alt=""/>    
        <!-- <div class="detailchild"> -->
            <span class="video icon-play2">1322</span>
            <span class="comment icon-file-text">42</span>
        <!-- </div> -->
    </div>

    <p class="detailname">{{detailitem.name}}</p>
    </div>

</template>

<script>
export default {
    props:["detailitem"]
}
</script>

<style>
.detailname{
    margin: 5px 0;
}
.detailparent{
    position: relative;
}
/* .detailchild {
    position: absolute;
    color: white;
    bottom: 5px;
    overflow: hidden;
} */
.video{
    position: absolute;
    color: white;
    bottom: 7px;
    left: 3px;
}
.comment{
    position: absolute;
    color: white;
    bottom: 7px;
    right: 3px;
}
</style>