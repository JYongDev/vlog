<template>
    <div class="list">
        <div class="list_items" v-for="item in datas" :key="item.id">
            <div>
                <a>
                    <img class="cover"  src="../assets/img/avatar5.png" />
                </a>
            </div>

            <div class="topic">
                <router-link class="title" :to="{name :'Detail' ,params:{ id:item.id}}">
                    {{ item.title }} 
                </router-link> 
                <div>
                    <a class="type">{{ item.type }}</a>
                    <span class="snow">&nbsp;•&nbsp;</span>
                    <a class="writer" >{{item.writer}}</a>
                    <span class="snow">&nbsp;•&nbsp;</span>
                    <span class="create_time">{{item.time}}</span>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    name:'ListView',
     data:function(){
         return {
            datas:Array
        }
    }, 
    methods:{
        getListData :function(name){
            this.datas = [
                {
                    detailUrl:"detail.html",
                    id:1,
                    type:'Android',
                    title:'拉黑一个人，会让你看不到完整的世界；试试拉红？',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:2,
                    type:'Git',
                    title:'做了一个电影小程序',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:3,
                    type:'Vue',
                    title:'方便查看 GitHub Trending 的小程序，随时查看没有遗漏~',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:4,
                    type:'SpringBoot',
                    title:'迫于一些奇奇怪怪的原因，在 iOS 上通过 steam link 用 Dota2 客户端看 TI 的教程',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:5,
                    type:'Android',
                    title:'我有一个很惨的想法，让有网瘾的人，疯狂做他喜欢做的事，帮他戒除网瘾',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:6,
                    type:'Java',
                    title:'接口文档工具，现已支持历史记录、diff、版本啦，欢迎围观吐槽',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:7,
                    type:'Vue',
                    title:'豆瓣的「阿尔法城」如果是分布式的或许能存活下来',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:8,
                    type:'Git',
                    title:'我们团队开源了一个终端 AI 运行环境，欢迎试用吐槽',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:9,
                    type:'Java',
                    title:'当掌握到一定程度的 Python 后，读源码是否更容易提高技能？',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
                {
                    detailUrl:"detail.html",
                    id:10,
                    type:'Java',
                    title:'大佬们的最后一款摸鱼程序！今日热榜，支持全平台： PC、移动 Web、Chrome 插件、PWA（Android、iOS）和桌面程序（Win、 Linux 、MacOS）。随时随地，愉快摸鱼！',
                    time:'2019-08-17 12:22:23',
                    writer:'XiaoUzi'
                },
            ];
        }
    },
    mounted:function(){
        var name = this.$route.params.name
        var newName = name.toLowerCase();
        this.getListData(newName);
    },
    watch:{
        '$route':function(to ,from){
            console.log('------------------------');
            console.log("to = "+ to.params.name);
            console.log("from = "+ from.params.name)
        }
    }
}
</script>

<style scoped>

.list{
    background-color: #fff;
}
.list_items{
    border: none; 
    border-bottom: 1px solid #e2e2e2;  
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    padding: 10px 10px;
}

.cover{ 
    height: 48px;
    width: 48px;
    border-radius: 3px;
    border-bottom-color: #e2e2e2;
    border: none;
}

.type{
    width: auto;
    display: inline-block;
    font-size: 12px;
    background-color: #f5f5f5;
    color: #999;
    border-radius: 2px;
    padding: 4px;
    line-height: 12px;
}

.type a,
.type a:active,
.type a:visited,
.type a:link {
    color: #999;
    text-decoration: none;
    padding: 3px 7px;
    vertical-align: baseline;
    font-size: 11px;
    font-weight: 400;
    background-color: #eceaea;
    border-radius: 3px;
}

.topic{
    margin:0  100px 0 15px;
    text-decoration: none;
    font-size: 16px;  
    font-weight: 500;
    text-align: left;
    width: 100%;
    display: inline-block;
}

.title,
.title:link,
.title:visited,
.title:active{
    text-decoration: none;
    width: auto;
    display: flex;
    align-items: center;
    color: #778087;
    margin-bottom:6px;
}

.create_time{
    color: #ccc;
    font-size: 12px;
}

.snow{
    font-size: 12px;
    text-align: center;
    color: #dcdcdc;
}

.writer{
    color: #778087;
    text-decoration: none;
    word-break: break-word;
    font-weight: bold;
    font-size: 12px;
    line-height: 12px;
    cursor: pointer;
}

.writer:hover{
    text-decoration: underline;
}
</style>