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

::-webkit-scrollbar {
  width: 9px;
  height: 2px;
}
::-webkit-scrollbar-track {
  background: #252020;   
}
::-webkit-scrollbar-thumb {
  background:#3ec5ffdf;
}
</style>
