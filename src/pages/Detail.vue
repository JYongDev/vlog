<template>
    <div>
        <toolbar></toolbar>
        <div class="container">
            <div class="detail_wrapper">
                <div class="detail_content">
                    <div class="content_head">                    
                        <div>
                            <h1>{{ blog.title }}</h1>
                            <div class="content_head_times">
                                <a>{{blog.username}}</a>&nbsp;
                                <span>{{blog.createTime}}</span>
                            </div>
                        </div>
                        <img src="../assets/img/avatar1.png"/>
                    </div>
                    <div class="content_main" v-html="blog.content"></div>
                    <div style="height: 40px"></div>
                </div>
                <div class="detail_comments">
                    <div class="detail_comments_head">
                        <span>155</span>
                        <span>&nbsp;回复</span>
                        <span>&nbsp;|&nbsp;</span>
                        <span>最后回复：</span>
                        <span>2019-07-22 16:40:45</span>
                    </div>
                    <div class="detail_comments_content">
                        <div class="comments_items">
                            <img src="../assets/img/avatar1.png">
                            <div style="width:auto;">
                                <a>username</a>
                                <span class="comments_items_times">3 小时 2 分钟前</span>&nbsp;
                                <span class="comments_items_times">via iPhone</span>
                                <div class="comments_items_content">目的是花了钱没有心里负担地发泄情绪（可以包括骂我），又不是骂我。你在我别的帖子里骂我，就算没有心里负担，也有被我骂回去的风险呀。这样的话，本来是出气顺气的事变成了受气，你觉得这个免费值得吗？目的是花了钱没有心里负担地发泄情绪（可以包括骂我），又不是骂我。你在我别的帖子里骂我，就算没有心里负担，也有被我骂回去的风险呀。这样的话，本来是出气顺气的事变成了受气，你觉得这个免费值得吗？</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import toolbar from '@/components/Toolbar';
import bottom from '@/components/Footer';

var blogData = {
           title:'第一次觉得自己这么难受。。。扎心了',
           username:'username',
           createTime:'2018-08-08',
           content:'<strong>今天</strong>女朋友说要和我说一件事情，<br/>在我设想了种在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉不知道要花多久，会在心底留下多深的疤痕。。。感觉可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心。，只能把这里当做树洞了，好想出去喝两杯也许就好了吧'
}

export default {
    name:'Detail',
    components:{
        toolbar,bottom
    },
    data:function(){
        return {
            blog:{
                title:String,
                username:String,
                createTime:String,
                content:String,
            }
        }
    },
    mounted:function(){
       var id =  this.$route.params.id;
       console.log("detail id "+ id);
       this.blog = blogData;
    }
}
</script>

<style scoped>
.container{
    background-color: #7b95b3;
    padding: 30px 0;
}

.detail_wrapper{
    max-width: 960px;
    margin: 0 auto ;
    height: auto;
    background-color: white;
}

.detail_content{
    height: auto;
}

.content_head{
    display: flex;
    text-align: right;
    padding: 20px 15px;
    border-bottom: 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-style: solid;
}

.content_head img{
   border-radius: 10px;
    width: 69px;
    height: 69px;
    margin-right: 15px;
}

.content_head div{
    flex-grow:1;
}

.content_head_times{
    margin-top: 20px;
    text-align: left;
}

.content_head_times a{
    color: #778087;
    font-size: smaller;
}

.content_head_times span{
    color: #778087;
    font-size: smaller;
}

.content_head h1 {
    text-align: left;
    margin: 0px;
    font-size: 24px;
    font-weight: 500;
    padding: 0px;
    width: auto;
}

/* .content_head div{
    clear: left;
} */

.content_main{
    font-size: 14px;
    line-height: 1.6;
    color: #000;
    word-break: break-word;
    padding: 20px 15px;
    text-align: left;
    border-bottom: 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-style: solid;
}

.detail_comments{
    display: none;
    padding-bottom: 10px;
    background-color: #fff;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0,0,0,.1);
    border-bottom: 1px solid #e2e2e2;
}

.detail_comments_head{
    padding: 10px;
    height: auto;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.detail_comments_head span {
    font-size: 13px;
    color: #999;
}

.comments_items{
    display: flex;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.comments_items img{
    border-radius: 5px;
    /* width: 48px; */
    height: 48px;
    margin-right: 20px;
}

.comments_items div a{
    margin-right: 15px;
    font-size: 14px;
    text-align: left;
    color: #999;
    font-weight: bold;
}

.comments_items_times {
    font-size: 11px;
    color: #ccc;
    text-align: left;
    font-weight: bold;

}
.space20{
    height: 20px;
}
.comments_items_content{
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.6;
    text-align: left;
    color: #000;
    word-break: break-word;
}

</style>