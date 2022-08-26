<template>
<NavBar/>
  <router-view/>
<FooterCom/>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterCom from './components/Footer.vue'
export default {
  name:'navbar',
  components:{
    NavBar,
    FooterCom
    }
}
</script>
<style>
body{
    background-color:#252020; 
}
</style>
