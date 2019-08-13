<template>  
  <div>
    <toolbar></toolbar>
    <div class="center" >
      <div class="content">
        <tabs ref="tabChild" :datas="tabList" v-on:switchTab="switchTab"></tabs>
        <listview :datas="listDatas"></listview>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>

const tabsData=[{id:1,name:'Java'},{id:2,name:'Android'},{id:3,name:'Git'},{id:4,name:'SpringBoot'},{id:5,name:'Vue'}]
const listViewData =[
    {
        detailUrl:"detail.html",
        id:1,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:2,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:3,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:4,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:5,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:6,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:7,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:8,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:9,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:10,
        type:'博客',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
];
const listViewData2 =[
    {
        detailUrl:"detail.html",
        id:1,
        type:'Android',
        title:'博客 博客 博客 博客 博客 博客 博客 博客 博客 ',
    },
    {
        detailUrl:"detail.html",
        id:2,
        type:'Android',
        title:'Android Android Android Android Android',
    }
];

import toolbar from '@/components/Toolbar';
import tabs from '@/components/Tabs';
import listview from '@/components/ListView';
import bottom from '@/components/Footer';

export default {
  name: 'Home',
  components:{
    toolbar,tabs,listview,bottom
  },
  data:function(){
    return{
      tabList:tabsData,
      listDatas:listViewData
    }
  },
  methods:{
    switchTab:function(index){
      console.log("switch tabs id = "+ this.tabList[index].id);
      this.listDatas= listViewData2;
    },
    getCurrentTab:function(){
        var index = this.$refs.tabChild.currentTab();
        console.log("index = "+ this.tabList[index].id);
        return index;
    }
  }
}
</script>

<style scoped>
.center{
  padding:20px 0;
  background-color:#e2e2e2;
}
.content{
  background-color:#fff;
  border-radius: 5px;
  width: 1060px;
  margin: 0 auto;
  height: auto;
}
</style>
