<template>
    <div id="tabs">
        <a  class="tab_item" v-for="(item,index) in datas" 
            v-bind:key="index"
            v-bind:class="{tab_item_select : activeIndex === index}" 
            v-on:click="onTabClick(index)"
            >
                {{item.name}}
        </a>
    </div>
</template>

<script>
export default {
    name:'Tabs',
    data:function(){
        return {
            activeIndex: 0 
        }
    },
    props:{
        datas:Array
    },
    methods:{
        onTabClick(indexVal){
            this.activeIndex = indexVal;
            this.$emit('switchTab',indexVal);
        },
        currentTab(){
            return this.activeIndex;
        }
    }
}
</script>


<style scoped>
#tabs{
    border-bottom: 1px solid #efefef;
    border-radius: 5px;
    padding: 13px;
    background: #fff;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
    cursor:pointer;
}

.tab_item,
.tab_item:link,
.tab_item:active,
.tab_item:visited
{
    text-align: center;
    font-size: 14px;
    padding: 3px 8px;
    border-radius: 4px;
    margin-right: 10px;
    color: #304455;
    text-decoration: none;
}

.tab_item:hover{
    background-color: #efefef;
}

.tab_item_select:hover,
.tab_item_select:visited,
.tab_item_select:link,
.tab_item_select:active,
.tab_item_select{
    text-align: center;
    font-size: 14px;
    padding: 3px 8px;
    border-radius: 4px;
    margin-right: 10px;
    color: #fff;
    text-decoration: none;
    background-color: #000;
}

</style>