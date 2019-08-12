<template>  
  <div>
    <toolbar></toolbar>
    <div>content</div>
    <div>footer</div>
  </div>
</template>

<script>

// import helloWorld from '@/components/HelloWorld'
import toolbar from '@/components/Toolbar' 
export default {
  name: 'Home',
  components:{
    toolbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
