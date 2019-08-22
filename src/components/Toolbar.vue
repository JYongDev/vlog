<template>
  <div class="toolbar">
    <div class="content">
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Toolbar'
}
</script>

<style scoped>

.toolbar{
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
}

.content{
  max-width: 1060px;
  height: 44px;
  margin: 0 auto;
}

.logo{
    background-image: url(../assets/img/v2ex@2x.png);
    background-size: 94px 30px;   
    width: 94px;
    margin-top: 6px;
    height: 30px;
    background-repeat: no-repeat;
    display: inline-block;
}
</style>
