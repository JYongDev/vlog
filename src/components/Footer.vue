<template>
    <div id="bottom">
        <div class="content">
            <div class="inner">
                <strong>
                    <a href="#" class="dark" >关于</a> &nbsp; 
                    <span class="snow">·</span> &nbsp; 
                    <a href="#" class="dark">API</a> &nbsp; 
                    <span class="snow">·</span> &nbsp; 
                    <a href="#" class="dark">感谢</a> &nbsp; 
                </strong>
                    <span class="small fade">
                        build by jyong , copy theme from 
                        <a href="https://www.v2ex.com" target="blank">https://www.v2ex.com</a> 
                        <br>
                        ♥ learning vue.js
                    </span>
                </div>
            </div>
    </div>
</template>


<script>
export default {
    name:'Bottom'
}
</script>

<style scoped>
#bottom {
    border-top: 1px solid rgba(0,0,0,.22);
}

.content {
    max-width: 1100px;
    margin: 0 auto;
}

.inner {
    padding: 40px 10px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
}

.fade {
    color: #ccc;
}

.small {
    font-size: 11px;
    margin-top:20px;
    display: block;
}

a:active, a:link, a:visited {
    color: #778087;
    text-decoration: none;
    word-break: break-word;
}
.snow {
    color: #e2e2e2;
}
a.dark:active, a.dark:link, a.dark:visited {
    color: gray;
    text-decoration: none;
}

</style>