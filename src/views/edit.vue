<template>
    <div>
        <div style="border-bottom:10px solid #ebebeb"><nav-bar></nav-bar></div>
        <div class="uploadfile">
            <div class="uploadimg"><van-uploader preview-size="100vw" :after-read="afterRead" /></div>
            <edit-banner item="头像">
                <img class="img1" :src="model.user_img"  slot="eve" alt="" v-if="model.user_img">
                <img class="img1" src="@/assets/head_img.jpg"  slot="eve" alt="" v-else>
            </edit-banner>
        </div>
        <edit-banner item="昵称" @bannerClick="nameshow=true">
            <a href="javascript:;" slot="eve">{{model.name}}</a>
        </edit-banner>
        <edit-banner item="UID">
            <a href="javascript:;" slot="eve">{{model.id}}</a>
        </edit-banner>
        <edit-banner item="性别" @bannerClick="gendershow=true" >
            <a href="javascript:;" slot="eve">{{model.gender==1?'男':'女'}}</a>
        </edit-banner>
        <edit-banner item="个性签名" @bannerClick="textshow=true" >
            <a href="javascript:;" slot="eve">{{model.user_desc}}</a>
        </edit-banner>

        <div class="editback" @click="$router.back()">返回用户中心</div>
        <van-dialog
            use-slot
            title="昵称"
            show-cancel-button
            @confirm="nameConfirm"
            @close="content=''"
            v-model="nameshow"
            >
             <van-field v-model="content" type="textarea" autofocus />
        </van-dialog>
        <van-dialog
                use-slot
                title="性别"
                show-cancel-button
                @confirm="genderConfirm"
                @close="content=''"
                v-model="gendershow"
                >
            <van-field v-model="content" type="textarea" autofocus />
        </van-dialog>
        <van-dialog
            use-slot
            title="个性签名"
            show-cancel-button
            @confirm="textConfirm"
            @close="content=''"
            v-model="textshow"
            >
             <van-field v-model="content" type="textarea" autofocus />
        </van-dialog>

            <van-notify id="custom-selector" type="warning" message="输入格式错误！" />
    </div>
 
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import EditBanner from "@/components/common/EditBanner.vue"
export default {
    data(){
        return{
            model:{},
            nameshow:false,
            textshow:false,
            gendershow:false,
            content:"",
        }
    },
    components:{
        NavBar,EditBanner
    },

    methods:{
        async selectUser(){
            const res = await this.$http.get("/user/"+localStorage.getItem('id'))
            this.model = res.data[0]
        },
        async afterRead(file){
            const formdata = new FormData()
            formdata.append('file',file.file)
            const res = await this.$http.post('/upload',formdata)
            this.model.user_img = res.data.url
            this.updateUser()
        },
        async updateUser(){
            await this.$http.post('/update/'+localStorage.getItem('id'),this.model)
        },
        textConfirm(){
            this.model.user_desc = this.content;
            this.updateUser();
            this.content=""
        },
        nameConfirm(){
            this.model.name = this.content;
            this.updateUser();
            this.content=""
        },
        genderConfirm(){
            if(this.content!=="男"&&this.content!=="女"){
                this.$notify({ type: 'danger', message: '输入格式提示!' });
                return  
            }
            if(this.content==='男'){
                this.model.gender = 1;
            }else{
                this.model.gender = 0;
            }
            this.updateUser();
            this.content = ""
        }
    },
        created() {
            this.selectUser()
    },
}
</script>

<style lang="less">
.editback{
    background-color: white;
    color: darkgray;
    justify-content: center;
    align-items: center;
    line-height: 11.111vw;
    text-align: center;
    height: 11.111vw;
    margin-top: 4.167vw;
}
.uploadfile{
    overflow: hidden;
    position: relative;
    .uploadimg{
        opacity: 0;
        position:absolute;
    }
}
.img1{
    width: 13.889vw;
    height: 13.889vw;
}
a{
    color: black;
}
</style>