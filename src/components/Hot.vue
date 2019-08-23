<template>
    <div class="hot_list">
        <div class="cell">
            <span>最新主题</span>
        </div>
        <div>
            <div class="cell item" v-for="item in datas " :key="item.id">
                <img src="../assets/img/avatar1.png"/>
                <router-link :to="{name:'Detail' ,params:{id:item.id}}">{{ item.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Hot',
    data:function(){
        return {
            datas:[]
        }
    },
    mounted:function(){
        this.getDatas();
    },
    methods:{
        getDatas:function(){
          
            this.datas = [
                {
                    id:1,
                    avatar:"",
                    title:"早上差点挂了...各位注意身体...健康才是真正啊"
                },{
                    id:2,
                    avatar:"",
                    title:"记一次大裁员"
                },{
                    id:3,
                    avatar:"",
                    title:"又被小米的垃圾坑了，米粉快来 DISS 我啊，我要揭露小米的套路了"
                },{
                    id:4,
                    avatar:"",
                    title:"去公共游泳池玩，男生是怎么解决这个问题的？"
                },
                {
                    id:5,
                    avatar:"",
                    title:"用习惯大显示器，笔记本的小屏已经没有心情写代码了，切换编辑器，浏览器，模拟器，设计图效率太低了。只想摸鱼"
                },
                {
                    id:6,
                    avatar:"",
                    title:"早上差点挂了...各位注意身体...健康才是真正啊"
                }]
        }
    }
   
}
</script>

<style scoped>
.hot_list{
    height: auto;
    background-color: #fff;
    margin-bottom: 20px;
}

.cell{
    padding:10px;
    font-size: 14px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.cell span{
    color: #ccc;
}

.cell img{
    width: 24px;
    height:24px;
}

.item{
    display: flex;
    flex-flow: row;
    align-items: center
}

.item img{
    margin-right: 8px;
}


.item a:link,
.item a:active,
.item a:visited{
    flex: 1;
    word-break:normal;
    color: #778087;
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    line-height: 120%;
    text-shadow: 0 1px 0 #fff;
}

.item a:hover{
    text-decoration: underline;
}

</style>