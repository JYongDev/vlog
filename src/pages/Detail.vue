<template>
    <div>
        <toolbar></toolbar>
        <div class="container">
            <div class="content">
                <div class="left">
                    <!-- article header -->
                    <div class="article  white_bg">
                        <div class="article_title">                    
                            <div>
                                <a class="fade">V2EX</a>
                                <span class="snow">&nbsp;›&nbsp;</span>
                                <a class="fade">{{blog.type}}</a>

                                <h1>{{ blog.title }}</h1>
                                <div class="article_time">
                                    <a class="article_bold">{{blog.username}}</a>
                                    <span class="snow">&nbsp;•&nbsp; </span>
                                    <span class="fade">{{blog.createTime}}</span>
                                    <span class="snow">&nbsp;•&nbsp; </span>
                                    <span class="fade">444次点击</span>
                                </div>
                            </div>
                            <img src="../assets/img/avatar5.png"/>
                        </div>
                        <div class="article_content" v-html="blog.content"></div>
                    </div>

                    <div>
                        <comment></comment>
                    </div>
                </div>
                <div class="right">
                    <hot></hot>
                    <adboard></adboard>
                </div>
            </div>
        </div>
        <bottom></bottom>
    </div>
</template>

<script>
import toolbar from '@/components/Toolbar';
import bottom from '@/components/Footer';
import hot from '@/components/Hot';
import adboard from '@/components/ADBoard';
import comment from '@/components/Comment';

var blogData = {
    type:'Total',
    title:'第一次觉得自己这么难受。。。扎心了',
    username:'lazyme',
    createTime:'7天前',
    content:'今天女朋友说要和我说一件事情，<br/>在我设想了种在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉不知道要花多久，会在心底留下多深的疤痕。。。感觉可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心里真的很难过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉过，就是不知道要花多久，会在心底留下多深的疤痕。。。感觉天女朋友说要和我说一件事情，在我设想了种种可能后她，可当听到这句话的时候果然还是心里一下子倒了一百瓶醋一样揪心。。。果然事情发生在自己身上就会乱了阵脚，最难过的是，我从心理上是想要 let it go，所以故作轻松的说：“这种事没什么大不了的，很普遍”诸如此类安慰她的话。。。（影帝附体）实际上心。，只能把这里当做树洞了，好想出去喝两杯也许就好了吧'
}

export default {
    name:'Detail',
    components:{
        toolbar,bottom,hot,adboard
        ,comment
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

.white_bg{
    background-color: #fff;
}

.container{
    background-color: #e2e2e2;
    padding: 20px 0;
}

.article_content{
    font-size: 15px;
    line-height: 1.8;
    color: #000;
    word-break: break-word;
    padding: 15px;
    text-align: left;
    border-bottom: 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-style: solid;
}

.article{
    height: auto;
    margin-bottom:20px;
}

.article_title{
    display: flex;
    text-align: left;
    padding: 10px 15px;
    border-bottom: 1px;
    border-bottom-color: #e2e2e2;
    border-bottom-style: solid;
}

.article_title img{
    border-radius: 5px;
    width: 73px;
    height: 73px;
}

.article_title h1 {
    text-align: left;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 500;
    padding: 0px;
    width: auto;
}

.article_title div{
    flex-grow:1;
}

.article_time{
    margin-top: 10px;
    text-align: left;
}

.fade{
    color: #9ba4ad;
    font-size: smaller;
}

.snow{
    font-size: 12px;
     text-align: center;
    color: #9ba4ad;
}

.article_bold{
    font-weight: bold;
     font-size: 15px;
    text-align: center;
    color: #778087;
}

</style>