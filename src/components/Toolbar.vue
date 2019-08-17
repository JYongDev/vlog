<template>
  <div class="toolbar">
    <div class="content">
      <a>
        <div class="logo"></div>
      </a>
      <div style="display :inline-block;width: 100%;"></div>
      <div class="menu">
        <router-link class="menuitem" to="/">首页</router-link>
        <router-link class="menuitem" to="/register">注册</router-link>
        <router-link class="menuitem" to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toolbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.toolbar{
    padding: 0 20px;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
}

.content{
   max-width: 1060px;
    min-width: 800px;
    height: 44px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-size: 15px;
    font-weight: 500;
}

.menu{
   display :inline-block;
    width: 350px;
    text-align: right;
}

.menuitem:visited,
.menuitem:active,
.menuitem:link,
.menuitem{
    color: #556;
    margin-left: 10px;
    text-decoration: none;
}

.logo{
    background-image: url(../assets/img/v2ex@2x.png);
    background-size: 94px 30px;   
    width: 94px;
    height: 30px;
    background-repeat: no-repeat;
    display: inline-block;
}

</style>
