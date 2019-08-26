<template>
    <div class="comments">
        <div class="comments_head">
            <span>{{commentsExtra.total}}</span>
            <span>&nbsp;附言</span>
            <span>&nbsp;|&nbsp;</span>
            <span>最后附言时间：</span>
            <span>{{commentsExtra.finalReplyTime}}</span>
        </div>
        <div class="comments_content" v-for="item in comments" :key="item.id">
            <div class="items">
                <img src="../assets/img/avatar1.png">
                <div style="width:auto;">
                    <a>{{item.username}}</a>
                    <span class="fade">{{item.replyTime}}</span>&nbsp;
                    <span class="fade">{{item.source}}</span>
                    <div class="items_content">{{item.content}}</div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Comment',
    data:function(){
        return {
            commentsExtra:{
                total:155,
                finalReplyTime:'2019-07-22 16:40:45'
            },
            comments:[
                {   
                    id:1,
                    content:'目的是花了钱没有心里负担地发泄情绪（可以包括骂我），又不是骂我。你在我别的帖子里骂我，就算没有心里负担，也有被我骂回去的风险呀。这样的话，本来是出气顺气的事变成了受气，你觉得这个免费值得吗？目的是花了钱没有心里负担地发泄情绪（可以包括骂我），又不是骂我。你在我别的帖子里骂我，就算没有心里负担，也有被我骂回去的风险呀。这样的话，本来是出气顺气的事变成了受气，你觉得这个免费值得吗？',
                    replyTime:'3 小时 2 分钟前',
                    source:'via iPhone',
                    username:'Lasu',
                    avatar:''
                },
                {   
                    id:2,
                    content:'也有可能是我发音的问题，不过我身边也很少听到不带儿化音的发音突然想到有可能存在地域问题，北方的发音一般都会带，南方不带儿化音的会很多 这是个大问题',
                    replyTime:'1 小时 5 分钟前',
                    source:'via Web',
                    username:'Hnshals',
                    avatar:''
                }
                ,
                {   
                    id:3,
                    content:'问题是你打算用什么框架啊 这是个大问题',
                    replyTime:'2 小时 5 分钟前',
                    source:'via Android',
                    username:'Yhyas',
                    avatar:''
                }
            ]
        }
    }
}
</script>

<style scoped>

.comments{
    background-color: #fff;
    height: auto;
    border-bottom: 1px solid #e2e2e2;
}

.comments_head{
    padding: 10px;
    height: auto;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.comments_head span {
    font-size: 13px;
    color: #999;
}

.items{
    display: flex;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.items img{
    border-radius: 5px;
    height: 48px;
    margin-right: 20px;
}

.items div a{
    margin-right: 15px;
    font-size: 14px;
    text-align: left;
    color: #999;
    font-weight: bold;
}

.fade {
    font-size: 11px;
    color: #ccc;
    text-align: left;
    font-weight: bold;

}

.items_content{
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.6;
    text-align: left;
    color: #000;
    word-break: break-word;
}
</style>