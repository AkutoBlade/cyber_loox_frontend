<template>
<NavBar/>
  <router-view/>
  <div id="follow"></div>
<FooterCom/>
</template>
<script>
window.addEventListener('mousemove',(event)=>{
  document.getElementById('follow').style.top = event.screenY + "px";
  document.getElementById('follow').style.left = event.screenX+ "px";
})
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
 @import url('https://fonts.googleapis.com/css?family=Dosis:300,400,500');
body{
    background-color:#252020; 
}

#follow{
position: absolute;
left: 0%;
bottom: 0%;
width:10px;
height: 10px;
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
