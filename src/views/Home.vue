<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active" sticky>
      <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
        <div class="detailparent">
          <cover class="detailitem" :detailitem="detailitem" v-for="(detailitem,detailindex) in item.list" :key="detailindex"/>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue"
import cover from "@/views/Cover.vue"
export default {
    data(){
      return{
          category:[],
          active:0,
          page:0,
          pagesize:10,
      }
    },
    components:{
        NavBar,cover
    },
    methods:{
        async selectCategory(){
          const res = await this.$http.get("/category");
          this.changeData(res.data)
        },
        changeData(data){
          const category = data.map((item)=>{
            item.list = []
            item.page = 0
            item.pagesize = 10
            return item
          })
          this.category = category
          this.selectArticle()
        },
        async selectArticle(){
          const categoryitem = this.categoryitem();
          const res = await this.$http.get("/detail/"+categoryitem._id,
            {
              params:{
                page:categoryitem.page,
                pagesize:categoryitem.pagesize
              }
            }
          )
          categoryitem.list.push(...res.data)
        },
        categoryitem(){
          const categoryitem = this.category[this.active];
          return categoryitem
        }
    },
    created() {
        this.selectCategory()
    },
    watch:{
      active(){
        this.selectArticle()
      }
    }
}
</script>

<style lang="less">
.detailparent{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .detailitem{
      width:45%
    }
}
</style>