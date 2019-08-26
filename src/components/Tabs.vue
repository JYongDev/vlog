<template>
    <div id="tabs">
        <router-link class="tab_item" v-for="(item,index) in datas" 
            :key="index"
            active-class="tab_item_select"
            :to="{name:'topics' ,params:{name :item.name.toLowerCase()}}">
            {{item.name}}
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Tabs',
    props:{
        datas:Array
    }
}
</script>


<style scoped>
#tabs{
    border-bottom: 1px solid #efefef;
    padding: 10px;
    background: #fff;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
}

.tab_item,
.tab_item:link,
.tab_item:active,
.tab_item:visited
{
    text-align: center;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    margin-right: 10px;
    color: #555;
    text-decoration: none;
    display: inline-block;
}


.tab_item:hover{
    background-color: #efefef;
}

.tab_item_select:visited,
.tab_item_select:link,
.tab_item_select:active,
.tab_item_select{
    text-align: center;
    font-size: 14px;
    padding: 5px 8px;
    border-radius: 4px;
    margin-right: 10px;
    color: #fff;
    text-decoration: none;
    background-color: #334;
}

</style>