<template>  
  <div>
    <toolbar></toolbar>
    <div class="center" >
      <div class="content">
        <div class="left">
          <tabs ref="tabs" :datas="tabList"></tabs>
          <router-view></router-view>
        </div>
        <div class="right">
          <hot></hot>
          <adboard></adboard>
            <!-- <adboard></adboard> -->
        </div>
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
import hot from '@/components/Hot';
import adboard from '@/components/ADBoard';

export default {
  name: 'Home',
  components:{
    toolbar,tabs,bottom,hot
    ,adboard
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


</style>
