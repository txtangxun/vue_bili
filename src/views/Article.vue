<template>
  <div class="article">
        <div>
        <nav-bar class="nav-bar"></nav-bar>
        </div>
        <div class="detailinfo">
                <div class="video">
                    <video controls="controls" :src="model.content"></video>
                </div>
                <div class="articlename">
                    <div class="articlename2">
                        <span class="catetitle">{{model.category.title}}</span>
                        <span>{{model.name}}</span>
                        <p class="userinfoname">
                            {{model.userinfo.name}}
                            <span class="userinfoxinxi">146.6万次观看</span>
                            <span class="userinfoxinxi">5124弹幕</span>
                            <span class="userinfoxinxi">{{model.date}}</span>
                        </p>
                        <p class="userinfoicon">
                            <span class="icon-star-full icon">收藏</span>
                            <span class="icon-box-add icon">保存</span>
                            <span class="icon-redo2 icon">分享</span>
                        </p>
                    </div>
                </div>
        </div>
        <div class="Aticleitem2">
            <cover  class="Aticleitem3" v-for="(item,index) in commentList" :key="index" :detailitem="item"></cover>
        </div>
       

  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import Cover from "@/views/Cover.vue"
export default {
    components:{NavBar,Cover},
    data(){
        return{
            model:null,
            commentList:null
        }
    },
    methods: {
        async articleitemData(){
            console.log(this.$route)
            const res = await this.$http.get('/article/'+this.$route.params.id) 
            this.model = res.data[0]
        },
        async commentData(){
            const res = await this.$http.get("/commend");
            this.commentList = res.data;
        }
    },
    created(){
        this.articleitemData()
        this.commentData()
    },
    watch: {
        $route(){
            this.articleitemData()
            this.commentData()
        }
    },

}
</script>

<style lang="less">
.detailinfo{
    background-color: white;
    position: relative;
    .video{
        position: absolute;
        top: 1px;
        height: 100%;
        width: 100%;
        video{
            width: 100%;
        }
    }
    .articlename{
        position: absolute;
        background-color: white;
        top: 210px;
        width: 100%;
        margin: 5px 0;
        .articlename2{
            margin: 0 10px;
             .catetitle{
            background-color: rgb(235, 114, 114);
            color: pink;
            font-size: 15px;
            border-radius: 4px;
            }
            .userinfoname{
                margin: 5px 0;
                font-size: 13px;
                .userinfoxinxi{
                    color:rgb(102, 107, 110);
                    font-size: 12px;
                    margin: 0 5px;
                }
            }
            .userinfoicon{
                margin: 5px 0;
                .icon {
                    margin: 0 10px 0 5px;
                    color:rgb(102, 107, 110);
                    font-size: 12px;
                }
            }
        }
       
    }
}
.Aticleitem2{
    display: flex;
    flex-wrap: wrap;
    top:340px;
    position: absolute;
    justify-content: space-around;
    .Aticleitem3{
      width:45%
    }
}

</style>