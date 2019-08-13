<template>
    <div >
        <div class="list_items" v-for="item in datas" :key="item.id">
            <div>
                <a>
                    <img class="list_items_cover"  src="../assets/img/avatar1.png" />
                </a>
            </div>

            <div class="list_items_type">
                <a>{{ item.type }}</a>
            </div>
    
            <div class="list_item_topic"> 
                <a v-bind:href="item.detailUrl">
                    {{ item.title }}
                </a>  
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'ListView',
    props:{
        datas:Array
    }
}
</script>

<style scoped>
.list_items{
    border: none; 
    border-bottom: 1px solid #e2e2e2;  
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    padding: 10px 10px;
}

.list_items_cover{ 
    height: 44px;
    width: 44px;
    border-radius: 3px;
    border-bottom-color: #e2e2e2;
    border: none;
}

.list_items_type{
    min-width: 44px;
    width: auto;
    line-height: 44px;
    height: 44px;  
    margin-left: 6px;
}

.list_items_type a,
.list_items_type a:active,
.list_items_type a:visited,
.list_items_type a:link {
    color: #778087;
    text-decoration: none;
    padding: 3px 7px;
    vertical-align: baseline;
    font-size: 11px;
    font-weight: 400;
    background-color: #e4e4e4;
    border-radius: 3px;
}

.list_item_topic{
    height: 44px;
    line-height: 44px;
    margin-left: 15px;
    text-decoration: none;
    font-size: 15px;  
    font-weight: 500;
    text-align: left;
    width: 100%;
}

.list_item_topic a,
.list_item_topic a:link,
.list_item_topic a:visited,
.list_item_topic a:active{
    text-decoration: none;
    width: auto;
    display: flex;
    align-items: center;
    color: #656565;
}

</style>