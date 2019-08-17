<template>  
  <div>
    <toolbar></toolbar>
    <div class="center" >
      <div class="content">
        <tabs ref="tabs" :datas="tabList"></tabs>
        <router-view></router-view>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>

const tabsData=[{id:1,name:'Total'},{id:2,name:'Java'},{id:3,name:'Android'},
{id:4,name:'Git'},{id:6,name:'Vue'},{id:7,name:'SpringBoot'}];

import toolbar from '@/components/Toolbar';
import tabs from '@/components/Tabs';
import bottom from '@/components/Footer';

export default {
  name: 'Home',
  components:{
    toolbar,tabs,bottom
  },
  data:function(){
    return{
      tabList:[]
    }
  },
  methods:{
    requestTabs:function(){
      this.tabList = tabsData;
    }
  },
  mounted:function(){
    this.requestTabs();
  }
}
</script>

<style scoped>
.center{
  padding:20px 0;
  background-color:#e2e2e2;
}
.content{
  padding-top: 2px;
  background-color:#fff;
  border-radius: 5px;
  width: 1060px;
  margin: 0 auto;
  height: auto;
}
</style>
