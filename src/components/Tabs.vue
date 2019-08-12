<template>
    <div>
        <div id="tabs">
            <a  class="tab" v-for="(item ,index) in tabList" href="#" 
                v-bind:key="index"
                v-bind:class="{tab_select : activeIndex === index}" 
                v-on:click="onTabClick(index)">
                    {{item}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>

</style>