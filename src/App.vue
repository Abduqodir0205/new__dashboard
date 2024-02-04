<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Login from './components/Login.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
 data() {
  return {
    
  }
 },
 components:{
  Login,
 }
}
</script>
<style>
  
</style>