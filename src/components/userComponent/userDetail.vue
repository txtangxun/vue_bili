<template>
<div>
      <div class="userDetail">
        <div class="head">
            <img :src="userInfo.user_img" v-if="userInfo.user_img" alt="">
            <img src="@/assets/timg.jpg" v-else alt="">
        </div>
        
        <div class="detail">
            <div class="xinxi">
                <span class="xijie">
                    <p>1</p>
                    <p class="wenzi">粉丝</p>
                </span>
                <span class="xijie">
                    <p>4</p>
                    <p class="wenzi">关注</p>
                </span>
                <span>
                    <p>2</p>
                    <p class="wenzi">获赞</p>
                </span>
            </div>
            <div class="bianji" @click="$router.push('/edit')">
                编辑资料
            </div>
        </div>
    </div>
        <div class="username">
            <p v-if="userInfo.name">{{userInfo.name}}</p>
            <p v-else>昵称</p>
            <p v-if="userInfo.user_desc">{{userInfo.user_desc}}</p>
            <p v-else>这个人很神秘，什么都没有写</p>
        </div>
</div>

</template>

<script>
export default {
    props:["userInfo"]
}
</script>

<style lang='less'>
.userDetail{
    height: 90px;
    display: flex;
    background-color: white;
    img{
        height:80px;
        width: 80px;
        border-radius: 50%;
        margin: 5px 10px;
    }
    .detail {
        overflow: hidden;
        flex:1;
        // display: flex;
        .xinxi{
            display:flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            span{
                flex:1
            }
            .xijie {
                border-right: 1px solid #ccc;
            }
            .wenzi{
                color: #ccc;
            }
            p{
                margin:0 auto;
            }
        }
        .bianji {
            margin: 15px 5px;
            display: flex;
            // flex: auto;
            justify-content: center;
            align-items: center;
            border: 1px solid pink;
            color: pink;
            border-radius: 5px;
        }
    }
}
.username {
    background-color: white;
    p:nth-child(1){
        font-size: 20px;
        margin: 0 0;
    }
    :nth-child(2){
        font-size:14px;
        color:#ccc;
        margin:3px 0;
    }
}
</style>